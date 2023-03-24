import { IsNotEmpty, MinLength, IsEmail, IsString, IsOptional } from "class-validator";
import { EmailUnico, EmailUnicoValidator } from "../validacao/emailUnico.validator";

export class AtualizasuarioDTO {

    @IsString()
    @IsNotEmpty({ message: 'O nome não é válido.' })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: 'Este e-mail não é válido.' })
    @EmailUnico({ message: 'Email já existente!' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha deve conter 6 caracteres.' })
    @IsOptional()
    senha: string;
}

