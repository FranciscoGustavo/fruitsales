import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GqlAuthGuard } from './auth/guards/gql-auth.guard';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';
import { PricelistsModule } from './pricelists/pricelists.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'admin',
      password: '123456',
      database: 'fruits',
      entities: ["dist/**/*.entity{.ts,.js}"],
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
      ssl: false,
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'interface',
      },
    }),
    ProductsModule,
    AuthModule,
    UsersModule,
    ClientsModule,
    OrdersModule,
    PricelistsModule,
  ],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: GqlAuthGuard
    }
  ],
})
export class AppModule {}
