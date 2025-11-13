import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('postal_receive')
export class PostalReceive {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  from_title: string;

  @Column({ nullable: true })
  reference_no: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: true })
  to_title: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  date: string;

  @Column({ nullable: true })
  upload_documents: string;
}

