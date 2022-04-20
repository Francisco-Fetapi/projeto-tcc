import API from "~/API";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "~/store/App.actions";
import { selectAppState } from "~/store/App.selectors";
import { useNavigate } from "react-router-dom";

export default function usePost() {
  const Dispatch = useDispatch();
  const posts_1 = useSelector(selectAppState("posts"));
  const posts_2 = useSelector(selectAppState("meus_posts"));
  const posts_3 = useSelector(selectAppState("meus_guardados"));

  const navigate = useNavigate();

  const options1 = {
    todos: "posts",
    meus: "meus_posts",
    meusGuardados: "meus_guardados",
  };
  const options2 = {
    todos: posts_1,
    meus: posts_2,
    meusGuardados: posts_3,
  };
  return {
    async salvarPost(
      { setLoading, resetarAll, actions },
      dados,
      target = "todos"
    ) {
      setLoading(true);
      let res = await API.salvarPost(dados);
      Dispatch(
        SET_STATE(options1[target], {
          ...options2[target],
          data: [...res.data, ...options2[target].data],
        })
      );
      resetarAll();
      actions.resetForm();
      setLoading(false);
    },
    async getPosts({ setLoading }, page, target = "todos") {
      setLoading(true);
      let res = await API.getPosts(page, target);

      if (page === 1) {
        Dispatch(SET_STATE(options1[target], res));
      } else {
        Dispatch(
          SET_STATE(options1[target], {
            ...res,
            data: [...options2[target].data, ...res.data],
          })
        );
      }
      setLoading(false);
    },
    irParaPerfil(o_post_eh_meu, post) {
      if (o_post_eh_meu) {
        navigate("/perfil");
      } else {
        navigate(`/usuario/${post.id_usuario}`);
      }
    },
  };
}
