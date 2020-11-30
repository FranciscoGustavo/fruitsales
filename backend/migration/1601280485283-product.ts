import {MigrationInterface, QueryRunner} from "typeorm";

export class product1601280485283 implements MigrationInterface {
    name = 'product1601280485283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "product_unity_enum" AS ENUM('pz', 'kg')`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cover" text NOT NULL, "name" character varying(300) NOT NULL, "unity" "product_unity_enum" NOT NULL DEFAULT 'kg', "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TYPE "product_unity_enum"`);
    }

}
