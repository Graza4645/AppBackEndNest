import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'visitorstaff' })
export class Visitorstaff {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  purpose: string;

  @Column({ type: 'varchar', length: 255 })
  meeting_with: string;

  @Column({ type: 'varchar', length: 255 })
  staff: string;

  @Column({ type: 'varchar', length: 255 })
  visitor_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  id_card?: string;

  @Column({ type: 'varchar', length: 15 })
  phone_number: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  date?: string;

  @Column({ type: 'int', nullable: true })
  number_of_person?: number;

  @Column({ type: 'time', nullable: true })
  in_time?: string;

  @Column({ type: 'time', nullable: true })
  out_time?: string;

  @Column({ type: 'text', nullable: true })
  comments?: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  upload_documents?: string;
}