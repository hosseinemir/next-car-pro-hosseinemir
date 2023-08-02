import styles from "./CarsCard.module.css";
import Location from "../../icons/Location";

export default function CarsCard(props) {
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
  console.log(props);
  return (
    <div className={styles.container}>
      <div className={styles.imgdiv}>

      <img src={img} alt="" />
      </div>
      <p className={styles.name}>
        {name} {model}
      </p>
      <div className={styles.yearediv}>
        <p>مدل {year}</p>
        <p>کارکرد: {distance === "0" ? "صفر" : distance}</p>
      </div>

      <div className={styles.loc}>
        <p>تومان {price.toLocaleString()} </p>
        <p>
          <Location /> {location}
        </p>
      </div>
    </div>
  );
}
