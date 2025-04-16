import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import Image from "next/image";
import DateIcon from "../../../components/icon/date-icon";
import AddressIcon from "../../../components/icon/address-icon";
import Button from "../../../components/ui/button";
import NewsletterRegistration from "../../../components/input/newsletter-registration";

function EventDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the event data using the ID
  const event = getEventById(id);

  if (!event) {
    return <p>Event not found!</p>;
  }

  const { title, image, date, location, description } = event;

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

  return (
    <div className="event-detail-container">
      {/* Event Image */}
      <div className="relative w-full h-80">
        <Image
          src={image || "/images/coding-event.jpg"}
          alt={title || "Event image"}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Event Content */}
      <div className="mx-[300px] my-[100px]">
        <h2 className="text-3xl font-semibold">{title}</h2>

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

        {/* Description */}
        <p className="text-gray-600">{description}</p>

        <Button link="/events">
          <span>Back to Events</span>
        </Button>
      </div>
      <NewsletterRegistration/>
    </div>
  );
}

export default EventDetail;
