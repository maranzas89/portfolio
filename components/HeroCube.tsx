"use client";

import React from "react";
import styles from "./HeroCube.module.css";

export default function HeroCube() {
  return (
    <div className="relative z-20 flex items-center justify-center w-[420px] h-[420px] shrink-0 min-w-[320px] min-h-[320px] max-w-[420px] max-h-[420px] translate-y-[80px]">
      <div className={styles.visual}>
        <div className={styles.coreGlow} />
        <div className={styles.ring} />
        <div className={styles.ring2} />
        <div className={styles.ring3} />

        <div className={styles.scene}>
          <div className={styles.cubeWrap}>
            <div className={styles.cube}>
              <div className={`${styles.face} ${styles.front}`} />
              <div className={`${styles.face} ${styles.back}`} />
              <div className={`${styles.face} ${styles.right}`} />
              <div className={`${styles.face} ${styles.left}`} />
              <div className={`${styles.face} ${styles.top}`} />
              <div className={`${styles.face} ${styles.bottom}`} />

              <div className={styles.inner}>
                <div className={`${styles.wire} ${styles.innerFront}`} />
                <div className={`${styles.wire} ${styles.innerBack}`} />
                <div className={`${styles.wire} ${styles.innerRight}`} />
                <div className={`${styles.wire} ${styles.innerLeft}`} />
                <div className={`${styles.wire} ${styles.innerTop}`} />
                <div className={`${styles.wire} ${styles.innerBottom}`} />
              </div>
            </div>
          </div>

          <div className={styles.scan} />
          <div className={`${styles.node} ${styles.n1}`} />
          <div className={`${styles.node} ${styles.n2}`} />
          <div className={`${styles.node} ${styles.n3}`} />
          <div className={`${styles.node} ${styles.n4}`} />
        </div>
      </div>
    </div>
  );
}
