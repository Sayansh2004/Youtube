import { useSelector } from "react-redux";

export default function Sidebar() {

  const showSidebar = useSelector((store) => store.app.showSideBar);

  if (!showSidebar) return null;

  return (
    <div className="w-56 mt-2 shadow-md px-4 py-2 bg-white">

      {/* Section 1 */}
      <div className="mb-4">
        <ul className="list-none space-y-2">
          <li className="text-md cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Home
          </li>
          <li className="text-md cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Shorts
          </li>
          <li className="text-md cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Videos
          </li>
          <li className="text-md cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Live
          </li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="mb-4">
        <ul className="list-none space-y-2">
          <li className="font-semibold">Subscriptions</li>
          <li className="text-sm cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Music
          </li>
          <li className="text-sm cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Sports
          </li>
          <li className="text-sm cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Gaming
          </li>
          <li className="text-sm cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Movies
          </li>
        </ul>
      </div>

      {/* Section 3 */}
      <div>
        <ul className="list-none space-y-2">
          <li className="font-semibold">Library</li>
          <li className="text-sm cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Watch Later
          </li>
          <li className="text-sm cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Music
          </li>
          <li className="text-sm cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Sports
          </li>
          <li className="text-sm cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md">
            Gaming
          </li>
        </ul>
      </div>

    </div>
  );
}