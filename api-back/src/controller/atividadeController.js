import {
  criarAtividade,
  listarAtividades,
  excluirAtividade,
  relatorioTempo,
} from "../services/atividadeService.js";

// Função para registrar uma nova atividade
export async function criarAtividadeController(req, res) {
  try {
    const atividade = await criarAtividade(req.body);
    res.status(201).json(atividade);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Função para listar todas as atividades
export async function listarAtividadesController(req, res) {
  try {
    const atividades = await listarAtividades();
    res.status(200).json(atividades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Função para excluir uma atividade
export async function excluirAtividadeController(req, res) {
  try {
    const { id } = req.params;
    await excluirAtividade(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Função para gerar o relatório de tempo gasto por dia
export async function relatorioTempoController(req, res) {
  try {
    const relatorio = await relatorioTempo();
    res.status(200).json(relatorio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
