import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key_code: number;

  @Column()
  name: string;

  // Automatically sets the created_at field when a user is created
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  // Automatically sets the updated_at field when a user is updated
  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
