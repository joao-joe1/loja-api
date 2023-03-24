import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriandoUsuarioDTO } from "./DTO/CriarUsuario.dto";
import { PraticarRepository } from "./praticar.repository";

@Controller('/pratica')
export class PraticandoController {

    constructor(private praticarRepository: PraticarRepository) { }

    @Post()
    async CriandoUsuario(@Body() dadosUsuario: CriandoUsuarioDTO) {
        this.praticarRepository.salvar(dadosUsuario);
        return dadosUsuario;
    }

    @Get()
    async listarUsuarios() {
        return this.praticarRepository.lista();
    }
}