"use client"

import { styled } from "@linaria/react"
import Link from "next/link"
import { css } from '@linaria/core';
import { scaleUp } from "./animations"

const Heading = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, oklch(62.3% 0.214 259.815), oklch(80.9% 0.105 251.813));
  background-color: blue;
  width: 100vw;
  height: 4rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`

const PagesButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.25rem;
    border-radius: calc(infinity * 1px);
    background-color: gray;
    width: 6rem;
    height: 2rem;
`

const Title = styled.h1`
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`

export default function PageHeading() {
    return (
        <Heading>
            <Title>MDX Practice</Title>
            <Link
                className={`${PagesButton} ${scaleUp}`}
                href="/blog">
                Pages
            </Link>
        </Heading>
    )
}