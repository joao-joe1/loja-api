import { Injectable } from "@nestjs/common";
import { UsuariopEntity } from "./DTO/usuarioP.entity";

@Injectable()
export class PraticarRepository {
    private PraticaUsuarios: UsuariopEntity[] = [];

    async salvar(usuario: UsuariopEntity) {
        this.PraticaUsuarios.push(usuario)
    }

    async lista() {
        return this.PraticaUsuarios
    }
}