import API from "~/API";
// import { useDispatch } from "react-redux";
// import { SET_STATE } from "~/store/App.actions";

export default function usePost() {
  //   const Dispatch = useDispatch();
  return {
    async salvarPost({ setLoading, resetarAll, actions }, dados) {
      setLoading(true);
      let res = await API.salvarPost(dados);
      console.log(res.data);
      resetarAll();
      actions.resetForm();
      setLoading(false);
    },
  };
}
