
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { RoomTypeEntity } from '../../room-type/entities/room-type.entity'; 

@Entity('hostel')
export class HostelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  hostel_name: string;

  @ManyToOne(() => RoomTypeEntity)
  @JoinColumn({ name: 'room_type_id' })
  room_type: RoomTypeEntity;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string | null;

  @Column({ type: 'int', nullable: true })
  intake: number | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string | null;
}
