import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    
    if (user && user.password === pass) {
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      id: user.id,
      access_token: this.jwtService.sign(payload),
    }
  }

  async create(username: string, password: string): Promise<any> {
    return await this.usersService.create(username, password);
  }
}