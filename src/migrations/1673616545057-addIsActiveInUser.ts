import { MigrationInterface, QueryRunner } from "typeorm";

export class addIsActiveInUser1673616545057 implements MigrationInterface {
    name = 'addIsActiveInUser1673616545057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alarms" RENAME COLUMN "weekDay" TO "weekdays"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdm" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdm"`);
        await queryRunner.query(`ALTER TABLE "alarms" RENAME COLUMN "weekdays" TO "weekDay"`);
    }

}
