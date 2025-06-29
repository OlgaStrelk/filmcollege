import React from "react";
import "./ProductionCenter.module.scss";

const ProductionCenter: React.FC = () => {
  return (
    <section className="production-center">
      <div className="container">
        <h2>Проектно-продюсерский центр</h2>
        <p>
          Проектно-продюсерский центр продвигает проекты студентов и создает
          коридоры входа в индустрию для творческих команд студентов и
          выпускников. В рамках проектно-продюсерского центра для студентов
          организуется производственная практика в кинопродакшенах и театрах,
          трудоустройство и возможность компенсировать затраты на обучение (в
          том числе, через участие в работе продакшена внутри колледжа)
        </p>
        <a href="#" className="more-link">
          Подробнее{" "}
          <span className="icon">
            <i className="fas fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ProductionCenter;
