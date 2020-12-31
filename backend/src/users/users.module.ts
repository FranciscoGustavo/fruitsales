import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { ResolversResolver } from './resolvers/resolvers.resolver';
import { User } from '../models/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, ResolversResolver],
  exports: [UsersService]
})
export class UsersModule {}
