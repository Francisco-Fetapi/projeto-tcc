import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SET_STATE } from "../store/App.actions";

function usePost() {
  const Disparar = useDispatch();

  const get = useCallback(() => {
    return new Promise((res) => {
      setTimeout(() => {
        res([1, 2, 3]);
      }, 6000);
    });
  }, []);

  const dados = {
    async carregar() {
      const data = await get();
      console.log(data);
      Disparar(SET_STATE("posts", data));
    },
  };

  return dados;
}

export default usePost;
