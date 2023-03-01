import style from "@/styles/Best.module.css";
import { bestData } from "../assets/best";

export default function Best() {
  return (
    <>
      <div className={style.container}>
        <h1>Best Sellers</h1>
        <div className={style.itemContainer}>
          {bestData.map((data, idx) => (
            <div className={style.item} key={idx}>
              <div className={style.imgContainer}>
                <img src={data.img} alt={data.name} />
              </div>
              <div className={style.txt}>
                <h5>{data.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
