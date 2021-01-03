import { Resolver, Query } from '@nestjs/graphql';
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

}
