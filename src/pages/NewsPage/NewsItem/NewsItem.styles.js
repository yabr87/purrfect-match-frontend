import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  // height: 578px;
  max-width: 336px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.default};

  scale: 1;
  transition: scale 250ms ease;

  &:hover {
    scale: 1.05;
    transition: scale 250ms ease;
  }

  @media ${({ theme }) => theme.media.tab} {
    max-width: calc((100% - 32px) / 2);
    height: 556px;
  }

  @media ${({ theme }) => theme.media.desk} {
    max-width: calc((100% - 64px) / 3);
    height: 534px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -22px;
    left: 0;
    right: 0;
    height: 8px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 8px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 252px;
  border-radius: 20px;
`;

export const Title = styled.h2`
  padding: 16px 12px;
  line-height: 1.375;
  letter-spacing: -0.01em;

  @media ${({ theme }) => theme.media.tab} {
    height: 131px;
    overflow: auto;
  }
`;

export const Text = styled.p`
  padding: 0 12px;

  @media ${({ theme }) => theme.media.tab} {
    height: 127px;
    overflow: auto;
  }

  @media ${({ theme }) => theme.media.desk} {
    height: 105px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 12px;
  line-height: 1.375;

  p {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.link};
  outline: none;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

// a:hover {
//   border-bottom: 1px solid black;
//  }

// text-decoration: underline;
