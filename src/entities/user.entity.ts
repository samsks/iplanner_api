import { normalize } from "../scripts";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Alarm, Finance, Task } from "../entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60, unique: true })
  email: string;
  @BeforeInsert()
  @BeforeUpdate()
  normalizeEmail() {
    if (this.email) {
      this.email = normalize(this.email);
    }
  }

  @Column({ length: 100 })
  name: string;

  @Column({ length: 60 })
  password: string;
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @Column({ type: "date" })
  birthDate: Date;

  @Column({ nullable: true, length: 200 })
  profileImg: string;

  @Column({ default: false })
  isAdm: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @OneToMany(() => Alarm, (a) => a.user, {
    cascade: true,
  })
  alarms: Alarm[];

  @OneToMany(() => Finance, (f) => f.user, {
    cascade: true,
  })
  finance: Finance[];

  @OneToMany(() => Task, (tl) => tl.user, {
    cascade: true,
  })
  tasks: Task[];
}

export default User;
