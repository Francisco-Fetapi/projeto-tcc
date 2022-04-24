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
  const posts_4 = useSelector(selectAppState("posts_movie"));

  const navigate = useNavigate();

  const options1 = {
    todos: "posts",
    meus: "meus_posts",
    meusGuardados: "meus_guardados",
    movie: "posts_movie",
  };
  const options2 = {
    todos: posts_1,
    meus: posts_2,
    meusGuardados: posts_3,
    movie: posts_4,
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
    async getPosts(
      { setLoading, id_usuario, id_movie },
      page = 1,
      target = "todos"
    ) {
      setLoading(true);
      let res = await API.getPosts(page, target, id_usuario, id_movie);

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
    async setPostEmGuardados({ setLoading, post, setGuardei }) {
      setLoading(true);
      const res = await API.toggleSalvarPost(post.id_post);
      setGuardei(res.ja_existe);
      console.log(res);
      setLoading(false);
    },
  };
}
