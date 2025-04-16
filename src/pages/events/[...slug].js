import { useRouter } from 'next/router';
import { getAllEvents } from '../../../dummy-data';
import EventList from '../../../components/events/event-list';
import ResultsTitle from '../../../components/events/results-title';
import Button from '../../../components/ui/button';


function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const filteredYear = +filterData[0];
  let filteredMonth = filterData[1] ? +filterData[1] : null;

  // Validate year
  if (isNaN(filteredYear) || filteredYear > 2030 || filteredYear < 2021) {
    return (
      <>
        <p className="text-center mt-10">Invalid filter. Please adjust your values!</p>
        <div className="text-center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  // Validate month if provided, adjust for zero-based index if month exists
  if (filteredMonth && (isNaN(filteredMonth) || filteredMonth < 1 || filteredMonth > 12)) {
    filteredMonth = null;
  }

  const allEvents = getAllEvents();

  // Filter events based on year and optional month
  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    const eventYear = eventDate.getFullYear();
    const eventMonth = eventDate.getMonth() + 1; // Correct for zero-based month

    // Ensure that we're comparing the full year and month correctly
    if (filteredMonth) {
      return eventYear === filteredYear && eventMonth === filteredMonth;
    }

    return eventYear === filteredYear;
  });

  // If no events match, show all events
  const eventsToShow = filteredEvents.length > 0 ? filteredEvents : allEvents;

  return (
    <>
      {filteredEvents.length === 0 && (
        <p className="text-center mt-6 text-red-500">
          No events found for the chosen filter. Showing all events instead:
        </p>
      )}

      <ResultsTitle date={new Date(filteredYear, filteredMonth ? filteredMonth - 1 : 0)} />

      <EventList items={eventsToShow} />
    </>
  );
}

export default FilteredEventsPage;
