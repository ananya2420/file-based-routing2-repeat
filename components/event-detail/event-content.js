function EventContent(props) {
    const { text } = props;
    return (
      <section className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto my-6">
        {props.children}
      </section>
    );
  }
  
  export default EventContent;
  