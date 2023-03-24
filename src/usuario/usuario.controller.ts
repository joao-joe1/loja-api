import { Controller, Post, Body, Get } from '@nestjs/common';
import { CriaUsuarioDTO } from './DTO/CriaUsuario.dto';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')

export class UsuarioController {
    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    // Aqui estamos transformando o "dadosDoUsuario" e transformando ele em "CriaUsuarioDTO"
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario
    }

    @Get()
    async listaDosUsuarios() {
        return this.usuarioRepository.lista();
    }

}
