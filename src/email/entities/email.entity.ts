import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('email_logs')
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  receiver_email: string;

  @Column()
  receiver_name: string;

  @Column()
  subject: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ nullable: true })
  attachment: string;

  @CreateDateColumn()
  sent_at: Date;
}

