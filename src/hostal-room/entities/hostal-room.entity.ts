


import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { HostelEntity } from '../../hostel/entities/hostel.entity';
import { RoomTypeEntity } from '../../room-type/entities/room-type.entity'; 

@Entity('hostal_room')
export class HostalRoomEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  room_name: string; 

  @ManyToOne(() => HostelEntity, { nullable: false })
  @JoinColumn({ name: 'hostel_id' })
  hostel: HostelEntity;  

  @ManyToOne(() => RoomTypeEntity, { nullable: false })
  @JoinColumn({ name: 'room_type_id' })
  room_type: RoomTypeEntity; // FK -> RoomType table

  @Column({ type: 'int', nullable: false })
  number_of_beds: number;

  @Column({ type: 'numeric', nullable: false })
  cost_per_bed: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string | null;
}
