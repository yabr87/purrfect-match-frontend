import Icon from 'shared/components/Icon';
import { AuthBtn } from './GoogleAuth.styles';

const { REACT_APP_API_URL } = process.env;

const GoogleAuth = () => {
  return (
    <a href={`${REACT_APP_API_URL}/api/users/google`}>
      <AuthBtn>
        <Icon id="google" w="24" h="24" />
        Continue with Google
      </AuthBtn>
    </a>
  );
};

export default GoogleAuth;
