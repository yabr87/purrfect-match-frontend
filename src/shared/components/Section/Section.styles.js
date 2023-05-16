import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-top: ${props => props.pt || 44}px;
  padding-bottom: ${props => props.pb || 24}px;

  @media ${({ theme }) => theme.media.tab} {
    padding-top: ${props => props.pt || 82}px;
    padding-bottom: ${props => props.pb || 40}px;
  }

  @media ${({ theme }) => theme.media.desk} {
    padding-top: ${props => props.pt || 82}px;
    padding-bottom: ${props => props.pb || 60}px;
  }
`;
