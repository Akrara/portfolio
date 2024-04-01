'use client';
import styles from '@/styles/nav.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Clock from './Clock';

export default function Nav(props:{setPage:Function, orientation:string, setOrientation:Function}) {
    return (
        <nav className={clsx(styles.nav, props.orientation === "vertical" && styles.navVertical)}>
            <div onClick={()=>props.setPage("home")}>Home</div>
            <div onClick={()=>props.setPage("about")}>About Me</div>
            <div onClick={()=>props.setPage("skills")}>My Skills and Projects</div>
            <div onClick={()=>props.setPage("contact")}>Contact Me</div>
            <div onClick={()=>props.setOrientation(props.orientation==="horizontal"?"vertical":"horizontal")}>Change Orientation</div>
            <Clock orientation={props.orientation}/>
        </nav>
    )
}