import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAppState } from "../store/App.selectors";

export default function useLinearProgress() {
  const Disparar = useDispatch();
  const estado = useSelector(selectAppState("circularProgress"));

  const aberto = estado.circularProgress;

  const funcoes = {
    mostrar() {
      Disparar(SET_STATE("circularProgress", true));
    },
    ocultar() {
      Disparar(SET_STATE("circularProgress", false));
    },
  };

  return { aberto, ...funcoes };
}
