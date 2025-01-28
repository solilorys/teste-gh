import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CircleChevronLeft, Trash2 } from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

const Relatorio = () => {
  const [relatorio, setRelatorio] = useState([]);
  const { nome } = useParams();

  // Busca o relatório da API e agrupa por nome
  const fetchRelatorio = async () => {
    try {
      const response = await api.get("/relatorio");
      console.log("Dados recebidos:", response.data);

      const agrupado = response.data.reduce((acc, atividade) => {
        const { nome } = atividade;
        if (!acc[nome]) {
          acc[nome] = [];
        }
        acc[nome].push(atividade);
        return acc;
      }, {});

      setRelatorio(Object.entries(agrupado));
    } catch (err) {
      console.error("Erro ao buscar o relatório:", err);
      toast.error("Erro ao carregar o relatório.");
    }
  };

  // Exclui uma atividade do relatório
  const excluirAtividade = async (id) => {
    try {
      await api.delete(`/atividades/${id}`);
      toast.success("Atividade excluída com sucesso!");
      fetchRelatorio();
    } catch (err) {
      console.error("Erro ao excluir atividade:", err);
      toast.error("Erro ao excluir a atividade.");
    }
  };

  // Função para formatar a data
  function formatarData(data) {
    if (!data) {
      return "Data inválida";
    }
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  // Função para calcular o total de tempo formatado
  const calcularTotalTempo = (atividades) => {
    const total = atividades.reduce(
      (total, atividade) => total + parseFloat(atividade.tempo || 0),
      0
    );
    return total.toFixed(2);
  };

  useEffect(() => {
    fetchRelatorio();
  }, []);

  // Filtra apenas as atividades com o nome igual ao parâmetro
  const atividadesFiltradas = relatorio.filter(
    ([nomeAtividade]) => nomeAtividade === nome
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl w-full">
        <div>
          <Link to={"/"}>
            <button>
              <CircleChevronLeft />
            </button>
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Relatório de Tempo Gasto
        </h1>
        <div className="space-y-6">
          {atividadesFiltradas.length > 0 ? (
            atividadesFiltradas.map(([nome, atividades]) => (
              <div key={nome} className="border p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {nome}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left">Dia</th>
                        <th className="px-4 py-2 text-left">Tempo</th>
                        <th className="px-4 py-2 text-left">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {atividades.map((atividade) => (
                        <tr key={atividade.id} className="border-b">
                          <td className="px-4 py-2">
                            {formatarData(atividade.dia)}
                          </td>
                          <td className="px-4 py-2">{atividade.tempo}h</td>
                          <td className="px-4 py-2">
                            <button
                              onClick={() => excluirAtividade(atividade.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-right text-gray-600 font-medium mt-2">
                  {calcularTotalTempo(atividades)}h
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Nenhuma atividade registrada para "{nome}".
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Relatorio;
