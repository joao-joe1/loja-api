import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CriarUsuarioDTO {
    @IsString()
    @IsNotEmpty({message: 'Nome inválido.'})
    nome: string;

    @IsEmail()
    @IsString({message: 'E-mail inválido'})
    email: string;

    @MinLength(6, {message: 'Senha deve ter no minimo 6 caracteres.'})
    senha: string;
}