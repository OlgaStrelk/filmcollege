import React from "react";
import styles from "./Events.module.scss";
import eventsData from "../../data/events.json";
import { LinkButton } from "../../ui/LinkButton";

interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface EventsData {
  sectionTitle: string;
  events: Event[];
  buttonText: string;
  buttonIcon: string;
  buttonUrl: string;
}

const events: EventsData = eventsData;

const Events: React.FC = () => (
  <section className={styles.events}>
    <h2>{events.sectionTitle}</h2>
    <div className={styles["events-grid"]}>
      {events.events.map((event) => (
        <div key={event.id} className={styles["event-card"]}>
          <img
            src={event.imageUrl}
            alt="Фото события"
            className={styles["event-image"]}
          />
          <div className={styles["event-content"]}>
            <h3 className={styles["event-title"]}>{event.title}</h3>
            <p className={styles["event-description"]}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className={styles["all-events-btn"]}>
      <LinkButton
        variant="default"
        size="default"
        icon="/icons/link_white.svg"
        href={events.buttonUrl}
      >
        {events.buttonText}
      </LinkButton>
    </div>
  </section>
);

export default Events;
