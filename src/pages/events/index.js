import { Fragment } from "react";
//import EventList from "../../components/events/event-list";
//import EventSearch from "../../components/events/event-search";
//import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import Head from "next/head";
import { getAllEvents } from "../../../helpers/api-util";
import EventList from "../../../components/events/event-list";
import EventSearch from "../../../components/events/event-search";

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
                <title>All my events.</title>
            </Head>
            <Head>
                <title>All Events</title>
                <meta
                    name="description"
                    content="Browse all upcoming events and find ones that interest you."
                    key="description"
                />
            </Head>
            <h1>All Events</h1>
            <EventSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events,
        },
        revalidate: 60,
    };
}

export default AllEventsPage;
