import { MigrationInterface, QueryRunner } from "typeorm";

export class taskListTitleUniqueUpdateCascateTrueTaskList1673733580145 implements MigrationInterface {
    name = 'taskListTitleUniqueUpdateCascateTrueTaskList1673733580145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasksLists" ADD CONSTRAINT "UQ_fa84acdcd3efa023bb1c4f3e6c2" UNIQUE ("title")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasksLists" DROP CONSTRAINT "UQ_fa84acdcd3efa023bb1c4f3e6c2"`);
    }

}
