'use client';

import styles from "./page.module.css";
import clsx from "clsx";
const Clock = dynamic(() => import("@/components/Clock"), { ssr: false });
import dynamic from "next/dynamic";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  const wrapperElement = useRef<HTMLDivElement>(null);
  const backgroundElement = useRef<HTMLImageElement>(null);
  const [page, setPage] = useState("home");
  const [navOrientation, setNavOrientation] = useState("horizontal");
  const handleScroll = () => {
    const currentPos = window.scrollY * -0.5;
    if (backgroundElement.current) {
      backgroundElement.current.style.top = `${currentPos}px`;
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>

      <div style={{ position: "fixed", top: "0", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={backgroundElement} src={"/bg.png"} alt="background" className={styles.mainBackground} />
      </div>

      <div className={clsx(styles.mainWrapper, navOrientation === "vertical" && styles.mainWrapperVertical)} ref={wrapperElement}>
        <Nav setPage={setPage} orientation={navOrientation} setOrientation={setNavOrientation} />

        <main className={styles.main}>
          {page === "home" ? <>
          <div style={{height:"1300px"}}>hello</div>
          </> : null}
          {page === "about" ? <div>hello</div> : null}
        </main>

      </div>
    </>
  );
}
