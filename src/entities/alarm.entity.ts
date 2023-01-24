import {
  BeforeSoftRemove,
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../entities";

@Entity("alarms")
class Alarm {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true, length: 20 })
  title: string;

  @Column({ default: true })
  isActive: Boolean;

  @Column({ type: "time" })
  time: Date;

  @Column({ length: 13, nullable: true })
  weekdays: string;

  @Column({ default: false })
  isDeleted: Boolean;
  @BeforeSoftRemove()
  removing() {
    this.isDeleted = true;
  }

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (u) => u.alarms, {
    nullable: false,
    onDelete: "CASCADE",
  })
  user: User;
}

export default Alarm;
