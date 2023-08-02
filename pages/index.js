import carsData from "../data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Category from "@/components/module/Category/Category";
import Search from "@/components/module/Search/Search";
import styles from '@/styles/Home.module.css'
import Link from "next/link";



export default function Home() {
  const carinmainpage=carsData.slice(0,3)
  return (
    <>
     <Search/>
     <Category/>
     <CarsPage data={carinmainpage}/>
     <button className={styles.btn}>
      <Link href={'/cars'}>
      
      نمایش تمامی خودرو ها
      </Link>
      
      </button>
    </>
  )
}
