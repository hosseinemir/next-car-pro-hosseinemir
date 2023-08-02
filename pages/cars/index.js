import carsData from "../../data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import React from "react";

export default function Carsmainpage() {
  return (
    <div>
      <CarsPage data={carsData} />
    </div>
  );
}
