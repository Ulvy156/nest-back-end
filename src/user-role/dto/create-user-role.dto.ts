import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateUserRoleDto {
  @IsNumber()
  key_code: number;

  @IsString()
  name: string;

  // Automatically sets the created_at field when a user is created
  @IsDate()
  created_at: Date;

  // Automatically sets the updated_at field when a user is updated
  @IsDate()
  updated_at: Date;
}
