import API from "~/API";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "~/store/App.actions";
import { selectAppState } from "~/store/App.selectors";

export default function usePost() {
  const Dispatch = useDispatch();
  const posts = useSelector(selectAppState("posts"));
  return {
    async salvarPost({ setLoading, resetarAll, actions }, dados) {
      setLoading(true);
      let res = await API.salvarPost(dados);
      Dispatch(
        SET_STATE("posts", { ...posts, data: [...res.data, ...posts.data] })
      );
      resetarAll();
      actions.resetForm();
      setLoading(false);
    },
    async getPosts(page) {
      let res = await API.getPosts(page);
      console.log(res);
      Dispatch(SET_STATE("posts", res));
    },
  };
}
