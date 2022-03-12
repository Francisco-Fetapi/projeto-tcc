import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Text } from "../styles";
import { selectAppState } from "../store/App.selectors";
import { useSelector } from "react-redux";

import Skeleton from "@material-ui/lab/Skeleton";
import useUsuario from "../hooks/useUsuario";
import { useNavigate } from "react-router-dom";
import useTMDB from "~/hooks/useTMDB";
import MenuRightMovie from "./MenuRightMovie";

export default function MenuLeft() {
  const discover_series = useSelector(selectAppState("discover_series"));
  const discover_filmes = useSelector(selectAppState("discover_filmes"));
  const { getDiscoverFilmes, getDiscoverSeries } = useTMDB();
  const { logado } = useUsuario();
  const navigate = useNavigate();
  const qtd_movie_a_mostrar = 3;
  const series = discover_series.results.slice(0, qtd_movie_a_mostrar);
  const filmes = discover_filmes.results.slice(0, qtd_movie_a_mostrar);
  const [a_carregar_series, setLoading1] = useState(series.length === 0);
  const [a_carregar_filmes, setLoading2] = useState(filmes.length === 0);

  useEffect(() => {
    if (logado) {
      getDiscoverFilmes(setLoading2, 0);
      getDiscoverSeries(setLoading1, 0);
    }
  }, []);

  return (
    <>
      <div />
      <div className="menu-right">
        <List>
          {!a_carregar_series && (
            <Text variant="body1" color="textSecondary">
              SERIES POPULARES
            </Text>
          )}
          {a_carregar_series && (
            <Skeleton variant="rect" width="80%" height="15px" />
          )}

          {series.map((movie) => (
            <MenuRightMovie key={movie.id} movie={movie} />
          ))}
          {a_carregar_series &&
            new Array(qtd_movie_a_mostrar).fill("").map((item, key) => (
              <Box mt={2} key={key}>
                <Grid container>
                  <Grid item xs={3}>
                    <Skeleton variant="circle" width="59px" height="59px" />
                  </Grid>
                  <Grid item xs>
                    <Skeleton variant="text" width="90%" />
                    <Box mt={1}>
                      <Skeleton variant="rect" width="80%" height="24px" />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
        </List>
        <Box my={1} display="flex" justifyContent="center">
          {!a_carregar_series && (
            <Button color="primary" onClick={() => navigate("/series")}>
              Ver mais séries
            </Button>
          )}
        </Box>
        <br />
        <Divider />
        <br />
        <List>
          {!a_carregar_filmes && (
            <Text variant="body1" color="textSecondary">
              FILMES POPULARES
            </Text>
          )}
          {a_carregar_filmes && (
            <Skeleton variant="rect" width="80%" height="15px" />
          )}

          {filmes.map((movie) => (
            <MenuRightMovie key={movie.id} movie={movie} />
          ))}
          {a_carregar_filmes &&
            new Array(qtd_movie_a_mostrar).fill("").map((item, key) => (
              <Box mt={2} key={key}>
                <Grid container>
                  <Grid item xs={3}>
                    <Skeleton variant="circle" width="59px" height="59px" />
                  </Grid>
                  <Grid item xs>
                    <Skeleton variant="text" width="90%" />
                    <Box mt={1}>
                      <Skeleton variant="rect" width="80%" height="24px" />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
        </List>
        <Box my={1} display="flex" justifyContent="center">
          {!a_carregar_filmes && (
            <Button color="primary" onClick={() => navigate("/filmes")}>
              Ver mais filmes
            </Button>
          )}
        </Box>
      </div>
    </>
  );
}
