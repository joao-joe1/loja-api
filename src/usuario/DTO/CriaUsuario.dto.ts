import { IsNotEmpty, MinLength, IsEmail, IsString } from "class-validator";
import { EmailUnico, EmailUnicoValidator } from "../validacao/emailUnico.validator";

export class CriaUsuarioDTO {

    @IsString()
    @IsNotEmpty({message: 'O nome não é válido.'})
    nome: string;

    @IsEmail(undefined, {message: 'Este e-mail não é válido.'})
    @EmailUnico({message: 'Email já existente!'})
    email: string;

    @MinLength(6, {message: 'A senha deve conter 6 caracteres.'})
    senha: string;
}

