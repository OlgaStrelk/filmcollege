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
      <LinkButton
        variant="outline"
        size="default"
        icon={productionCenter.buttonIcon}
        href={productionCenter.linkUrl}
      >
        {productionCenter.buttonText}
      </LinkButton>
    </div>
  </section>
);

export default ProductionCenter;
