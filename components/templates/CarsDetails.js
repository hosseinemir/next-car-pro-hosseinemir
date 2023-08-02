import styles from "./CarsDetails.module.css";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Calender from "../icons/Calender";
import React from "react";

export default function CarsDetails(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    price,
    description,
    img,
    category,
  } = props;
  return (
    <div className={styles.main}>
      <img src={img} alt="" />
      <h3>
        {name} {model}
      </h3>
      <div className={styles.container}>
        <div className={styles.subcon}>
          <Company />
          <p>شرکت سازنده</p>
          <span>{name}</span>
        </div>
        <div className={styles.subcon}>
          <Model />
          <p>مدل</p>
          <span>{model}</span>
        </div>
        <div className={styles.subcon}>
          <Calender />
          <p>تاریخ ساخت</p>
          <span>{year}</span>
        </div>
        <div className={styles.subcon}>
          <Road />
          <p>مسافت طی شده</p>
          <span>{distance} کیلومتر</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.subcon}>
          <Location />
          <p>مکان</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.subcon}>
          <p>توضیحات بیشتر</p>
          <span>{description}</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.subcon}>
          <Money />
          <p> قیمت</p>
          <span>{price} تومان</span>
        </div>
      </div>
      <button className={styles.btn}>خرید</button>
    </div>
  );
}
