import React, { useContext } from "react";
import { Link, Text } from "~/styles";
import { PerfilAtorContext } from "./Atores/MainContent";
import Box from "@material-ui/core/Box";

export default function InfoAtor() {
  const { ator } = useContext(PerfilAtorContext);
  if (!ator.id) {
    return <div>Carregando...</div>;
  }
  const biography = ator.biography.split("\n");
  const birthday = new Date(ator.birthday);
  const anos = new Date().getFullYear() - birthday.getFullYear();
  return (
    <div>
      <Text variant="h5">{ator.name}</Text>
      <Text color="textSecondary" variant="subtitle2">
        {ator.known_for_department}
      </Text>
      <Box mt={1.2}>
        <img
          src={ator.profile_path}
          alt={ator.name}
          style={{
            width: 120,
            height: 120,
            float: "left",
            marginRight: 12,
          }}
        />
        <Text variant="subtitle2" style={{ fontWeight: 300 }}>
          {biography.map((paragrafo, key) => (
            <React.Fragment key={key}>
              {paragrafo}
              <br />
            </React.Fragment>
          ))}
        </Text>
      </Box>

      <Box component="ul" mt={2}>
        {ator.homepage && (
          <ListItem
            title="Homepage"
            value={
              <Link to={ator.homepage} target="__blank">
                Página oficial
              </Link>
            }
          />
        )}

        {ator.deathday && (
          <>
            <ListItem title="Dia da morte" value={ator.deathday} />
            <ListItem title="Morre" value="Sim" />
          </>
        )}
        <ListItem title="Popularidade" value={ator.popularity} />
        <ListItem title="Nasceu em" value={ator.place_of_birth} />
        <ListItem
          title="Data de nascimento"
          value={birthday.toLocaleDateString() + ` (${anos} anos)`}
        />
      </Box>
    </div>
  );
}

function ListItem({ title, value }) {
  return (
    <Box component="li">
      <b>{title}:</b> &nbsp;
      {value}
    </Box>
  );
}
