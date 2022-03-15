// import { useNavigate } from "react-router-dom";
import TMDB from "~/TMDB";

import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAppState } from "~/store/App.selectors";

export default function useTMDB() {
  const Dispatch = useDispatch();
  const trending_series = useSelector(selectAppState("trending_series"));
  const trending_filmes = useSelector(selectAppState("trending_filmes"));
  const discover_series = useSelector(selectAppState("discover_series"));
  const discover_filmes = useSelector(selectAppState("discover_filmes"));

  async function getDiscover(discover, setLoading, page) {
    if (page === 0 && discover.data.results.length > 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const res = await TMDB.getDiscover(discover.type, page);
    Dispatch(
      SET_STATE(discover.store_name, {
        ...res,
        results: [...discover.data.results, ...res.results],
      })
    );
    setLoading(false);
  }

  return {
    async getSeries({ setLoading }, page) {
      if (page === 0 && trending_series.results.length > 0) {
        setLoading(false);
        return;
      }
      setLoading(true);
      const res = await TMDB.getTrending("tv", "day", page);
      Dispatch(
        SET_STATE("trending_series", {
          ...res,
          results: [...trending_series.results, ...res.results],
        })
      );

      setLoading(false);
    },
    async getFilmes({ setLoading }, page) {
      if (page === 0 && trending_filmes.results.length > 0) {
        setLoading(false);
        return;
      }
      setLoading(true);
      const res = await TMDB.getTrending("movie", "day", page);
      Dispatch(
        SET_STATE("trending_filmes", {
          ...res,
          results: [...trending_filmes.results, ...res.results],
        })
      );

      setLoading(false);
    },
    getDiscoverFilmes(setLoading, page) {
      getDiscover(
        {
          data: discover_filmes,
          store_name: "discover_filmes",
          type: "movie",
        },
        setLoading,
        page
      );
    },
    getDiscoverSeries(setLoading, page) {
      getDiscover(
        {
          data: discover_series,
          store_name: "discover_series",
          type: "tv",
        },
        setLoading,
        page
      );
    },
    async getMovie({ setLoading, setMovie }, id_movie) {
      setLoading(true);
      const res = await TMDB.getMovie(id_movie);
      setMovie(res);
      setLoading(false);
    },
    async getTv({ setLoading, setMovie }, id_movie) {
      setLoading(true);
      const res = await TMDB.getTv(id_movie);
      setMovie(res);
      setLoading(false);
    },
  };
}
