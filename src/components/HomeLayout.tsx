'use client';

import styles from '@/styles/HomeLayout.module.scss';
import { useEffect, useRef, useState } from 'react';
import TypeWriter from './TypeWriter';
import clsx from 'clsx';

export default function HomeLayout() {
    const cardWrapper = useRef<HTMLDivElement>(null);
    const wrapperBackground = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const quote=useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry])=>{
            setIsInView(entry.isIntersecting);
        });
        observer.observe(quote.current as Element);
        cardWrapper.current?.classList.add(styles.cardWrapperActive);
        const timeout = setTimeout(() => {
            wrapperBackground.current?.classList.add(styles.wrapperBackgroundActive);
        }, 3000);
        return () => {
            document.getElementsByClassName(styles.cardWrapper)[0]?.classList.remove(styles.cardWrapperActive);
            observer.disconnect();
            clearTimeout(timeout);
        }
    }, []);
    useEffect(() => {
        if(isInView){
            quote.current?.classList.add(styles.quoteLayoutActive);
        }
        else {
            quote.current?.classList.remove(styles.quoteLayoutActive);
        }
    }, [isInView]);
    return (
        <div className={styles.layoutWrapper}>
            <div className={styles.cardWrapper} ref={cardWrapper}>
                <div className={styles.wrapperBackground} ref={wrapperBackground}></div>
                <h1 className={styles.title}>Welcome to my portfolio</h1>
                <TypeWriter text={`<p class=${styles.leadingP}>My name is</p><h2 class=${styles.subtitle}>Dư Thanh Huy</h2><p class=${styles.leadingP}>This was made using only React, Sass, Next.js and typescript, no external libraries!</p>`} delay={45} />
            </div>
            <h4>
                Notice anything weird?
            </h4>
            <TypeWriter text={`<p class=${styles.leadingP}>Thats right, the background has a parallax effect, made with javascript! Neat huh?</p>`} delay={45} />

            <div ref={quote} className={styles.quoteLayout}>
                This is the end of the page, want more? Check out the other tabs!
            </div>
        </div>
    )
}