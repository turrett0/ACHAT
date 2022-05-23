import styled from "styled-components";

export const LoadingSpinnerBody = styled.div`
  position: fixed;
  margin: 5px auto;
  width: 25px;
  height: 25px;
  left: 0;
  right: 0;

  & svg {
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.accentColor};
  }

  @media (prefers-reduced-motion: no-preference) {
    & svg {
      animation: spinner infinite 1s linear;
    }
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
