import {MigrationInterface, QueryRunner} from "typeorm";

export class users1609383160885 implements MigrationInterface {
    name = 'users1609383160885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(300) NOT NULL, "password" character varying(300) NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updateDateTime" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "product"."updateDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createDateTime" IS NULL`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
