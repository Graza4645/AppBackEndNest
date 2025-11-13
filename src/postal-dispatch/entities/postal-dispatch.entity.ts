import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'postaldispatch' })
export class PostalDispatch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  to_title: string;

  @Column()
  reference_no: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  note: string;

  @Column()
  from_title: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  date: string;

  @Column({ nullable: true })
  upload_documents: string;
}
