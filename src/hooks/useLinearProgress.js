import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAll } from "../store/App.selectors";

export default function useLinearProgress() {
  const Disparar = useDispatch();
  const estado = useSelector(selectAll);

  const aberto = estado.linearProgress;

  const funcoes = {
    mostrar() {
      Disparar(SET_STATE("linearProgress", true));
    },
    ocultar() {
      Disparar(SET_STATE("linearProgress", false));
    },
  };

  return { aberto, ...funcoes };
}
