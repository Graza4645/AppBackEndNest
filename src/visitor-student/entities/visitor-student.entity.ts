

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('visitorstudent')
export class VisitorStudent {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  purpose: string;

  @Column({ type: 'varchar', length: 255 })
  meeting_with: string;

  @Column({ name: 'class', type: 'varchar', length: 50 })
  class: string;

  @Column({ type: 'varchar', length: 50 })
  section: string;

  @Column({ type: 'varchar', length: 100 })
  id_card: string;

  @Column({ type: 'varchar', length: 255 })
  student: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  date: string;

  @Column({ type: 'varchar', length: 255 })
  visitor_name: string;

  @Column({ type: 'time' })
  in_time: string;

  @Column({ type: 'time' })
  out_time: string;

  @Column({ type: 'varchar', length: 15 })
  phone_number: string;

  @Column({ type: 'text', nullable: true })
  comments?: string;

  @Column({ type: 'int' })
  number_of_person: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  upload_documents?: string;
}

