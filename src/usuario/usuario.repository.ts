import { Injectable } from "@nestjs/common/decorators";
import { UsuarioEntity } from "./usuario.entity";

Injectable()
export class UsuarioRepository {

    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async lista() {
        return this.usuarios
    }

    async existeComEmail(email: string) {
        const possivelEmail = this.usuarios.find(
            usuario => usuario.email === email
        );
        return possivelEmail !== undefined;
    }

    private buscaPorId(id: string) {
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );
        if (!possivelUsuario) {
            throw new Error('Usuário não existe!');
        }

        return possivelUsuario;
    }

    async atualiza(id: string, dadosDoUsuario: Partial<UsuarioEntity>) {
        const usuario = this.buscaPorId(id)
        Object.entries(dadosDoUsuario).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }

            usuario[chave] = valor;
        });

        return usuario;
    }

    async remove(id: string) {
        const usuario = this.buscaPorId(id);
        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        );

        return usuario;
    }
}
