import React, { useState, useEffect } from "react";
import api from "../../services/api";

function AtividadesList() {
  const [atividades, setAtividades] = useState([]);

  // Função para obter as atividades do back-end
  const fetchAtividades = async () => {
    try {
      const response = await api.get("/atividades"); // Substitua com o endpoint correto
      setAtividades(response.data); // Ajuste conforme a estrutura da resposta da API
    } catch (error) {
      console.error("Erro ao buscar atividades:", error);
    }
  };

  // Função para excluir uma atividade
  const excluirAtividade = async (id) => {
    try {
      await api.delete(`/atividades/${id}`); // Substitua com o endpoint correto
      setAtividades(atividades.filter((atividade) => atividade.id !== id)); // Atualiza a lista local
    } catch (error) {
      console.error("Erro ao excluir atividade:", error);
    }
  };

  useEffect(() => {
    fetchAtividades();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Atividades Registradas</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Início</th>
              <th className="px-4 py-2 text-left">Fim</th>
              <th className="px-4 py-2 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {atividades.length > 0 ? (
              atividades.map((atividade) => (
                <tr key={atividade.id} className="border-b">
                  <td className="px-4 py-2">{atividade.nome}</td>
                  <td className="px-4 py-2">
                    {new Date(atividade.inicio).toLocaleString()}
                  </td>
                  <td className="px-4 py-2">
                    {new Date(atividade.fim).toLocaleString()}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => excluirAtividade(atividade.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-2 text-center text-gray-500">
                  Nenhuma atividade registrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AtividadesList;
