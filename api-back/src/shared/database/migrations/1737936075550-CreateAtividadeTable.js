import { Table } from "typeorm";

module.exports = class CreateAtividadeTable1737936075550 {
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
            name: "nome",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "inicio_tempo",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fim_tempo",
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
