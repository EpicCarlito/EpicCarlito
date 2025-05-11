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
      --white-but-not: #d6d3d1; /* text-stone-300 */
    }

    html {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background-color: #111827;
      color: var(--white-but-not); 
      font-family: var(--font-comfortaa), sans-serif;
      font-style: normal;
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
    
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;
