import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('front_office_reference')
export class FrontOfficeReference {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  reference: string;

  @Column({ nullable: true })
  description?: string;
}
