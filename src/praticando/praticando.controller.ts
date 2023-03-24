import { Controller, Post, Body, Get } from "@nestjs/common";
import { CriarUsuarioDTO } from "./DTO/CriarUsuario.dto";
import { UsuariopEntity } from "./DTO/usuarioP.entity";
import { PraticarRepository } from "./praticar.repository";
import { v4 as uuid } from 'uuid';
import { ListaUsario } from "src/usuario/DTO/ListaUsuario.dto";
import { ListaUsarioDTOP } from "./DTO/ListaUsuarioP.dto";

@Controller('/pratica')

export class PraticandoController {

    constructor(private praticarRepository: PraticarRepository) { }


    @Post()
    async criarUsuario(@Body() dadosDoUsuario: CriarUsuarioDTO) {

        const usuariopEntity = new UsuariopEntity();
        usuariopEntity.email = dadosDoUsuario.email;
        usuariopEntity.nome = dadosDoUsuario.nome;
        usuariopEntity.senha = dadosDoUsuario.senha;
        usuariopEntity.id = uuid();

        this.praticarRepository.salvar(usuariopEntity)
        return {
            usuario: new ListaUsarioDTOP(usuariopEntity.id, usuariopEntity.nome),
            message: 'Usuario criado com sucesso!'
        };
    }

    @Get()
    async ListarPratica() {
        const UsuariosSalvosP = await this.praticarRepository.lista();
        const usuarioLista = UsuariosSalvosP.map(
            usuario => new ListaUsarioDTOP(
                usuario.id,
                usuario.nome
            )
        )
        return usuarioLista;
    }

}
