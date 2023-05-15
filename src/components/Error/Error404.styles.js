import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Title = styled.div`
  font-style: normal;
  line-height: 1.38;
  text-align: center;
  color: #000000;

  h1,
  h2 {
    display: block;
    font-weight: 700;
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    h1,
    h2 {
      display: inline;
      font-weight: 600;
      font-size: 32px;
      line-height: 1.3;
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Image = styled.img`
  width: 280px;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 822px;
  }
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  max-width: 248px;
  height: 40px;
  margin-top: 60px;

  padding: 9px 52px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.38;

  border: 2px solid #54adff;
  border-radius: 40px;

  color: #fef9f9;
  background-color: #54adff;
  transition: color 250ms ease, background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: #fef9f9;
    color: #54adff;
  }
  @media screen and (min-width: 768px) {
    margin-top: 70px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 18px;
  }
`;
