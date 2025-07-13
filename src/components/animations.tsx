import { css } from "@linaria/core";

const scaleUp = css`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const miniScaleUp = css`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.025);
  }
`

const scaleDown = css`
  transition: transform 0.2s ease-in-out;

  &:active {
    transform: scale(0.9);
  }
`;

export { scaleUp, miniScaleUp, scaleDown };
