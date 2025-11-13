
import { Entity, PrimaryColumn, Column } from 'typeorm';


@Entity({ name: 'staff' })
export class StaffList {

  @PrimaryColumn({ type: 'varchar', length: 10 })
  user_id: string;

  @Column({ type: 'varchar', length: 100 })
  staff_name: string;

  @Column({ type: 'varchar', length: 15 })
  mobile_number: string;
}
