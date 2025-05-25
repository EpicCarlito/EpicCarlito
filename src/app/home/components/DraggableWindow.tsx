"use client"

import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { useEffect, useRef, useState } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { HiChevronDoubleDown } from "react-icons/hi";
import Moveable from "react-moveable";

interface props {
  name: string;
  isMobile: any;
  setState: any;
  children?: React.ReactNode;
}

const Container = styled.div<{ left: number, top: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #111827;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  border: 2px solid var(--white-but-not);
  border-radius: 0.375rem;
  z-index: 10;
`

const MobileContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #111827;
  width: 100%;
  bottom: 0;
  left: 0;
  border: 2px solid var(--white-but-not);
  border-radius: 0.375rem;
  z-index: 10;
`

const moveUp = css`
  animation: moveUp 1s ease-in-out forwards;

  @keyframes moveUp {
    0% {
      transform: translateY(150%);
      opacity: 0;
    }
    100% {
      transform: translateY(-120%);
      opacity: 1;
    }
  }
`

const moveDown = css`
  animation: moveDown 1s ease-in-out forwards;

  @keyframes moveDown {
    0% {
      transform: translateY(-120%);
      opacity: 1;
    }
    100% {
      transform: translateY(150%);
      opacity: 0;
    }
  }
`

const DraggableContainer = styled.div`
  background: #1f2937;
  border-top-right-radius: 0.375rem;
  border-top-left-radius: 0.375rem;
  border-bottom: 2px solid var(--white-but-not);
  cursor: grab;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 1.25rem;
  gap: 0.375rem;
`

const CloseButton = css`
  border-radius: 9999px;
  background-color: gray;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`

export default function DraggableWindow(props: props) {
  const { name, isMobile, setState, children } = props;
  const [position, setPosition] = useState({ left: 100, top: 100 });
  const moveableRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [ifExit, setIfExit] = useState(false);

  const getContainerBounds = () => {
    if (!containerRef.current) return {
      minTop: 0,
      minLeft: 0,
      maxTop: 0,
      maxLeft: 0,
    };
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    return {
      minTop: 0,
      minLeft: 0,
      maxTop: window.innerHeight - containerRect.height,
      maxLeft: window.innerWidth - containerRect.width,
    };
  };

  const onDrag = (e: any) => {
    const { delta } = e;
    let newTop = position.top + delta[1];
    let newLeft = position.left + delta[0];

    const { minTop, minLeft, maxTop, maxLeft } = getContainerBounds();

    newTop = Math.min(Math.max(newTop, minTop), maxTop);
    newLeft = Math.min(Math.max(newLeft, minLeft), maxLeft);

    setPosition({
      top: newTop,
      left: newLeft,
    });
  };

  useEffect(() => {
    if (!isMobile && moveableRef.current) {
      setIsInitialized(false);
      requestAnimationFrame(() => setIsInitialized(true));
    }
  }, [isMobile]);

  const handleExit = () => {
    setIfExit(true)
    setTimeout(() => {
      setState(false)
      setIfExit(false)
    }, 1000)
  }

  return isMobile ? (
    <MobileContainer className={ifExit ? moveDown : moveUp}>
      <DraggableContainer>
        <TopBar>
          <HiChevronDoubleDown onClick={handleExit} size={"1.125rem"} />
          <p>{"epiccarlito/" + name}</p>
        </TopBar>
      </DraggableContainer>

      {children}
    </MobileContainer>
  ) : (
    <Container
      ref={containerRef}
      left={position.left}
      top={position.top}
    >
      <DraggableContainer ref={moveableRef}>
        <TopBar>
          <FiXCircle className={CloseButton} onClick={() => setState(false)} size={"1.125rem"} />
          <p>{"epiccarlito/" + name}</p>
        </TopBar>
      </DraggableContainer>

      {isInitialized && (
        <Moveable
          target={moveableRef.current}
          draggable={true}
          onDrag={onDrag}
        />
      )}

      {children}
    </Container>

  )
}