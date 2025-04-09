import Link from "next/link";
import { useRouter } from "next/router";

function MainHeader() {
  const router = useRouter();
  const isOnEventsPage = router.pathname === "/events";

  return (
    <header className="bg-indigo-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          NextEvents
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              {!isOnEventsPage && (
                <Link
                  href="/events"
                  className="hover:text-indigo-200 transition-colors duration-200"
                >
                  Browse all events
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
