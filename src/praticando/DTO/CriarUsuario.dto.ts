import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CriandoUsuarioDTO {

    @IsNotEmpty({message: 'Nome está vázio'})
    @IsString()
    nome: string;

    @IsEmail(undefined, {message: 'E-mail inválido.'})
    @IsString()
    email: string;

    @MinLength(6, {message: 'Senha não possui 6 caracteres.'})
    senha: string;
}