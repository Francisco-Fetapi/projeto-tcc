import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAll } from "../store/App.selectors";

export default function useLinearProgress() {
  const Disparar = useDispatch();
  const estado = useSelector(selectAll);

  const aberto = estado.linearProgress;

  function mostrar() {
    Disparar(SET_STATE("linearProgress", true));
  }

  function ocultar() {
    Disparar(SET_STATE("linearProgress", false));
  }

  return [aberto, mostrar, ocultar];
}
