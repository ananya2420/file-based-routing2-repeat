
export async function getAllEvents(){
    const response=await fetch('https://data-fetching-7ebfc-default-rtdb.firebaseio.com/sales.json/events.json');
    const data=await response.json();

    const events=[];

    for(const key in data){
        events.push({
            id:key,
            ...data[key]

        });
    }
    return events;

}

export async function getFeturedEvents(){
    const allEvents=await getAllEvents();
return  allEvents.filter((event)=>event.isFeatured);
}
  export async function getEventById(id) {
    const allEvents=await getAllEvents();
    return allEvents.find((event) => event.id === id);
  }
  export async function getFilteredEvents(dateFilter) {
      const { year, month } = dateFilter;

      const allEvents = await getAllEvents();
    
      return DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === year &&
          eventDate.getMonth() === month - 1
        );
      });
    }