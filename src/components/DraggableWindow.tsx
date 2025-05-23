"use client"

import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { constants } from 'node:buffer';
import { useEffect, useRef, useState } from 'react';
import Moveable from "react-moveable";

interface props {
  name: string;
  setState: any;
}

const Container = styled.div<{ left: number, top: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`

const PopupContainer = styled.div`
  height: 1rem;
  background: gray;
  cursor: grab;
`;

export default function DraggableWindow(props: props) {
  const { name, setState } = props;
  const [position, setPosition] = useState({ left: 100, top: 100 });
  const moveableRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

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
    if (moveableRef.current) {
      setIsInitialized(true);
    }
  }, [moveableRef.current]);

  return (
    <>
      <Container
        ref={containerRef}
        left={position.left}
        top={position.top}
      >
        <PopupContainer ref={moveableRef} />
        {isInitialized && (
          <Moveable
            target={moveableRef.current}
            draggable={true}
            onDrag={onDrag}
            throttleDrag={10}
          />
        )}

        <div>
          <p>{name} draggable content</p>
          <button onClick={() => setState(false)}>Close</button>
        </div>
      </Container>
    </>
  )
}