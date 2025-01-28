import prisma from "../../prisma/prisma.js";

// Função para criar uma nova atividade
export async function criarAtividade(data) {
  return await prisma.atividade.create({
    data,
  });
}

// Função para listar todas as atividades
export async function listarAtividades() {
  return prisma.atividade.findMany({
    orderBy: {
      inicio: "asc",
    },
  });
}

// Função para excluir uma atividade
export async function excluirAtividade(id) {
  return prisma.atividade.delete({
    where: { id: parseInt(id) },
  });
}

// Função para gerar relatório de tempo por dia
export async function relatorioTempo() {
  const atividades = await prisma.atividade.findMany();

  const relatorio = atividades.reduce((acc, atividade) => {
    const data = atividade.inicio.toISOString().split("T")[0];
    const tempoGasto =
      (new Date(atividade.fim) - new Date(atividade.inicio)) / 1000 / 60 / 60;

    if (acc[data]) {
      acc[data].tempo += tempoGasto;
      acc[data].atividades.push(atividade.nome);
    } else {
      acc[data] = {
        id: atividade.id,
        tempo: tempoGasto,
        atividades: [atividade.nome],
      };
    }
    return acc;
  }, {});

  return Object.keys(relatorio).map((data) => ({
    id: relatorio[data].id,
    dia: data,
    tempo: relatorio[data].tempo.toFixed(2),
    nome: relatorio[data].atividades.join(", "),
  }));
}
