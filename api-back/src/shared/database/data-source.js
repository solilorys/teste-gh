import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

import Atividades from "../../modules/atividade/typeorm/entities/Atividades";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  database: process.env.TYPEORM_DATABASE,
  password: process.env.TYPEORM_PASSWORD,
  synchronize: true,
  entities: [Atividades],
  migrations: ["src/shared/database/migrations/*.js"],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source foi iniciada!");
  })
  .catch((err) => {
    console.error("Error durante a inicialização da Data Source", err);
  });
