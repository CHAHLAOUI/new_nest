import { Module } from '@nestjs/common';
import { User } from './modules/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({

  imports: [
  
    ConfigModule.forRoot({ isGlobal: true }),

    // TypeORM 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, //  dev
    }),




    // Modules  
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {

}
