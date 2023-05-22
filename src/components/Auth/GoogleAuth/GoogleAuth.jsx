import Icon from 'shared/components/Icon';
import { AuthBtn } from './GoogleAuth.styles';

const GoogleAuth = () => {
  return (
    <AuthBtn>
      <Icon id="google" w="24" h="24" />
      Continue with Google
    </AuthBtn>
  );
};

export default GoogleAuth;
