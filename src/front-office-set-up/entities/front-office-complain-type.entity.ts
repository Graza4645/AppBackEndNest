import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('front_office_complain_type')
export class FrontOfficeComplainType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  complain: string;

  @Column({ nullable: true })
  description?: string;
}
