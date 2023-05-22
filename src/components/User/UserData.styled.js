import Icon from 'shared/components/Icon';
import styled from 'styled-components';

export const UserWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  height: auto;
  margin-left: auto;
  background-color: ${props => props.theme.colors.backgroundModal};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  padding: 20px 8px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    flex-direction: row-reverse;
    max-width: 704px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    flex-direction: column;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Avatar = styled.div`
  width: 182px;
  height: 182px;
  background-color: #54adff;
  border-radius: 40px;
  margin-top: 20px;
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const AvatarLabel = styled.label`
  cursor: pointer;
  color: ${props => props.theme.colors.textColor};
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.media.tab} {
    margin-left: 71px;
    margin-right: 76px;
    margin-bottom: 28px;
  }
`;

export const EditAvatarBtn = styled.button`
  display: flex;
  gap: 8px;
  border: none;
  background-color: transparent;
  margin-top: 15px;
  align-items: center;
  cursor: pointer;
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-self: flex-start;
  gap: 12px;
  border: none;
  background-color: transparent;
  margin-top: 21px;
  cursor: pointer;

  @media ${props => props.theme.media.tab} {
    position: absolute;
    left: 0px;
    bottom: -60px;
  }
`;

export const BtnText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
`;

export const LogOutText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.inputText};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 21px;
  width: 100%;

  @media ${props => props.theme.media.tab} {
    position: relative;
    gap: 8px;
    margin-bottom: 56px;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Balance = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.link};
  border-radius: 20px;
  max-width: 190px;
  padding: 6px 12px;

  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeiths.normal};

  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.theme.fontSizes.s};
    width: 255px;
  }
`;

export const BalanceIcon = styled(Icon)`
  width: 13px;
  height: 13px;

  @media ${props => props.theme.media.tab} {
    width: 18px;
    height: 18px;
  }
`;
