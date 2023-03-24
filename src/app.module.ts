import { Module } from '@nestjs/common';
import { PraticandoModule } from './praticando/praticando.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, PraticandoModule],
})
export class AppModule {}
