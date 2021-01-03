import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientsService } from '../services/clients.service';

@Resolver()
export class ClientsResolver {
  constructor(
    private clientsService: ClientsService
  ) {}

  @Query('clients')
  async getAll() {
    try {
      const clients = await this.clientsService.getAll();
      return clients
    } catch(err) {

    }
  }

  @Mutation('createClient')
  async create(@Args('username') username) {
    try {
      const createdClient = await this.clientsService.create(username);
      return createdClient;
    } catch (error) {
      
    }
  }

}
