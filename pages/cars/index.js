import carsData from "../../data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Category from "@/components/module/Category/Category";
import React from "react";

export default function Carsmainpage() {
  return (
    <div>
      <Category/>
      <CarsPage data={carsData} />
    </div>
  );
}
