import styled from 'styled-components';

export const PetContainer = styled.div`
  width: 100%;
  height: auto;
  margin-left: auto;
  background-color: ${props => props.theme.colors.backgroundModal};
  box-shadow: ${props => props.theme.shadows.default};
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.media.tab} {
    flex-direction: row;
  }
  @media ${props => props.theme.media.desk} {
    margin-top: 24;
    width: auto;
    margin-left: 32px;
  }
`;

export const PetWrap = styled.div`
  @media ${props => props.theme.media.desk} {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export const PetAvatar = styled.img`
  object-fit: cover;
  align-self: center;
  width: 240px;
  height: 240px;
  background: ${props => props.theme.colors.link};
  border-radius: 20px;
  margin: 20px 0;

  @media ${props => props.theme.media.tab} {
    width: 128px;
    height: 128px;
    margin-right: 20px;
    margin-bottom: 108px;
  }
  @media ${props => props.theme.media.desk} {
    margin-bottom: 31px;
  }
`;

export const PetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  @media ${props => props.theme.media.desk} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const NoPetMessage = styled.p`
  text-align: center;
`;

export const PetInfoWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 40px;

  @media ${props => props.theme.media.tab} {
    margin-top: 20px;
    margin-right: 20px;
    flex-grow: 1;
    width: auto;
  }
  @media ${props => props.theme.media.desk} {
    width: 500px;
    padding: 0;
    margin-right: 0;
  }
`;

export const PetInfoItem = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeiths.normal};
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.titleColor};

  @media ${props => props.theme.media.desk} {
    font-size: 16px;
  }
`;

export const PetInfoTitle = styled.span`
  font-weight: ${props => props.theme.fontWeiths.bold};

  @media ${props => props.theme.media.tab} {
    font-weight: ${props => props.theme.fontWeiths.semiBold};
  }
`;

export const DelPetBtn = styled.button`
  padding: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media ${props => props.theme.media.tab} {
    right: -20px;
  }
  @media ${props => props.theme.media.desk} {
    right: 0;
  }
`;
