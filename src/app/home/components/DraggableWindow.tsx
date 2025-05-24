"use client"

import { styled } from '@linaria/react';
import { useEffect, useRef, useState } from 'react';
import Moveable from "react-moveable";

interface props {
  name: string;
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
  border: 1px solid var(--white-but-not);
  border-radius: 0.375rem;
  z-index: 10;
`

const DraggableContainer = styled.div`
  background: #1f2937;
  border-radius: 0.375rem;
  cursor: grab;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25rem 0.5rem;
  gap: 0.375rem;
`

const CloseButton = styled.button`
  height: 0.875rem;
  width: 0.875rem;
  border: none;
  border-radius: 9999px;
  justify-self: center;
  background-color: gray;

  &:hover {
    background-color: red;
  }
`

export default function DraggableWindow(props: props) {
  const { name, setState, children } = props;
  console.log(children)
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
        <DraggableContainer ref={moveableRef}>
          <TopBar>
            <CloseButton onClick={() => setState(false)} />
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
    </>
  )
}