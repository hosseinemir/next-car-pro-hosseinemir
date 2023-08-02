import React from 'react'
import { useRouter } from 'next/router'
import carsData from '../../data/carsData'
import CarsDetails from '@/components/templates/CarsDetails'
export default function Cardetais() {
  const routeid=useRouter()
  const {carID} = routeid.query
  const selectedcar=carsData.filter(car=> car.id==carID)
  const usecar=selectedcar[0]
  console.log(selectedcar)
    return (
    <CarsDetails {...usecar}/>
  )
}
