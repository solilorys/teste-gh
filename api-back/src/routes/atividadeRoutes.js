import express from "express";
import {
  criarAtividadeController,
  listarAtividadesController,
  excluirAtividadeController,
  relatorioTempoController,
} from "../controller/atividadeController.js";

const router = express.Router();

// Rota para criar uma nova atividade
router.post("/atividades", criarAtividadeController);

// Rota para listar todas as atividades
router.get("/atividades", listarAtividadesController);

// Rota para excluir uma atividade
router.delete("/atividades/:id", excluirAtividadeController);

// Rota para gerar o relatório de tempo gasto por dia
router.get("/relatorio", relatorioTempoController);

export default router;
