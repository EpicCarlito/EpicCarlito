"use client"

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react"
import { FaArrowDown } from "react-icons/fa";
import { css } from '@linaria/core';

const Container = css`
    position: fixed;
    bottom: 0.5rem;
    right: 0.75rem;
`

const Button = css`
    background-color: #d4d4d8;
    border-width: 1px;
    border-color: gray;
    border-radius: 9999px;    
`

export default function GoDown() {
    const [isVisible, setIsVisible] = useState(true)

    const toggleVisibility = () => {
        setIsVisible(window.scrollY <= 25)
    }

    const scrollDown = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className={Container}
                >
                    <motion.button
                        animate={{ y: [0, -10, 0, -10, 0] }}
                        transition={{ ease: "easeOut", duration: 8, repeat: Infinity }}
                        onClick={scrollDown}
                        className={Button}
                    >
                        <FaArrowDown size={45} className="p-2.5" />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}