import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Usuario from './entities/temp.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private prismaService: PrismaService) {}

  async obterTodosUsuario() {
    return this.prismaService.usuario.findMany();
  }
  async cadastrarUsuario(usuario: Usuario) {
    if (!usuario.nome || !usuario.senha || !usuario.email) {
      return 'preencha os dados';
    }
    return this.prismaService.usuario.create({ data: usuario as any });
  }
}
