import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;

  @media ${props => props.theme.media.tab} {
    justify-content: ${props => props.category !== 'my-pet' && 'center'};
  }`;

export const Step = styled.p`
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 10px;
  line-height: 1.4;
  width: 80px;
  color: ${props => {
    if (props.active) {
      return '#54ADFF';
    } else if (props.disabled) {
      return '#888888';
    } else {
      return '#00C3AD';
    }
  }};

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: ${props => {
      if (props.active) {
        return '#54ADFF';
      } else if (props.disabled) {
        return '#CCE4FB;';
      } else {
        return '#00C3AD';
      }
    }};
  }

  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.6;
    width: 122px;

    &::after {
      width: 120px;
    }
  }
`;
