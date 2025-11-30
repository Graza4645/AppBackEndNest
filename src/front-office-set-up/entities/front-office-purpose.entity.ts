import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('front_office_purpose')
export class FrontOfficePurpose {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  purpose: string;

  @Column({ nullable: true })
  description?: string;
}
