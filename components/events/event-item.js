
import AddressIcon from "../icon/address-icon";
import ArrowRightIcon from "../icon/arrow-right.icon";
import DateIcon from "../icon/date-icon";
import Button from "../ui/button";
import Image from "next/image";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  // Format the date
  let humanReadableDate = "Invalid Date";
  if (date) {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate)) {
      humanReadableDate = parsedDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
  }

  // Format the address
  const formattedAddress =
    location && typeof location === "string"
      ? location.replace(/,/g, "\n")
      : "No address provided";

  const exploreLink = `/events/${id}`;

  // Check for image and provide a fallback image
  let imageToShow = "/images/coding-event.jpg"; // Default fallback image
  if (image?.trim()) {
    imageToShow = image;
  } else if (title?.toLowerCase().includes("introvert")) {
    imageToShow = "/images/introvert-event.jpg";
  } else if (title?.toLowerCase().includes("extrovert")) {
    imageToShow = "/images/extroverts-event.jpg";
  }

  return (
    <li className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row gap-4 p-4 my-4 transition hover:shadow-lg">
      {/* Image Section */}
      <div className="md:w-1/3 relative w-full h-48">
        <Image
          src={imageToShow}
          alt={title || "Event image"}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Event Content */}
      <div className="md:w-2/3 flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

          <div className="flex items-center gap-2">
            <DateIcon />
            <time className="text-gray-600 text-sm block">{humanReadableDate}</time>
          </div>

          <div className="flex items-start gap-2">
            <AddressIcon />
            <address className="whitespace-pre text-gray-500 text-sm not-italic">
              {formattedAddress}
            </address>
          </div>
        </div>

        <div className="mt-4">
          <Button link={exploreLink}>
            <span className="d-flex">Explore Event <ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
