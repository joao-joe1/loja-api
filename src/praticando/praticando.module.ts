import { Module } from "@nestjs/common";
import { PraticandoController } from "./praticando.controller";
import { PraticarRepository } from "./praticar.repository";

@Module({
    controllers: [PraticandoController],
    providers: [PraticarRepository]
})

export class PraticandoModule {}