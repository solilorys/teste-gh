import atividadeService from "../dashboard/services/atividadeService";

// Controller para criar uma nova atividade
exports.createAtividade = async (req, res) => {
  try {
    const { name, start_time, end_time } = req.body;
    if (!name || !start_time || !end_time) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const atividade = await atividadeService.createAtividade({
      name,
      start_time,
      end_time,
    });
    res.status(201).json(atividade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller para listar todas as atividades
exports.getAllActivities = async (req, res) => {
  try {
    const activities = await atividadeService.getAllActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para excluir uma atividade
exports.deleteAtividade = async (req, res) => {
  try {
    const { id } = req.params;
    await atividadeService.deleteAtividade(id);
    res.status(200).json({ message: "Atividade deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete atividade." });
  }
};

// Controlador para obter relatório de tempo por dia
exports.getDailyReport = async (req, res) => {
  try {
    const report = await atividadeService.getDailyReport();
    res.status(200).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch daily report." });
  }
};
