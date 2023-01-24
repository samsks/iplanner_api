import { MigrationInterface, QueryRunner } from "typeorm";

export class rebaseInTest1673477886760 implements MigrationInterface {
    name = 'rebaseInTest1673477886760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(60) NOT NULL, "name" character varying(100) NOT NULL, "password" character varying(60) NOT NULL, "birthDate" date NOT NULL, "profileImg" character varying(200), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "alarms" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(20), "isActive" boolean NOT NULL DEFAULT true, "time" TIME NOT NULL, "weekDay" character varying(13), "userId" uuid NOT NULL, CONSTRAINT "PK_b776da486fb19d38b4f7777a6da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "finance" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(60) NOT NULL, "isExpense" boolean NOT NULL, "isAccomplished" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL DEFAULT '0', "dueDate" date NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_e748b2c24804fde15d4d6d0e408" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasksLists" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(20) NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_bc2a0d9029cd5e705ea4bf83c00" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(50) NOT NULL, "content" character varying(200) NOT NULL, "isFinished" boolean NOT NULL DEFAULT false, "isFavorited" boolean NOT NULL DEFAULT false, "myDay" boolean NOT NULL DEFAULT false, "tasksListsId" uuid, "userId" uuid NOT NULL, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "alarms" ADD CONSTRAINT "FK_80dcfeb5d83f739b2e09a88a561" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "finance" ADD CONSTRAINT "FK_7543c17e2677ca9d36bf9a94def" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasksLists" ADD CONSTRAINT "FK_8008e8db5bba41a69bde20f1855" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_ac391e19c68e4c52b446052d370" FOREIGN KEY ("tasksListsId") REFERENCES "tasksLists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_166bd96559cb38595d392f75a35" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_166bd96559cb38595d392f75a35"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_ac391e19c68e4c52b446052d370"`);
        await queryRunner.query(`ALTER TABLE "tasksLists" DROP CONSTRAINT "FK_8008e8db5bba41a69bde20f1855"`);
        await queryRunner.query(`ALTER TABLE "finance" DROP CONSTRAINT "FK_7543c17e2677ca9d36bf9a94def"`);
        await queryRunner.query(`ALTER TABLE "alarms" DROP CONSTRAINT "FK_80dcfeb5d83f739b2e09a88a561"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TABLE "tasksLists"`);
        await queryRunner.query(`DROP TABLE "finance"`);
        await queryRunner.query(`DROP TABLE "alarms"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
