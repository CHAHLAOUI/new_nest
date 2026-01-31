import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [AuthModule],
})
export class AppModule {}

// import { Module } from "@nestjs/common";
// import { AuthModule } from "./modules/auth/auth.module";
// import { JwtModule } from "@nestjs/jwt";
// // import {TypeOrmModule}  from "@nestjs/typeorm";
// import { PassportModule } from "@nestjs/passport";

// @Module({
//     imports: [
//   //   TypeOrmModule.forRoot({
//   //     type: 'postgres',
//   //     host: 'localhost',
//   //     port: 5432,
//   //     username: 'postgres',
//   //     password: 'pass123',
//   //     database: 'postgres',
//   //     autoLoadEntities: true,
//   //     synchronize: true,
//   //   }),
//     AuthModule
//   //   PassportModule,
//   //   JwtModule.register({ secret: 'secrete', signOptions: { expiresIn: '1h' } }),
//   //   // UsersModule,
//   ],
// })
// export class AppModule {}
