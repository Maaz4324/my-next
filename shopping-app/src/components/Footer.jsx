import style from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.left}>
          <h3>Location</h3>
          <p>Some where in India</p>
        </div>
        <div className={style.middle}>
          <h3>Around the web</h3>
          <img
            src="/images/facebook.svg"
            alt="sri venkateswara trading facebook"
          />
          <img
            src="/images/twitter.svg"
            alt="sri venkateswara trading twitter"
          />
          <img
            src="/images/insta.svg"
            alt="sri venkateswara trading instagram"
          />
          <img
            src="/images/linkedin.svg"
            alt="sri venkateswara trading linkedin"
          />
        </div>
        <div className={style.right}>
          <h3>Contact us</h3>
          <span>4204820492</span> <br />
          <span>example@mail.com</span>
        </div>
      </div>
      <div className={style.copyR}>
        Copyright © Sri Venkateswara Trading 2023
      </div>
    </div>
  );
}
