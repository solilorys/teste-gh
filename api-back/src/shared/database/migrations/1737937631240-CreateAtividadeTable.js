import { MigrationInterface, QueryRunner, Table } from "typeorm";

module.exports = class CreateAtividadeTable1737937631240 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "atividades",
        columns: [
          {
            name: "id",
            type: "serial",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "start_time",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "end_time",
            type: "timestamp",
            isNullable: false,
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("atividades");
  }
};
