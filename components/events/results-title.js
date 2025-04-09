import Button from "../ui/button";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="max-w-4xl mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Events in {humanReadableDate}
      </h1>
      <Button link="/events" className="mt-4">
        Show all events
      </Button>
    </section>
  );
}

export default ResultsTitle;
