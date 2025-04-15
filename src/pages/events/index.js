import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import EventSearch from "../../../components/events/event-search";
import EventList from "../../../components/events/event-list";
import { getAllEvents } from "../../../helpers/api-util";

function AllEventsPage(props) {
  const { events } = props;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Browse all upcoming events and find ones that interest you."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          All Events
        </h1>
        <EventSearch onSearch={findEventsHandler} />
        <div className="mt-10">
          <EventList items={events} />
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events || [],
    },
    revalidate: 60, // re-generate every 60s
  };
}

export default AllEventsPage;
