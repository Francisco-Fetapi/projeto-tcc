import { useEffect, useState } from "react";

export default function useReacao(object) {
  const [reacoes, setReacoes] = useState([]);

  useEffect(() => {
    if (object?.grupo_reacoes) {
      const reacoes2 = {
        ...object.grupo_reacoes,
        length: Object.keys(object.grupo_reacoes).length,
      };
      const reacoes_array = [];
      for (let campo in reacoes2) {
        if (campo !== "length") {
          reacoes_array.push({
            size: reacoes2[campo],
            type: campo,
          });
        }
      }
      setReacoes(reacoes_array);
    }
  }, [object]);

  return [reacoes];
}
