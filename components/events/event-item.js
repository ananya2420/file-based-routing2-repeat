
import AddressIcon from "../icon/address-icon";
import ArrowRightIcon from "../icon/arrow-right.icon";
import DateIcon from "../icon/date-icon";
import Button from "../ui/button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row gap-4 p-4 transition hover:shadow-lg">
      <div className="md:w-1/3">
        <img
          src={'/' + image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3 flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <div>
            <DateIcon />
          <time className="text-gray-600 text-sm block">{humanReadableDate}</time>
          </div>
          <address className="whitespace-pre text-gray-500 text-sm not-italic">
            <AddressIcon />
            {formattedAddress}
          </address>
        </div>
        <div className="mt-4">
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span>
              <ArrowRightIcon />
            </span>
            </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

