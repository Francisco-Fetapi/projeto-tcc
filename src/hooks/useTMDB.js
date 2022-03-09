// import { useNavigate } from "react-router-dom";
import TMDB from "~/TMDB";

import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAppState } from "~/store/App.selectors";

export default function useTMDB() {
  const Dispatch = useDispatch();
  const trending_series = useSelector(selectAppState("trending_series"));
  const trending_filmes = useSelector(selectAppState("trending_filmes"));

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
  };
}
