import styled, { keyframes } from 'styled-components';

const pawAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform-origin: 50% 50%;
  transform: rotate(90deg) translate(-50%, 0%);
  font-size: 50px;
  width: 1em;
  height: 3em;
  color: #54adff;
`;

export const Paw = styled.div`
  width: 1em;
  height: 1em;
  animation: 2050ms ${pawAnimation} ease-in-out infinite;
  opacity: 0;

  ${Array.from(
    { length: 6 },
    (_, i) => `&:nth-child(${i + 1}) {
    animation-delay: ${(i * -1 + 6) * 0.25}s;
    // ${i % 2 === 0 ? 'color: #54adff;' : 'color: #FFC107;'}
  }`
  ).join('\n')}

  &:nth-child(odd) {
    transform: rotate(-10deg);
  }

  &:nth-child(even) {
    transform: rotate(10deg) translate(125%, 0);
  }
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  fill: currentColor;
`;
