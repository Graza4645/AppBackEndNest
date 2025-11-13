
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('admissionEnquiry')
export class AdmissionEnquiryEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  phone: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @Column({ type: 'varchar', length: 20 }) 
  date: string;

  @Column({ type: 'varchar', length: 20, nullable: true }) 
  next_follow_up_date: string;


  @Column({ type: 'varchar', length: 100, nullable: true })
  assigned: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  reference: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  class: string;

  @Column({ type: 'int', nullable: true })
  number_of_child: number;
  
}
