import { Module } from '@nestjs/common';
import { ClientsResolver } from './resolvers/clients.resolver';
import { ClientsService } from './services/clients.service';

@Module({
  providers: [ClientsResolver, ClientsService]
})
export class ClientsModule {}
