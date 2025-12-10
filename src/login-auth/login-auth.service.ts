import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginAuthDto } from './dto/create-login-auth.dto';
import { UpdateLoginAuthDto } from './dto/update-login-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginAuth } from './entities/login-auth.entity';

@Injectable()
export class LoginAuthService {


  constructor(
    @InjectRepository(LoginAuth)
    private readonly loginRepo: Repository<LoginAuth>,
  ) {}

  async login(data: CreateLoginAuthDto) {
    const user = await this.loginRepo.findOne({
      where: { username: data.username },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid username');
    }

    if (user.password !== data.password) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      message: 'Login Successful!',
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }

  async createUser(createLoginAuthDto: CreateLoginAuthDto) {
    const existingUser = await this.loginRepo.findOne({
      where: { username: createLoginAuthDto.username },
    });

    if (existingUser) {
      throw new UnauthorizedException('Username already exists');
    }

    const newUser = this.loginRepo.create(createLoginAuthDto);
    const savedUser = await this.loginRepo.save(newUser);

    return {
      message: 'User created successfully',
      user: {
        id: savedUser.id,
        username: savedUser.username,
      },
    };
  }

  async create(createLoginAuthDto: CreateLoginAuthDto) {
    return 'This action adds a new loginAuth';
  }

  async findAll() {
    return await this.loginRepo.find();
  }

  async findOne(id: number) {
    return await this.loginRepo.findOne({ where: { id } });
  }

  async update(id: number, updateLoginAuthDto: UpdateLoginAuthDto) {
    await this.loginRepo.update(id, updateLoginAuthDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.loginRepo.delete(id);
    return { message: 'User deleted successfully' };
  }
}
