import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { Trash2, NotepadText } from "lucide-react";

function AtividadesList() {
  const [atividades, setAtividades] = useState([]);

  // Função para obter os dados das atividades
  const fetchAtividades = async () => {
    try {
      const response = await api.get("/atividades");
      setAtividades(response.data);
    } catch (error) {
      console.error("Erro ao buscar atividades:", error);
    }
  };

  // Função para excluir uma atividade
  const excluirAtividade = async (id) => {
    try {
      await api.delete(`/atividades/${id}`);
      setAtividades(atividades.filter((atividade) => atividade.id !== id));
    } catch (error) {
      console.error("Erro ao excluir atividade:", error);
    }
  };

  useEffect(() => {
    fetchAtividades();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="p-4 w-1/2 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Atividades Registradas</h2>
          <Link to={"/createAtividade"}>
            <button className="mb-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
              Criar Atividade
            </button>
          </Link>
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
                        <div>
                          <button
                            onClick={() => excluirAtividade(atividade.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 />
                          </button>
                          <Link to={`/relatorio/${atividade.nome}`}>
                            <button className="text-blue-500 hover:text-yellow-700 ml-5">
                              <NotepadText />
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-4 py-2 text-center text-gray-500"
                    >
                      Nenhuma atividade registrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AtividadesList;
