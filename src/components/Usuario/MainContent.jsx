import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "~/API";
import { Usuario } from "~/styles/pages/Usuario";

export default function MainContent() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    async function get() {
      const res = await API.getUsuarioById(id);
      setUsuario(res);
    }
    get();
  }, []);
  return (
    <div className="main-usuario">
      <Usuario.FotoDeCapa img={usuario.foto_capa}>
        <figure>
          <img src={usuario.foto_perfil} alt="Foto de perfil" />
        </figure>
      </Usuario.FotoDeCapa>
    </div>
  );
}
