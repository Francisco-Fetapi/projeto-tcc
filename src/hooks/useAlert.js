import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAll } from "../store/App.selectors";

export default function useModal(nome) {
  const Disparar = useDispatch();
  const { alert } = useSelector(selectAll);

  const dados = {
    alert,
    alertar(msg, status, tempo) {
      Disparar(
        SET_STATE("alert", {
          open: true,
          msg,
          status,
          tempo,
        })
      );
    },
    fechar() {
      console.log(alert);
      Disparar(SET_STATE("alert", { ...alert, open: false }));
    },
  };

  return dados;
}
