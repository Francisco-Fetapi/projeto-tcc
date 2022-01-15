import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAll } from "../store/App.selectors";

import series from "../mock/series.json";

function useMovies(tipo) {
  const store = useSelector(selectAll);
  const Disparar = useDispatch();

  function get() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(series);
      }, 3000);
      if (series.lenght === 0) {
        rej("error");
      }
    });
  }

  const dados = {
    async set() {
      const data = await get();
      console.log(data);
      // Disparar(SET_STATE(tipo,dados));
    },
  };

  return dados;
}

export default useMovies;
