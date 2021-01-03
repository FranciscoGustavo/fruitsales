import {MigrationInterface, QueryRunner} from "typeorm";

export class orders1609702127338 implements MigrationInterface {
    name = 'orders1609702127338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "productsOrder" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(300) NOT NULL, "count" integer NOT NULL DEFAULT '0', "price" double precision NOT NULL DEFAULT '0', "totalPrice" double precision NOT NULL DEFAULT '0', "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "orderId" uuid, CONSTRAINT "PK_66432b9a78bcd1adad6627bef0f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "totalProducts" double precision NOT NULL DEFAULT '0', "totalPrice" double precision NOT NULL DEFAULT '0', "description" character varying(300) NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "clientId" uuid, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(300) NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "UQ_19385ccaeac3753e24d2eed6a4d" UNIQUE ("username"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updateDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "productsOrder" ADD CONSTRAINT "FK_a7f6a27a179e7b0f3d5d6a4b07e" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3"`);
        await queryRunner.query(`ALTER TABLE "productsOrder" DROP CONSTRAINT "FK_a7f6a27a179e7b0f3d5d6a4b07e"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updateDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createDateTime" IS NULL`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "productsOrder"`);
    }

}
