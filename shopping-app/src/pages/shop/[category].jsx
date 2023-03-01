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
  const [pageName, setPageName] = useState(router.query.category);
  const pageNumber = router.query.category;
  const dataArray = [
    teracottaData,
    essentialData,
    frameData,
    showData,
    clockData,
  ];

  useEffect(() => {
    if (pageName == undefined) {
      setPageName("");
    } else {
      setPageName(pageNumber.charAt(0).toUpperCase() + pageNumber.slice(1));
    }
  }, [router.query.category]);

  const [pageData, setPageData] = useState([]);

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
    let elemNo = 0;
    for (let i = 0; i < dataArray.length; i++) {
      const element = dataArray[i].filter((data) => data.keyword == pageNumber);
      if (element.length != 0) {
        setPageData(element);
        elemNo++;
      }
    }
    if (elemNo == 0) {
      setPageData([]);
    }
  }, [router.query.category]);

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
        <h3>{pageName}</h3>
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
