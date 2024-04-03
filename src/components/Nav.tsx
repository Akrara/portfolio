'use client';
import styles from '@/styles/Nav.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Clock from './Clock';
import NavElement from './NavElement';

function toggleSwitch(e: React.MouseEvent<HTMLDivElement>, setOrientation: Function) {
    e.preventDefault();
    setOrientation((prev: string) => prev === "horizontal" ? "vertical" : "horizontal");
}

function ToggleInput(props: { checked: boolean }) {
    return (
        <div className={styles.inputWrapper}>
            <div className={clsx(styles.inputThumb, props.checked && styles.inputThumbActive)}>
            </div>
        </div>
    )
}

export default function Nav(props: { setPage: Function, orientation: "horizontal" | "vertical", setOrientation: Function }) {
    const [checked, setChecked] = useState(false);
    return (
        <nav className={clsx(styles.nav, props.orientation === "vertical" && styles.navVertical)}>
            <NavElement setPage={props.setPage} page="home">Home</NavElement>
            <NavElement setPage={props.setPage} page="about">About Me</NavElement>
            <NavElement setPage={props.setPage} page="projects">My skills and projects</NavElement>
            <NavElement setPage={props.setPage} page="contact">Contact Me</NavElement>
            <div onClick={(e) => toggleSwitch(e, props.setOrientation)}>Switch to vertical nav <ToggleInput checked={props.orientation === "vertical"} /></div>
            <Clock orientation={props.orientation} />
        </nav>
    )
}