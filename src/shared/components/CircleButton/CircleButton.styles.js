import styled from 'styled-components';

export const CircleBtn = styled.button`
  z-index: ${prpops => prpops.z};
  position: ${prpops => prpops.pos};
  left: ${prpops => prpops.l};
  right: ${prpops => prpops.r};
  top: ${prpops => prpops.t};
  bottom: ${prpops => prpops.b};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 4px;

  width: 80px;
  height: 80px;
  padding: 10px;

  font-family: 'Manrope';
  font-weight: ${({ theme }) => theme.fontWeiths.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.33;
  color: #ffffff;

  background: linear-gradient(
    ${({ theme }) => theme.colors.link},
    ${({ theme }) => theme.colors.link}
  );
  border-radius: ${({ theme }) => theme.radius.round};
  border: none;
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.default};

  cursor: pointer;

  transition: background 250ms ease;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.gradient};
  }
`;
