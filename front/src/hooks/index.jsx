import { useState, useEffect, useCallback } from "react";

// Hook para gerenciar atividades e calcular o tempo total
const useAtividades = () => {
  const [atividade, setAtividades] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  // Função para adicionar uma nova atividade
  const addAtividade = (name, startTime, endTime) => {
    const newAtividade = {
      id: Date.now(),
      name,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    };

    setAtividades((prevAtividades) => [...prevAtividades, newAtividade]);
  };

  // Função para excluir uma atividade
  const deleteAtividade = (id) => {
    setAtividades((prevAtividades) =>
      prevAtividades.filter((atividade) => atividade.id !== id)
    );
  };

  // Função para calcular o tempo total gasto por dia, memoizada com useCallback
  const calculateTotalTime = useCallback(() => {
    const total = atividade.reduce((acc, atividade) => {
      const timeSpent =
        (new Date(atividade.endTime) - new Date(atividade.startTime)) /
        1000 /
        60 /
        60; // em horas
      return acc + timeSpent;
    }, 0);

    setTotalTime(total);
  }, [atividade]); // O hook useCallback se assegura de que a função não muda a cada renderização

  // Atualiza o tempo total sempre que as atividades mudarem
  useEffect(() => {
    calculateTotalTime();
  }, [atividade, calculateTotalTime]); // Agora o warning não ocorre

  return {
    atividade,
    totalTime,
    addAtividade,
    deleteAtividade,
  };
};

export default useAtividades;
