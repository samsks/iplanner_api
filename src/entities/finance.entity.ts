import {
  BeforeSoftRemove,
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../entities";

@Entity("finance")
class Finance {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  title: string;

  @Column()
  isExpense: boolean;

  @Column({ default: false })
  isAccomplished: Boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0.0 })
  value: number;

  @Column({ type: "date" })
  dueDate: Date;

  @Column({ default: false })
  isDeleted: Boolean;
  @BeforeSoftRemove()
  removing() {
    this.isDeleted = true;
  }

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (u) => u.finance, {
    nullable: false,
    onDelete: "CASCADE",
  })
  user: User;
}

export default Finance;
