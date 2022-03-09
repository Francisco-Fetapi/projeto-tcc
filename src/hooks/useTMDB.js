// import { useNavigate } from "react-router-dom";
import TMDB from "~/TMDB";

import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAppState } from "~/store/App.selectors";
// import { selectAppState } from "../store/App.selectors";

export default function useTMDB() {
  const Dispatch = useDispatch();
  const trending_series = useSelector(selectAppState("trending_series"));
  console.log(trending_series);

  return {
    async getSeries({ setLoading }, page) {
      setLoading(true);
      const res = await TMDB.getTrending("tv", "day", page);
      if (JSON.stringify(res) !== JSON.stringify(trending_series)) {
        Dispatch(
          SET_STATE("trending_series", {
            ...res,
            results: [...trending_series.results, ...res.results],
          })
        );
      }

      setLoading(false);
    },
  };
}
