import styled from 'styled-components';

export const UserWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  height: auto;
  margin-left: auto;
  background-color: ${props => props.theme.colors.backgroundModal};
  box-shadow: ${props => props.theme.shadows.default};
  border-radius: 20px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.media.tab} {
    margin-top: 24px;
    flex-direction: row-reverse;
    max-width: 704px;
  }

  @media ${props => props.theme.media.desk} {
    width: 395px;
    flex-direction: column;
  }
`;

export const Wrap = styled.div`
  @media ${props => props.theme.media.desk} {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.titleColor};

  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const Avatar = styled.div`
  width: 182px;
  height: 182px;
  background-color: ${props => props.theme.colors.link};
  border-radius: ${props => props.theme.radius.normal};
  margin-top: 20px;
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const AvatarLabel = styled.label`
  cursor: pointer;
  color: ${props => props.theme.colors.titleColor};
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${props => props.theme.radius.normal};
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
  margin-bottom: 25px;
  cursor: pointer;

  @media ${props => props.theme.media.tab} {
    position: absolute;
    left: 0px;
    bottom: -60px;
  }
`;

export const BtnText = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.normal};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 22px;
`;

export const LogOutText = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.inputText};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 21px;
  padding: 0 8px;
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
