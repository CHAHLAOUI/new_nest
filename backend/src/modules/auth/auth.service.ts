import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { AuthenticateDto } from "./dto/authenticate.dto";
import { faker } from '@faker-js/faker'
import { IAuthenticate, Role } from "./interface/Role";
import { NotFoundException } from "@nestjs/common";
import { sign } from "jsonwebtoken";

// Dummy user for demonstration
// const user = {
//   id: 1,
//   username: "testuser",
//   password: "$2b$10$Q9Qw8Qw8Qw8Qw8Qw8Qw8QeQw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Q", // hashed 'password'
// };


@Injectable()
export class AuthService
{
users = [
  {
    id: faker.string.uuid(),
    userName: "chahlaoui1",
    password: "chahlaoui@@@@",
    role: Role.Admin,
  },
  {
    id: faker.string.uuid(),
    userName: "chahlaoui2",
    password: "chahlaoui@@@@",
    role: Role.user,
  }
]




  authenticate (authenticateDto: AuthenticateDto) : IAuthenticate
  {
   const user = this.users.find(
    (u) =>  u.userName === authenticateDto.userName && 
            u.password === authenticateDto.password, 
   );
   if (!user)
      throw new NotFoundException('Invalid credentialss');
   const token = sign({...user} , 'secretee');
   return { token , user };
  }







}

// export class AuthService {
//   constructor(private jwtService: JwtService) {}

//   async validateUser(username: string, pass: string): Promise<any> {
//     if (
//       username === user.username &&
//       (await bcrypt.compare(pass, user.password))
//     ) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }

//   async login(user: any) {
//     const payload = { username: user.username, sub: user.id };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }
