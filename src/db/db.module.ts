import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsuarioRepository } from '../usuario/usuario.repository';

@Module({
  providers: [PrismaService, UsuarioRepository],
  exports: [PrismaService],
})
export class DbModule {}
