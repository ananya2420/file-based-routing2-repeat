import { useRouter } from "next/router";
import useSWR from "swr";
import { Fragment, useEffect, useState } from "react";
import EventList from "../../../components/events/event-list";
import ResultsTitle from "../../../components/events/results-title";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/error-alert";
import Head from 'next/head'

// SWR fetcher function
const fetcher = (url) => fetch(url).then((res) => res.json());

function FilteredEventsPage() {
    const [loadedEvents, setLoadedEvents] = useState([]);
    const router = useRouter();
    const filterData = router.query.slug;

    const { data, error } = useSWR(
        "https://data-fetching-7ebfc-default-rtdb.firebaseio.com/events.json",
        fetcher
    );

    useEffect(() => {
        if (data) {
            const events = [];

            for (const key in data) {
                events.push({
                    id: key,
                    ...data[key],
                });
            }

            setLoadedEvents(events);
        }
    }, [data]);

    
   

   

    // Wait until router is ready and data is loaded
    if (!router.isReady || !data) {
        return <p className="center">Loading...</p>;
    }

    if (error) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Failed to load events. Please try again later.</p>
                </ErrorAlert>
            </Fragment>
        );
    }
    
    let pageHeadData=(
    <Head>
         <title>Filtered events</title>
            <meta
            name='descrition'
            content={`A list of filtered events.`}
            />
    </Head>
    )
    if (!loadedEvents) {
        return <Fragment>
            {pageHeadData}
            <p className="center">Loading filter...</p>;</Fragment>
    }
    

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    pageHeadData=(
        <Head>
            <title>Filtered events</title>
            <meta
            name='descrition'
            content={`All events for ${numMonth}/${numYear}`}
            />
        </Head>
    )

    // Validate year and month
    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <Fragment>
                {pageHeadData}
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = loadedEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === numYear &&
            eventDate.getMonth() === numMonth - 1
        );
    });

    if (filteredEvents.length === 0) {
        return (
            <Fragment>
                {pageHeadData}
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <Fragment>
            {pageHeadData}
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
}

export default FilteredEventsPage;
