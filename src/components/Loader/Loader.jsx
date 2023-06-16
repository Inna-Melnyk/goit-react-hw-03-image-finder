import { ImSpinner } from 'react-icons/im';
import { Loading } from './Loader.styled';

export const Loader = () => {
  return (
    <Loading>
      <ImSpinner size="32" />
      <p>Loading...</p>
    </Loading>
  );
};
