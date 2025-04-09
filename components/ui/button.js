import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link
        href={props.link}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
    >
      {props.children}
    </button>
  );
}

export default Button;
