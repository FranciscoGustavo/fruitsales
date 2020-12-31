import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { ResolversResolver } from './resolvers/resolvers.resolver';

@Module({
  providers: [UsersService, ResolversResolver],
  exports: [UsersService]
})
export class UsersModule {}
