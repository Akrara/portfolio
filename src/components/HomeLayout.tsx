'use client';

import styles from '@/styles/HomeLayout.module.scss';
import { useEffect, useRef } from 'react';
import TypeWriter from './TypeWriter';
import clsx from 'clsx';

export default function HomeLayout() {
    const layoutWrapper = useRef<HTMLDivElement>(null);
    const wrapperBackground = useRef<HTMLDivElement>(null);
    useEffect(() => {
        layoutWrapper.current?.classList.add(styles.layoutWrapperActive);
        const timeout = setTimeout(() => {
            wrapperBackground.current?.classList.add(styles.wrapperBackgroundActive);
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, []);
    return(
    <div className={styles.layoutWrapper} ref={layoutWrapper}>
        <div className={styles.wrapperBackground} ref = {wrapperBackground}></div>
        <h1 className={styles.title}>Welcome to my portfolio</h1>
        <TypeWriter text={`<p class=${styles.leadingP}>My name is</p><h2 class=${styles.subtitle}>Dư Thanh Huy</h2><p class=${styles.leadingP}>This was made using only React, Sass, Next.js and typescript, no external libraries!</p>`} delay={45}/>
    </div>
    )
}