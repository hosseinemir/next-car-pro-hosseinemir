import React from "react";
import {useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Category from "@/components/module/Category/Category";
import Back from "@/components/icons/Back";
import Search from "@/components/module/Search/Search";
import styles from "../../styles/Category.module.css";

export default function Categorydynamic() {
  const categorytype = useRouter();
  const { category } = categorytype.query;
  const selectedcars = carsData.filter((car) => car.category === category);
  const backhandler=()=>{
    categorytype.push('/cars')
  }
  return (
    <div>
      <Category />
<Search/>
      <div className={styles.back}>
        <div>
          <div onClick={backhandler}>
            
          <Back/>
          </div>
          
          
        </div>
      </div>
      <CarsPage data={selectedcars} />
    </div>
  );
}
