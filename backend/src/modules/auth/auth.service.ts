import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async authenticate(dto: AuthenticateDto) {
    const user = await this.usersService.findByUserName(dto.userName);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials');

    const { password, ...safeUser } = user; 
    const token = sign(safeUser, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    return { token, user: safeUser };
  }
}
