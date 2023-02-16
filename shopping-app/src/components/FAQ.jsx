import style from "@/styles/FAQ.module.css";
import { faqData } from "@/assets/faq";
import Accordion from "@/components/Accordion";

export default function Faq() {
  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <h1>FAQ</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
            quam laboriosam perspiciatis dolores aspernatur corrupti, laudantium
            perferendis voluptas ipsam inventore iure pariatur eos, aperiam
            ipsum soluta consectetur consequuntur. Neque?
          </p>
        </div>
        <div className={style.right}>
          {faqData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </>
  );
}
