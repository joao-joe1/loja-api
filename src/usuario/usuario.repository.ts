import { Injectable } from "@nestjs/common/decorators";

Injectable()
export class UsuarioRepository {

    private usuarios = [];

    async salvar(usuario) {
        this.usuarios.push(usuario);
    }

    async lista() {
        return this.usuarios
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );
        return possivelUsuario !== undefined;
    }
}