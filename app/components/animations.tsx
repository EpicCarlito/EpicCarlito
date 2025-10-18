import { css } from "@linaria/core";

export const scaleUp = (scale: number) => `
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(${scale});
  }
`

export const scaleDown = (scale: number) => `
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(${scale});
  }
`