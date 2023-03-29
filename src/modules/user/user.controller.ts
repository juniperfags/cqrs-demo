import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, FindUserResponseDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse()
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @ApiOkResponse({
    type: FindUserResponseDto,
  })
  @Get(':id')
  findById(@Param('id') userId: string) {
    return this.userService.findUserById(userId);
  }
}
