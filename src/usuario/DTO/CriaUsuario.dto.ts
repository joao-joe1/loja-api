import { IsNotEmpty, MinLength, IsEmail } from "class-validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({message: 'O nome não é válido.'})
    nome: string;

    @IsEmail(undefined, {message: 'Este e-mail não é válido.'})
    email: string;

    @MinLength(6, {message: 'A senha deve conter 6 caracteres.'})
    senha: string;
}

