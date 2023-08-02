import carsData from "../../data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Category from "@/components/module/Category/Category";
import Search from "@/components/module/Search/Search";
import React from "react";

export default function Carsmainpage() {
  return (
    <div>
      <Category/>
      <Search/>
      <CarsPage data={carsData} />
    </div>
  );
}
