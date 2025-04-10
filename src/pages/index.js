import EventList from "../../components/events/event-list";
import { getFeaturedEvents } from "../../dummy-data";
//import { getFeaturedEvents } from "../../dummy-data";
import Head from 'next/head'


export default function Home(props) {
 // const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
        <meta name="description" content="find a lot of great events that allow you to evolve..."/>
      </Head>
      <EventList items={props.events}/>
    <ul>

    </ul>
    </div>
  );
}
export async function getStaticProps(){

  const featuredEvents=await getFeaturedEvents();
  return{
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}