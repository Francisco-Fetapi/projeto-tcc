import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAll } from "../store/App.selectors";

export default function useModal(nome) {
  const Disparar = useDispatch();
  const estado = useSelector(selectAll);

  const aberto = estado[nome];

  function abrir() {
    Disparar(SET_STATE(nome, true));
  }

  function fechar(e, reason) {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;

    Disparar(SET_STATE(nome, false));
  }

  return [aberto, abrir, fechar];
}
