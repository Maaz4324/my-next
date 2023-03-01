import style from "@/styles/Shop.module.css";
import { useRouter } from "next/router";
import { teracottaData } from "@/assets/teracotta";
import { essentialData } from "@/assets/essential";
import { frameData } from "@/assets/frame";
import { showData } from "@/assets/show";
import { clockData } from "@/assets/clock";
import { useState, useEffect } from "react";

export default function category() {
  const router = useRouter();
  const pageNumber = router.query.category;

  const [pageData, setPageData] = useState(frameData);

  useEffect(() => {
    if (pageNumber == "teracotta") {
      setPageData(teracottaData);
    }
    if (pageNumber == "show-pieces") {
      setPageData(showData);
    }
    if (pageNumber == "frames") {
      setPageData(frameData);
    }
    if (pageNumber == "essentials") {
      setPageData(essentialData);
    }
    if (pageNumber == "wall-clock") {
      setPageData(clockData);
    }
  }, [router.query.category]);
  return (
    <div>
      <div className={style.container}>
        <h3>{pageNumber}</h3>
        <hr />
        <div className={style.itemContainer}>
          {pageData.map((data, idx) => (
            <div key={idx} className={style.item}>
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
    </div>
  );
}
