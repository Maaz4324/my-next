import hero from "@/styles/Hero.module.css";

export default function HeroSec() {
  return (
    <>
      <div className={hero.container}>
        <div className={hero.left}>
          <h1>Wall clock</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            mollitia recusandae earum quas explicabo illo sequi similique
            aliquam odio, asperiores vel? Ad alias odit debitis modi ullam
            dolorem iure doloribus?
          </p>
          <button>Shop now</button>
        </div>
        <div className={hero.right}>
          <div className="imgContainer">
            <img src="/clock.png" alt="wall clock" />
          </div>
        </div>
      </div>
    </>
  );
}
