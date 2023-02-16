import style from "@/styles/FAQ.module.css";
import React, { useState } from "react";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={style.accordion}>
        <div className={style.accordionItem}>
          <div
            className={style.accordionTitle}
            onClick={() => setIsActive(!isActive)}
          >
            <div>
              <h5>{title}</h5>
            </div>
            <div>
              {isActive ? (
                <img src="/images/minus.png" alt="" />
              ) : (
                <img src="images/plus.png" alt="" />
              )}
            </div>
          </div>
          {isActive && (
            <div className={style.accordionContent}>
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
