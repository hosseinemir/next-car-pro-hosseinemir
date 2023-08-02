import styles from './CarsPage.module.css'
import CarsCard from '../module/CarsCard/CarsCard'
export default function CarsPage({data}) {
  return (
    <div className={styles.container}>
        
        {data.map(car=> <CarsCard key={car.id} {...car}/>)}
    </div>
  )
}
