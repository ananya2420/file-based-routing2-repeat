import EventItem from "./event-item";
import { getAllEvents } from "../../dummy-data";

// In components/events/EventList.js
export default function EventList(props) {
  const events = getAllEvents();
    return (
      <ul>
        {events.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    );
  }
  