function EventSummary(props) {
    const { title, image } = props;
  
    return (
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 text-center text-white shadow-md rounded-b-2xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">{title}</h1>
      </section>
    );
  }
  
  export default EventSummary;
  