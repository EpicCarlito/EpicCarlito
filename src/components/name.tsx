import { styled } from "@linaria/react"
import { scaleEffect } from "./animations";
import { css } from "@linaria/core";

interface props {
    value: string;
}

const LetterStyle = styled.span`
    display: inline-block;
    cursor: default;
`

const Heading = styled.h1`
    font-size: clamp(var(--text-4xl), 5vw + 1rem, var(--text-9xl));
    font-family: var(--font-sen);
    font-weight: 800;
    margin-block: 0;
`

const scaleFadeEffect = css`
  animation: scaleFade 1s cubic-bezier(.5,.25,.01,.99) forwards;

  @keyframes scaleFade {
    0% {
        transform: scale(5) rotate(15deg);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateY(20px);
        opacity: 1;
    }
  }
`;

export default function Name() {
    return (
        <Heading>
            <Letter value="E" />
            <Letter value="p" />
            <Letter value="i" />
            <Letter value="c" />
            <Letter value="C" />
            <Letter value="a" />
            <Letter value="r" />
            <Letter value="l" />
            <Letter value="i" />
            <Letter value="t" />
            <Letter value="o" />
        </Heading>

    )
}

function Letter(props: props) {
    return (
        <LetterStyle className={scaleFadeEffect}>
            {props.value}
        </LetterStyle>
    )
}