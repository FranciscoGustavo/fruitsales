import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards, SetMetadata } from '@nestjs/common';
import { LocalAuthGuard, CurrentUser } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';
import { IS_PUBLIC_KEY } from '../constants';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation('login')
  @UseGuards(LocalAuthGuard)
  async login(@CurrentUser() user): Promise<any> {
    return await this.authService.login(user);
  }

  @Public()
  @Mutation('singup')
  async singup(
    @Args('username') username,
    @Args('password') password
  ): Promise<any> {
    try {
      const createdUser = await this.authService.create(username, password);
      return createdUser;
    } catch (error) {
    }
  }

}
