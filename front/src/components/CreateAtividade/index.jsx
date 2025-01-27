import { useState } from "react";
import api from "../../services/api.js";

export const CreateAtividade = () => {
  const [nome, setNome] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!nome || !inicio || !fim) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const atividade = await api.post("/atividades", {
        nome: nome,
        inicio: inicio,
        fim: fim,
      });

      console.log("Atividade registrada com sucesso:", atividade.data);
    } catch (err) {
      console.error("Erro na resposta da API:", err.response);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Registrar Atividade
        </h1>
        <form className="space-y-4">
          {/* Nome da Atividade */}
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700"
            >
              Nome da Atividade
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Digite o nome da atividade"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={setNome}
            />
          </div>

          {/* Início do Período */}
          <div>
            <label
              htmlFor="inicio"
              className="block text-sm font-medium text-gray-700"
            >
              Início
            </label>
            <input
              type="datetime-local"
              id="inicio"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={setInicio}
            />
          </div>

          {/* Fim do Período */}
          <div>
            <label
              htmlFor="fim"
              className="block text-sm font-medium text-gray-700"
            >
              Fim
            </label>
            <input
              type="datetime-local"
              id="fim"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={setFim}
            />
          </div>

          {/* Botão de Registro */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onSubmit}
            >
              Registrar Atividade
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAtividade;
