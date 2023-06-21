import { ImSpinner } from "react-icons/im";
import { Spinner } from "./Loader.styled";

export const Loader = () => {
  return (
    <Spinner>
      <ImSpinner size="32" />
      <p>Loading...</p>
    </Spinner>
  );
};
