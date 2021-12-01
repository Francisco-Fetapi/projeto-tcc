import React, { useRef } from "react";
import { Text } from "../../styles";
import { ContainerFormSignUp } from "../../styles/pages/LoginAndSignUp";
import Box from "@material-ui/core/Box";
import TextField1 from "../TextField1";
import { FaEnvelope, FaUserLock, FaUser, FaPlusCircle } from "react-icons/fa";
import Button from "@material-ui/core/Button";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { Link } from "react-router-dom";

export default function FormLogin({ handleClose }) {
  const [value, setValue] = React.useState("female");
  const img = useRef();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function alterarFoto(e) {
    if (e.target.files.length) {
      const fr = new FileReader();
      fr.readAsDataURL(e.target.files[0]);
      fr.onload = function (e) {
        img.current.src = e.target.result;
      };
    }
  }

  return (
    <>
      <ContainerFormSignUp>
        <Box width={300} component="form" autocomplete="off">
          <Box mb={2.5}>
            <TextField1
              placeholder="Insira seu nome"
              icon={<FaUser />}
              id="_nome"
              label="Nome de usuário"
            />
          </Box>
          <Box my={2.5}>
            <TextField1
              placeholder="Insira seu email"
              icon={<FaEnvelope />}
              id="_email"
              label="Email"
            />
          </Box>
          <Box mt={2.5}>
            <TextField1
              placeholder="Insira a sua palavra-passe"
              type="password"
              icon={<FaUserLock />}
              id="_password"
              label="Palavra-passe"
            />
          </Box>
          <Box mt={2.5}>
            <TextField1
              placeholder="Confirme a sua palavra-passe"
              type="password"
              icon={<FaUserLock />}
              id="_password2"
              label="Confirmar palavra-passe"
            />
          </Box>
          <Box mt={2.5}>
            <TextField1
              placeholder="Data de nascimento"
              type="date"
              icon={null}
              id="_data_nascimento"
              label="Quando você já nasceu?"
            />
          </Box>
          <Box className="genero_e_foto" mt={2.5}>
            <Box>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <Text variant="subtitle1" style={{ fontWeight: 500 }}>
                    Genero
                  </Text>
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                  color="primary"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Feminino"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Masulino"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
              <Text
                align="right"
                variant="subtitle1"
                style={{ fontWeight: 500 }}
              >
                Foto de perfil
              </Text>
              <label className="foto">
                <img ref={img} src="./img/user.jpg" alt="Foto perfil" />
                <input type="file" hidden onChange={alterarFoto} />
                <div>
                  <FaPlusCircle />
                </div>
              </label>
            </Box>
          </Box>
          <Box my={2}>
            <Text variant="subtitle2" color="textSecondary">
              Ao clicares em Regista-te, aceitas os nossos{" "}
              <Link to="/">Termos</Link>, a nossa
              <Link to="/"> Política de privacidade</Link> e a nossa{" "}
              <Link to="/"> Política de cookies</Link>{" "}
            </Text>
          </Box>

          <Box mt={4}>
            <Button
              variant="contained"
              style={{ height: "42px" }}
              color="primary"
              fullWidth
            >
              Criar conta
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              onClick={handleClose}
              style={{ height: "42px" }}
              color="primary"
              fullWidth
            >
              Já tenho uma conta
            </Button>
          </Box>
        </Box>
      </ContainerFormSignUp>
    </>
  );
}
