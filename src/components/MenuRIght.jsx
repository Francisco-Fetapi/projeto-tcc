import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Text } from "../styles";
import { selectAll } from "../store/App.selectors";
import { useSelector } from "react-redux";

import Skeleton from "@material-ui/lab/Skeleton";
import useMovies from "../hooks/useMovies";
import useUsuario from "../hooks/useUsuario";

export default function MenuLeft() {
  const { series } = useSelector(selectAll);
  const { carregar } = useMovies("series");
  const { logado } = useUsuario();
  const a_carregar = !series.length;

  useEffect(() => {
    if (logado) {
      carregar();
    }
  }, []);

  return (
    <>
      <div />
      <div className="menu-right">
        <List>
          {!a_carregar && (
            <Text variant="body1" color="textSecondary">
              SERIES POPULARES
            </Text>
          )}
          {a_carregar && <Skeleton variant="rect" width="80%" height="15px" />}

          {series.slice(0, 3).map((item) => (
            <ListItem button key={item.nome}>
              <ListItemAvatar>
                <img src={`./img/${item.img}`} alt={item.nome} />
              </ListItemAvatar>
              <ListItemText primary={item.nome} secondary={item.data} />
            </ListItem>
          ))}
          {a_carregar &&
            [1, 2, 3].map((item) => (
              <Box mt={2} key={item}>
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
          {!a_carregar && <Button color="primary">Ver mais séries</Button>}
        </Box>
        <br />
        <Divider />
        <br />
        <List>
          {!a_carregar && (
            <Text variant="body1" color="textSecondary">
              FILMES POPULARES
            </Text>
          )}
          {a_carregar && <Skeleton variant="rect" width="80%" height="15px" />}

          {series
            .slice(2, 5)
            .reverse()
            .map((item) => (
              <ListItem button key={item.nome}>
                <ListItemAvatar>
                  <img src={`./img/${item.img}`} alt={item.nome} />
                </ListItemAvatar>
                <ListItemText primary={item.nome} secondary={item.data} />
              </ListItem>
            ))}
          {a_carregar &&
            [1, 2, 3].map((item) => (
              <Box mt={2} key={item}>
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
          {!a_carregar && <Button color="primary">Ver mais filmes</Button>}
        </Box>
      </div>
    </>
  );
}
