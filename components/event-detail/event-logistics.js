//import LogisticsItem from "./logistics-item";
//import DateIcon from "../icons/date-icon";
//import AddressIcon from "../icons/address-icon";
import DateIcon from "../icon/date-icon";
import AddressIcon from "../icon/address-icon";
import LogisticsItem from "./logistics-item";
import Image from "next/image";
function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = address.replace(",", "\n");

  return (
    <section className="bg-gray-100 p-6 rounded-2xl shadow-md max-w-4xl mx-auto my-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image src={`/${image}`}
            alt={imageAlt}
            className="w-full h-auto rounded-xl object-cover shadow"
            width={160}
            height={160}
            />
        
        <ul className="w-full md:w-2/3 space-y-4">
          <LogisticsItem icon={DateIcon}>
            <time className="text-gray-700 font-medium">{humanReadableDate}</time>
          </LogisticsItem>
          <LogisticsItem icon={AddressIcon}>
            <address className="whitespace-pre-line text-gray-600">{addressText}</address>
          </LogisticsItem>
        </ul>
      </div>
    </section>
  );
}

export default EventLogistics;

