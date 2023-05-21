import styled from 'styled-components';

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendsList = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  @media ${props => props.theme.media.tab} {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px 32px;
  }

  @media ${props => props.theme.media.desk} {
    margin-top: 60px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }
`;

export const Friend = styled.li`
  font-family: 'Manrope';
  font-style: normal;

  min-height: 239px;
  height: fit;
  width: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 12px;
  border: none;
  border-radius: 40px;
  background: ${props => props.theme.colors.backgroundModal};
  box-shadow: ${props => props.theme.shadows.default};
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: ${props => props.theme.shadows.hover};
  }

  @media ${props => props.theme.media.tab} {
    width: 336px;
    min-height: 275px;
  }

  @media ${props => props.theme.media.desk} {
    width: 395px;
    min-height: 287px;
  }
`;
export const FriendTitle = styled.a`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  display: block;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.link};

  transition: transform 250ms ease;
  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const FriendBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 12px;
  width: 100%;

  @media ${props => props.theme.media.desk} {
    gap: 16px;
  }
`;

export const FriendImg = styled.img`
  width: 100px;
  height: 68px;
  border-radius: 5px;
  @media ${props => props.theme.media.tab} {
    width: 124px;
    height: 88px;
  }

  @media ${props => props.theme.media.desk} {
    width: 146px;
    height: 104px;
  }
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${props => props.theme.media.tab} {
    gap: 16px;
  }

  @media ${props => props.theme.media.desk} {
    gap: 12px;
  }
`;

export const InfoItem = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: ${props => props.theme.colors.textColor};
`;
export const InfoItemTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: calc(16 / 12);

  @media ${props => props.theme.media.tab} {
    font-size: 14px;
    line-height: calc(19 / 14);
  }

  @media ${props => props.theme.media.desk} {
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;
export const InfoItemText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: ${props => props.theme.colors.textColor};

  transition: color 250ms ease;
  &:hover {
    color: ${props => props.theme.colors.link};
  }

  @media ${props => props.theme.media.tab} {
    font-weight: 400;
    font-size: 14px;
    line-height: calc(19 / 14);
  }
  @media ${props => props.theme.media.desk} {
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;
export const InfoItemTime = styled.div`
  position: relative;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);

  color: ${props => props.theme.colors.textColor};
  transition: color 250ms ease;

  cursor: ${props => (props.hasSchedule ? 'pointer' : 'default')};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.link};
  }
`;
export const ScheduleField = styled.div`
  position: absolute;
  top: 100%;
  left: 10px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  font-weight: 500;
  font-size: 10px;
  line-height: calc(14 / 10);

  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundModal};
  border: 1px solid ${props => props.theme.colors.link};
  box-shadow: ${props => props.theme.shadows.default};
  border-radius: 8px;
  padding: 8px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: calc(16 / 12);
    padding: 12px;
  }
`;

export const ScheduleRow = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 12px;
`;

export const ScheduleDay = styled.div`
  width: 20px;
`;

export const ScheduleTime = styled.div``;

export const InfoItemAddress = styled.a`
  display: block;
`;
export const InfoItemEmail = styled.a`
  display: block;
`;
export const InfoItemPhone = styled.a`
  display: block;
`;
