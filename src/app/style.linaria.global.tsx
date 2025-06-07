import { css } from "@linaria/core";

export const globals = css`
  :global() {
    :root {
      --text-xs: 0.75rem;
      --text-sm: 0.875rem;
      --text-base: 1rem;
      --text-lg: 1.125rem;
      --text-xl: 1.25rem;
      --text-2xl: 1.5rem;
      --text-3xl: 1.875rem;
      --text-4xl: 2.25rem;
      --text-5xl: 3rem;
      --text-6xl: 3.75rem;
      --text-7xl: 4.5rem;
      --text-8xl: 6rem;
      --text-9xl: 8rem;
      --white-but-not: #d6d3d1; /* text-stone-300 */

      --font-comfortaa: "Comfortaa", sans-serif;
      --font-sen: "Sen", serif;
      --font-poppins: "Poppins", sans-serif; 
    }

    html {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background-color: #111827;
      color: var(--white-but-not); 
      font-family: var(--font-comfortaa), sans-serif;
      font-weight: 400;
    }

    ul {
      margin-block: 0rem;
      padding-inline: 0rem;
    }

    li {
      margin-block: 0.25rem;
    }

    h1, p {
      margin-block: 0.25rem;
    }

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.5em;

      &::before {
        content: '•';
        font-size: 1em;
        color: currentColor;
      }
    }

    .rCS1w3zcxh {
      --moveable-color: none!important;
    }
    
    .rCS1w3zcxh .moveable-control.moveable-origin {
      border: none;
      background: transparent!important;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;
