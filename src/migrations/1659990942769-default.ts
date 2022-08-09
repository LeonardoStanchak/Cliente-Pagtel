import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659990942769 implements MigrationInterface {
    name = 'default1659990942769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "nome" text NOT NULL, CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido" ("id" SERIAL NOT NULL, "numero_pedido" integer NOT NULL, CONSTRAINT "PK_af8d8b3d07fae559c37f56b3f43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "produto" ("id" SERIAL NOT NULL, "descricacao" text NOT NULL, "preco" integer NOT NULL, CONSTRAINT "PK_99c4351f9168c50c0736e6a66be" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "produto"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
    }

}
