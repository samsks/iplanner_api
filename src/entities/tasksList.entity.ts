import {
  BeforeInsert,
  BeforeSoftRemove,
  BeforeUpdate,
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Task } from "../entities";
import { normalize } from "../scripts";

@Entity("tasksLists")
class TaskList {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 20 })
  title: string;
  @BeforeInsert()
  @BeforeUpdate()
  normalizeListTitle() {
    if (this.title) {
      this.title = normalize(this.title);
    }
  }

  @Column({ default: false })
  isDeleted: Boolean;
  @BeforeSoftRemove()
  removing() {
    this.isDeleted = true;
  }

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Task, (t) => t.tasksLists, {
    nullable: false,
    cascade: true,
  })
  tasks: Task[];
}

export default TaskList;
