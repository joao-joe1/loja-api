import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { CriaUsuarioDTO } from './DTO/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { v4 as uuid } from 'uuid';
import { map } from 'rxjs';
import { ListaUsario } from './DTO/ListaUsuario.dto';
import { AtualizasuarioDTO } from './DTO/AtualizaUsuario.dto';

@Controller('/usuarios')

export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    // Aqui estamos transformando o "dadosDoUsuario" e transformando ele em "CriaUsuarioDTO"

    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {

        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);
        return {
            usario: new ListaUsario(usuarioEntity.id, usuarioEntity.nome),
            mesage: 'Usuário criado com sucesso!'
        }
    }

    @Get()
    async listaDosUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.lista();
        const usuarioLista = usuariosSalvos.map(
            usuario => new ListaUsario(
                usuario.id,
                usuario.nome
            )
        )
        return usuarioLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizasuarioDTO) {

        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            message: 'Usuária atualizado com sucesso!'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        const removeUsuario = this.usuarioRepository.remove(id)
        {
            return {
                usuario: removeUsuario,
                message: 'Usuário foi removido com sucesso!'
            }
        }
    }

}
