import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginAuthService } from './login-auth.service';
import { CreateLoginAuthDto } from './dto/create-login-auth.dto';
import { UpdateLoginAuthDto } from './dto/update-login-auth.dto';

@Controller('login-auth')
export class LoginAuthController {
  constructor(private readonly loginAuthService: LoginAuthService) {}


  @Post('login')
  login(@Body() data: CreateLoginAuthDto) {
    return this.loginAuthService.login(data);
  }

  @Post('register')
  register(@Body() data: CreateLoginAuthDto) {
    return this.loginAuthService.createUser(data);
  }

  @Post()
  create(@Body() createLoginAuthDto: CreateLoginAuthDto) {
    return this.loginAuthService.create(createLoginAuthDto);
  }

  @Get()
  findAll() {
    return this.loginAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginAuthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginAuthDto: UpdateLoginAuthDto) {
    return this.loginAuthService.update(+id, updateLoginAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginAuthService.remove(+id);
  }
}
