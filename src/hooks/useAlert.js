import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAll } from "../store/App.selectors";

export default function useModal(nome) {
  const Disparar = useDispatch();
  const { alert, alert_msg, alert_status, alert_tempo } =
    useSelector(selectAll);

  const dados = {
    alert,
    alert_msg,
    alert_status,
    alert_tempo,
    alertar(msg, status, tempo) {
      Disparar(SET_STATE("alert", true));
      Disparar(SET_STATE("alert_msg", msg));
      Disparar(SET_STATE("alert_status", status));
      Disparar(SET_STATE("alert_tempo", tempo));
    },
    fechar(e, reason) {
      if (reason === "clickaway") {
        return;
      }

      Disparar(SET_STATE("alert", false));
    },
  };

  return dados;
}
