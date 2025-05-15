import { css } from "@linaria/core";

const scaleEffect = css`
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.2);
  }
`;

export { scaleEffect };
