import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

const usePost = () => {
  const dispatch = useDispatch();

  const postHandler = (action: AnyAction) => {
    dispatch(action);
  };

  // const postHandler = <T extends (...args: any[]) => any>(action: T) => {
  //   return (...args: Parameters<T>) => {
  //     dispatch(action(...args));
  //   };
  // };

  return postHandler;
};
4;
export default usePost;
