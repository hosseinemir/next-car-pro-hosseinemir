import styles from "./Search.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Search() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const route = useRouter();

  const searchhandler = () => {
   if(route.query.category){
       route.push(`/categories/${route.query.category}/filter/${min}/${max}`);
   }else{
    route.push(`/filter/${min}/${max}`);

   }
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="شروع قیمت از"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="text"
        placeholder="تا قیمت"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
      <button onClick={searchhandler}>جستجو</button>
    </div>
  );
}
