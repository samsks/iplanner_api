import {
  BeforeSoftRemove,
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TaskList, User } from "../entities";

@Entity("tasks")
class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 200 })
  content: string;

  @Column({ default: false })
  isFinished: boolean;

  @Column({ default: false })
  isFavorited: boolean;

  @Column({ default: false })
  myDay: boolean;

  @Column({ default: false })
  isDeleted: Boolean;
  @BeforeSoftRemove()
  removing() {
    this.isDeleted = true;
  }

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (u) => u.tasks, {
    nullable: false,
    onDelete: "CASCADE",
  })
  user: User;

  @ManyToOne(() => TaskList, (tl) => tl.tasks, {
    onDelete: "CASCADE",
    nullable: true,
  })
  tasksLists: TaskList;
}

export default Task;
