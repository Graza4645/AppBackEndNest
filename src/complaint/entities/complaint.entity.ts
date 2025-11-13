
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('complaints')
export class Complaint {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  complaint_type: string;

  @Column()
  source: string;

  @Column()
  complain_by: string;

  @Column()
  phone: string;

  @Column()
  date: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  action_taken: string;

  @Column({ nullable: true })
  assigned: string;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: true })
  upload_documents: string;
}
