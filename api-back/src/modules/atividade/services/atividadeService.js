import db from "../../../shared/infra/database/data-source";

// Serviço para criar uma nova atividade
exports.createAtividade = async (name, start_time, end_time) => {
  const query = `
        INSERT INTO activities (name, start_time, end_time)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;
  const values = [name, start_time, end_time];
  const { rows } = await db.query(query, values);
  return rows[0];
};

// Serviço para listar todas as atividades
exports.getActivities = async () => {
  const query = `
        SELECT * FROM activities
        ORDER BY start_time ASC;
    `;
  const { rows } = await db.query(query);
  return rows;
};

// Serviço para excluir uma atividade
exports.deleteAtividade = async (id) => {
  const query = `
        DELETE FROM activities
        WHERE id = $1;
    `;
  await db.query(query, [id]);
};

// Serviço para obter o relatório diário
exports.getDailyReport = async () => {
  const query = `
        SELECT 
            DATE(start_time) AS day,
            SUM(EXTRACT(EPOCH FROM (end_time - start_time)) / 3600) AS total_time
        FROM activities
        GROUP BY DATE(start_time)
        ORDER BY DATE(start_time) ASC;
    `;
  const { rows } = await db.query(query);
  return rows.map((row) => ({
    day: row.day,
    total_time: parseFloat(row.total_time).toFixed(2) + " hrs",
  }));
};
