import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { ClientsResolver } from './resolvers/clients.resolver';
import { ClientsService } from './services/clients.service';
import { Client } from '../models/clients.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientsResolver, ClientsService]
})
export class ClientsModule {}
