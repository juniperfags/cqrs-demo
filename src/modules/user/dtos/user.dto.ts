import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  name: string;
}
export class FindUserDto {
  @ApiProperty()
  id: string;
}
export class CreateUserDto extends UserDto {}
export class FindUserResponseDto extends UserDto {
  @ApiProperty()
  _id: string;
}
