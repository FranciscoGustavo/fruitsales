import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { GqlAuthGuard, CurrentUser } from '../../auth/guards/gql-auth.guard';

@Resolver('Resolvers')
export class ResolversResolver {
  constructor (
    private userService: UsersService
  ) {}

  @Query('users')
  async getUsers(): Promise<any> {
    try {
      const users = await this.userService.getAllUsers();
      return users;
    } catch (error) {
      
    }
  }

  @Query('whoAmI')
  @UseGuards(GqlAuthGuard)
  async whoAmI(@CurrentUser() user: any): Promise<any> {
    try {
      const users = await this.userService.findOne('john');
      return users;
    } catch (error) {
      
    }
  }
}
