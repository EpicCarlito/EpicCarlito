"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";
import { styled } from "@linaria/react";

const Container = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 0.75rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d8;
  border: 1px solid black;
  border-radius: 9999px;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`;

const MotionContainer = motion.create(Container);
const Motonbutton = motion.create(Button);

export default function GoDown() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY <= 25);
    };

    const scrollDown = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <MotionContainer
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <Motonbutton
                        animate={{
                            y: [0, -10, 0, -10, 0]
                        }}
                        transition={{ ease: "easeOut", duration: 8, repeat: Infinity }}
                        onClick={scrollDown}
                    >
                        <FaArrowDown size={25} />
                    </Motonbutton>
                </MotionContainer>
            )}
        </AnimatePresence>
    );
}
