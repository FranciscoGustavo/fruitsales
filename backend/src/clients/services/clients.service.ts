import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../models/clients.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientsRepo: Repository<Client>,
  ) {}  

  async getAll(): Promise<any> {
    return await this.clientsRepo.find();
  }

  async create(username: string) {
    const newClient = await this.clientsRepo.create();
    newClient.username = username;

    const createdClient = await this.clientsRepo.save(newClient);
    return createdClient;
  }
}
