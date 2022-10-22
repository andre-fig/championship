import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  public async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.authService.register(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtStrategy)
  @Post('validate')
  async validateToken(@Request() req) {
    return this.authService.validate(req.user);
  }
}
