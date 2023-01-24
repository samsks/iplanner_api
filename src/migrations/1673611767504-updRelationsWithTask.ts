import { MigrationInterface, QueryRunner } from "typeorm";

export class updRelationsWithTask1673611767504 implements MigrationInterface {
    name = 'updRelationsWithTask1673611767504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasksLists" DROP CONSTRAINT "FK_8008e8db5bba41a69bde20f1855"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_ac391e19c68e4c52b446052d370"`);
        await queryRunner.query(`ALTER TABLE "tasksLists" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_ac391e19c68e4c52b446052d370" FOREIGN KEY ("tasksListsId") REFERENCES "tasksLists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_ac391e19c68e4c52b446052d370"`);
        await queryRunner.query(`ALTER TABLE "tasksLists" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_ac391e19c68e4c52b446052d370" FOREIGN KEY ("tasksListsId") REFERENCES "tasksLists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasksLists" ADD CONSTRAINT "FK_8008e8db5bba41a69bde20f1855" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
