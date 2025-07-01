import styles from "./ProductionCenter.module.scss";
import productionCenterData from "../../data/productionCenter.json";
import { LinkButton } from "../../ui/LinkButton";

interface ProductionCenterData {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  linkUrl: string;
}

const productionCenter: ProductionCenterData = productionCenterData;

const ProductionCenter: React.FC = () => (
  <section className={styles["production-center"]}>
    <div className={styles.container}>
      <h2>{productionCenter.title}</h2>
      <p>{productionCenter.description}</p>
      <div className={styles["buttons-container"]}>
        <LinkButton
          variant="outline"
          size="default"
          icon="/icons/link.svg"
          href={productionCenter.linkUrl}
        >
          {productionCenter.buttonText}
        </LinkButton>
      </div>
    </div>
  </section>
);

export default ProductionCenter;
