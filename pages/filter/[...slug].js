import { useRouter } from "next/router"
import carsData from "@/data/carsData"
import CarsPage from "@/components/templates/CarsPage"
export default function Filteredcar() {
  const route=useRouter()
  console.log(route)
  const [min,max]=route.query.slug || []
  
const filteredcars=carsData.filter(car=> car.price>min && car.price<max)

if(!filteredcars.length) return<p>ماشینی در محدوده مورد نظر موجود نیست </p>
    return (
    <CarsPage data={filteredcars}/>
    // <div>s</div>
  )
}
