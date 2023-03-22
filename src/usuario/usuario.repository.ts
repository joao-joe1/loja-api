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
}