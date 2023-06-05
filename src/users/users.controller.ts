import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidUUID } from 'src/decorators/uuid-param.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@ValidUUID('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@ValidUUID('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@ValidUUID('id') id: string) {
    return this.usersService.remove(id);
  }
}
