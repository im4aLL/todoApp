import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewAddressForUser1703831270663 implements MigrationInterface {
  name = 'NewAddressForUser1703831270663';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "address" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
  }
}
