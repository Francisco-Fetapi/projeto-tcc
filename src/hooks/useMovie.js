import API from "~/API";

export default function useMovie() {
  return {
    async getMovieInfo({ setInfo, setLoading }, id, media_type) {
      setLoading(true);
      let res = await API.getMovieInfo(id, media_type);
      setInfo(res.data);
      setLoading(false);
    },
    async toggleFavoritarMovie({ setInfo, setLoading }, id, media_type) {
      setLoading(true);
      let res = await API.toggleFavoritarMovie(id, media_type);
      setInfo((info) => ({ ...info, ...res.data }));
      setLoading(false);
    },
    async toggleGuardarMovie({ setInfo, setLoading }, id, media_type) {
      setLoading(true);
      let res = await API.toggleGuardarMovie(id, media_type);
      setInfo((info) => ({ ...info, ...res.data }));
      setLoading(false);
    },
  };
}
