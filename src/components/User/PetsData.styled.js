import styled from 'styled-components';

export const PetContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-left: auto;
  background-color: ${props => props.theme.colors.backgroundModal};
  box-shadow: ${props => props.theme.shadows.default};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const PetWrap = styled.div`
  padding-top: 40px;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    padding-top: 0;
    padding-left: 40px;
  }
`;

export const PetAvatar = styled.img`
  object-fit: cover;
  align-self: center;
  width: 240px;
  height: 240px;
  margin-right: auto;
  margin-left: auto;
  background: #54adff;
  border-radius: 20px;

  @media ${props => props.theme.media.tab} {
    width: 128px;
    height: 128px;
    border-radius: 40px;
  }
  @media ${props => props.theme.media.desk} {
    width: 161px;
    height: 161px;
  }
`;

export const PetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
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
  margin-top: 20px;

  @media ${props => props.theme.media.tab} {
    flex-grow: 1;
    width: auto;
    margin: 0;
    margin-left: 20px;
  }
  @media ${props => props.theme.media.desk} {
    width: 500px;
  }
`;

export const PetInfoItem = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const PetInfoTitle = styled.span`
  font-weight: 700;

  @media ${props => props.theme.media.tab} {
    font-weight: 600px;
  }
`;

export const DelPetBtn = styled.button`
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
