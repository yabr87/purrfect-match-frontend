import styled from 'styled-components';

export const Disconnected = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.media.tab} {
    margin-top: 60px;
  }
`;
export const Title = styled.div`
  font-style: normal;
  line-height: 1.38;
  text-align: center;
  color: ${props => props.theme.colors.textColor};
  position: relative;
  h2 {
    display: block;
    font-weight: 700;
    font-size: 32px;
  }
  @media ${props => props.theme.media.tab} {
    h2 {
      display: inline;
      font-weight: 600;
      font-size: 48px;
      line-height: 1.3;
    }
  }
`;

export const Image = styled.img`
  width: 480px;
  margin-top: 80px;
  border-radius: 40px;
  border: 2px solid;
  border-color: ${props => props.theme.colors.accent};

  @media ${props => props.theme.media.tab} {
    width: 704px;
  }

  @media ${props => props.theme.media.desk} {
    width: 822px;
  }
`;
