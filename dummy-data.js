const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for Everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event we are going to...',
      location: 'Some Street 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for Introverts',
      description:
        'We know networking is not fun if you are an introverted person.',
      location: 'New Wall Street 5, 98765 New York',
      date: '2021-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for Extroverts',
      description:
        'You probably don’t need help with networking in general.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/extroverts-event.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  export function getAllEvents(){
    return DUMMY_EVENTS;
  }
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    return DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month - 1
      );
    });
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }
  