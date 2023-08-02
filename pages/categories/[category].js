import React from 'react'
import { useRouter } from 'next/router'
import carsData from "../../data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Category from "@/components/module/Category/Category";
export default function category() {
 const categorytype=useRouter()
 const{category}=categorytype.query
 const selectedcars=carsData.filter(car=> car.category===category)
  return (
    <div>
      <Category/>
      <CarsPage data={selectedcars} />
    </div>
  )
}
