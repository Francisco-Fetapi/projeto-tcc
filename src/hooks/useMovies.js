import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SET_STATE } from "../store/App.actions";

import series from "../mock/series.json";

function useMovies(tipo) {
  const Disparar = useDispatch();

  const get = useCallback(() => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(series);
      }, 5000);
      if (series.lenght === 0) {
        rej("error");
      }
    });
  }, []);

  const dados = {
    async carregar() {
      const data = await get();
      Disparar(SET_STATE(tipo, data));
    },
  };

  return dados;
}

export default useMovies;
