import { Fragment } from "react";
import EventList from "../../../components/events/event-list";
import EventSearch from "../../../components/events/event-search";
import { getAllEvents } from "../../../dummy-data";
import { useRouter } from "next/router";

function AllEventsPage(){

    const events=getAllEvents();
    const router = useRouter();

    function findEventsHandler(year,month){
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }
    return(
        <Fragment>
            <h1>All Events</h1>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </Fragment>
    )
}
export default AllEventsPage;