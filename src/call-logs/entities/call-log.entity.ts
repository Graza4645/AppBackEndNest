


import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('phone_call_logs')
export class CallLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  number: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  date: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'next_follow_up_date', type: 'varchar', length: 15, nullable: true })
  nextFollowUpDate: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  duration: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @Column({ name: 'call_type', type: 'varchar', length: 20, nullable: true })
  callType: string;
}
