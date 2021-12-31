import { useNavigate } from "react-router-dom";

export default function useUsuario() {
  const navigate = useNavigate();

  const funcoes = {
    logar(values) {
      console.log(values);
      navigate("/");
    },
  };

  return funcoes;
}
