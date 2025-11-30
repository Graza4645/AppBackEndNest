import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('front_office_source')
export class FrontOfficeSource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  source: string;

  @Column({ nullable: true })
  description?: string;
}
