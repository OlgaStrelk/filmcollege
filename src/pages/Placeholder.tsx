import React from "react";
import styles from "./Placeholder.module.scss";
import { LinkButton } from "../ui/LinkButton";
import WhiteLink from "../icons/link_white.svg?react";
interface PlaceholderProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}
const Placeholder: React.FC<PlaceholderProps> = ({
  title = "Страница в разработке",
  description = "Эта страница находится в стадии разработки. Скоро здесь появится больше информации! А пока вы можете вернуться на главную страницу.",
  buttonText = "Вернуться на главную",
  buttonUrl = "/",
}) => (
  <section className={styles.placeholder} id="placeholder">
    <div className={styles["placeholder-container"]}>
      <div className={styles["content-wrapper"]}>
        <h1 className={styles["font-h1"]}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <LinkButton
          variant="default"
          size="lg"
          icon={WhiteLink}
          href={buttonUrl}
        >
          {buttonText}
        </LinkButton>
      </div>
    </div>
  </section>
);
export default Placeholder;
