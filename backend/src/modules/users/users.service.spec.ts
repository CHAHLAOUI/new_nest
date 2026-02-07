import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // create new ou userr
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hash = await bcrypt.hash(createUserDto.password, 10); // تشفير كلمة المرور
    const user = this.userRepository.create({ ...createUserDto, password: hash });
    return this.userRepository.save(user);
  }

  // retrun tous users
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // recherche un user par id
  async findOne(id: number | string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id.toString() } });
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  // update user fi DB 
  async update(id: number | string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

   /// bcrypt
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    Object.assign(user, updateUserDto); 
    return this.userRepository.save(user);
  }

  // supp user
  async remove(id: number | string): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }


  async findByUserName(userName: string): Promise<User> {
    return this.userRepository.findOne({ where: { userName } });
  }
}
