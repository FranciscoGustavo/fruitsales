import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) {}

  async findOne(username: string): Promise<any> {
    return await this.usersRepo.findOne({ where: { username } }); 
  }

  async getAllUsers(): Promise<any> {
    return await this.usersRepo.find();
  }

  async create(username: string, password: string): Promise<any> {
    const newUser = await this.usersRepo.create();
    newUser.username = username;
    newUser.password = password;

    const createdUser = await this.usersRepo.save(newUser);
    return createdUser;
  }
}
