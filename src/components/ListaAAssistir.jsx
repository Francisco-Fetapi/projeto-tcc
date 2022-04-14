import React, { useEffect, useState, useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { mostrarXCharOntText } from "~/helpers";
import { Text } from "~/styles";
import FormSearch from "./Forms/FormSearch";
import useTMDB from "~/hooks/useTMDB";
import { useSelector } from "react-redux";
import { selectAppState } from "~/store/App.selectors";
import CircularProgress from "@material-ui/core/CircularProgress";
import { formatarData } from "~/helpers";

import { AddPostContext } from "./Forms/FormAddPost";
export default function ListaAAsistir() {
  const TMDB = useTMDB();
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const searches = useSelector(selectAppState("searches_to_post"));

  function searchAll() {
    if (search) {
      TMDB.searchAll({ setLoading }, search, 1);
    }
  }
  useEffect(searchAll, [search]);
  function procurar(values) {
    setSearch(values.search);
  }

  return (
    <div>
      <Text variant="h6" style={{ zoom: ".9" }}>
        Pesquisar
      </Text>
      <Box mt={1}>
        <FormSearch
          placeholder="procurar filmes e series"
          id="search"
          procurar={procurar}
        />
      </Box>
      {searches.results.length === 0 && (
        <Box
          height="65vh"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text align="center" color="textSecondary" variant="subtitle2">
            Pesquisar por um filme/série
          </Text>
        </Box>
      )}
      {loading && (
        <Box
          height="65vh"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" my={3} justifyContent="center">
            <CircularProgress color="inherit" />
          </Box>
        </Box>
      )}

      {!loading && (
        <List>
          {searches.results.map((movie, key) => (
            <Movie key={movie.key} movie={movie} />
          ))}
        </List>
      )}
    </div>
  );
}

function Movie({ movie }) {
  const { setMovie, setModalAssistindo } = useContext(AddPostContext);
  function escolherMovie() {
    setModalAssistindo(false);
    setMovie(movie);
  }
  return (
    <ListItem button style={{ paddingLeft: "0" }} onClick={escolherMovie}>
      <ListItemAvatar style={{ width: 60, height: 60 }}>
        <img
          src={movie.poster_path}
          alt={movie.title || movie.name}
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={mostrarXCharOntText(movie.title || movie.name, 16)}
        secondary={formatarData(movie.release_date || movie.first_air_date)}
        style={{ marginTop: -15, zoom: 0.95, marginLeft: "10px" }}
      />
    </ListItem>
  );
}
