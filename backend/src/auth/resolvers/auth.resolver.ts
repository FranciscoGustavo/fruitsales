import { Resolver, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard, CurrentUser } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation('login')
  @UseGuards(LocalAuthGuard)
  async login(@CurrentUser() user): Promise<any> {
    return await this.authService.login(user);
  }

}
