'use client';

import { useState } from "react";
import styles from "@/styles/NavElement.module.scss";
import clsx from "clsx";

export default function NavElement(props: { setPage: Function, page: string, children: React.ReactNode }) {
    const [activated, setActivated] = useState(false);
    return (
        <div className={styles.navElementWrapper} onClick={() => { props.setPage(props.page); setActivated(true) }} >
            <div onAnimationEnd={() => setActivated(false)} className={clsx(styles.ripple, activated ? styles.activated : '')}>
            </div>
            {props.children}
        </div>
    )
}