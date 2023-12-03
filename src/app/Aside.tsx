"use client";

import React, { useRef, useState, useContext } from "react";
import styles from "./Aside.module.css";
import { SidebarContext } from "@/context/sidebar.context";
const Aside = () => {
  const { state, dispatch } = useContext(SidebarContext);
  const sideRef = useRef<HTMLDivElement | null>(null);
  const onToggle = () => {
    if (!sideRef.current) return;

    if (state.isOpen) sideRef.current.style.width = "220px";
    else sideRef.current.style.width = "0";
    dispatch({ type: "Toggle" });
  };
  return (
    <div ref={sideRef} className={styles.wrapper}>
      <div className={styles.circlePoint} onClick={onToggle}></div>
    </div>
  );
};

export default Aside;
