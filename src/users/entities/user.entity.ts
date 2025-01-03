import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsString,
  IsEmail,
  Length,
  IsNotEmpty,
  IsStrongPassword,
} from 'class-validator';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsEmail() // Validates that the email is in a correct email format
  @IsNotEmpty() // Validates that the email is not empty
  email: string;

  @Column()
  @IsString()
  @Length(6, 20) // Password must be between 6 and 20 characters
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  // Automatically sets the created_at field when a user is created
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  // Automatically sets the updated_at field when a user is updated
  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
