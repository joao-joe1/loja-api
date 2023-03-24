import { Injectable } from "@nestjs/common";

@Injectable()

export class PraticarRepository {

    private usuarios = [];


    async salvar(usuario) {
        this.usuarios.push(usuario)
    }

    async lista() {
        return this.usuarios;
    }
}