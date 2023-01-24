import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRemodeIsActive1673933180607 implements MigrationInterface {
    name = 'fixRemodeIsActive1673933180607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasksLists" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "isActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "tasksLists" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

}
