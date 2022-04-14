import API from "~/API";

export default function useMovie() {
  return {
    async getMovieInfo({ setInfo, setLoading }, id, media_type) {
      setLoading(true);
      let res = await API.getMovieInfo(id, media_type);
      setInfo(res.data);
      console.log(res.data);
      setLoading(false);
    },
  };
}
