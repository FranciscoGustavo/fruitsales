import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {

  async getAll() {
    return Promise.resolve([
      {
        id: '1',
        username: 'LA LONDRA SA DE CV'
      },
      {
        id: '1',
        username: 'BAUL ROJO SA DE CV'
      }
    ]);
  }

  async create(username: String) {
    return Promise.resolve({
      id: '1',
      username,
    });
  }
}
