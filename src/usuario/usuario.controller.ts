import { Body, Controller, Get, Post } from '@nestjs/common';
import Usuario from './entities/temp.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
  constructor(private repo: UsuarioRepository) {}
  @Get()
  async pegar(usuario: Usuario) {
    const usuarios = await this.repo.obterTodosUsuario();
    return usuarios;
  }
  @Post('create')
  async cadastrar(@Body() usuario: Usuario) {
    const create = await this.repo.cadastrarUsuario(usuario);
    return create;
  }
}
