import {MigrationInterface, QueryRunner} from "typeorm";

export class users1609624672155 implements MigrationInterface {
    name = 'users1609624672155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "product"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updateDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."username" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateDateTime" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."username" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updateDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createDateTime" IS NULL`);
    }

}
