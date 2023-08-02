import styles from "./Category.module.css";
import Hatchback from "@/components/icons/Hatchback";
import Sedan from "@/components/icons/Sedan";
import Sport from "@/components/icons/Sport";
import Suv from "@/components/icons/Suv";
import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href={'/categories/hatchback'} className={styles.link}>
          <div className={styles.catbox}>
            <Hatchback />
            <p>هاچبک</p>
          </div>
        </Link>
        <Link href={'/categories/sport'} className={styles.link}>
          <div className={styles.catbox}>
            <Sport />
            <p>اسپرت</p>
          </div>
        </Link>
        <Link href={'/categories/sedan'} className={styles.link}>
          <div className={styles.catbox}>
            <Sedan />
            <p>سدان</p>
          </div>
        </Link>
        <Link href={'/categories/suv'} className={styles.link}>
          <div className={styles.catbox}>
            <Suv />
            <p> suv </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
