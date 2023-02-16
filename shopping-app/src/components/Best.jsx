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
              <div
                className={style.imgContainer}
                style={{
                  background: `url(${data.img})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "noRepeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className={style.txt}>
                <h5>{data.name}</h5>
                <h4>{data.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
