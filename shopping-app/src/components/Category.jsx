import style from "@/styles/Category.module.css";

export default function Category() {
  return (
    <>
      <div className={style.container}>
        <div className={style.category}>
          <h1>Featured Categories</h1>
          <div className={style.imgContainer}>
            <a href="/shop/teracotta" className={`${style.img} ${style.img1}`}>
              <div className={`${style.img} ${style.img1}`}>
                <div className={`${style.clock} ${style.one}`}>
                  <h2>Teracotta items</h2>
                </div>
              </div>
            </a>
            <a href="/shop/frames" className={`${style.img} ${style.img2}`}>
              <div className={`${style.img} ${style.img2}`}>
                <div className={`${style.clock} ${style.two}`}>
                  <h2>Frames</h2>
                </div>
              </div>
            </a>
            <a href="/shop/wall-clock" className={`${style.img} ${style.img3}`}>
              <div className={`${style.img} ${style.img3}`}>
                <div className={`${style.clock} ${style.three}`}>
                  <h2>Wall clock</h2>
                </div>
              </div>
            </a>
            <a
              href="/shop/show-pieces"
              className={`${style.img} ${style.img4}`}
            >
              <div>
                <div className={`${style.clock} ${style.four}`}>
                  <h2>Show pieces</h2>
                </div>
              </div>
            </a>
            <a href="/shop/essentials" className={`${style.img} ${style.img5}`}>
              <div>
                <div className={`${style.clock} ${style.five}`}>
                  <h2>Home essential</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
