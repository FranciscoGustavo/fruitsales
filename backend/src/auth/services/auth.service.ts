import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const hashedPassword = await bcrypt.compare(pass, user.password);
 
    if (user && hashedPassword) {
      const { password, ...result } = user;
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
    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.usersService.create(username, hashedPassword);
  }
}