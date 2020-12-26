import {MigrationInterface, QueryRunner} from "typeorm";

export class products1609023678805 implements MigrationInterface {
    name = 'products1609023678805'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "price" double precision NOT NULL DEFAULT '0'`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updateDateTime" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "product"."updateDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
    }

}
