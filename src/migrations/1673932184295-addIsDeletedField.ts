import { MigrationInterface, QueryRunner } from "typeorm";

export class addIsDeletedField1673932184295 implements MigrationInterface {
    name = 'addIsDeletedField1673932184295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "isActive" TO "isDeleted"`);
        await queryRunner.query(`ALTER TABLE "alarms" ADD "isDeleted" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "alarms" ADD "deletedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "finance" ADD "isDeleted" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "finance" ADD "deletedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasksLists" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "tasksLists" ADD "isDeleted" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "tasksLists" ADD "deletedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "isDeleted" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "deletedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isDeleted" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isDeleted" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "isDeleted"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "tasksLists" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "tasksLists" DROP COLUMN "isDeleted"`);
        await queryRunner.query(`ALTER TABLE "tasksLists" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "finance" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "finance" DROP COLUMN "isDeleted"`);
        await queryRunner.query(`ALTER TABLE "alarms" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "alarms" DROP COLUMN "isDeleted"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "isDeleted" TO "isActive"`);
    }

}
