import { FaUserAlt, FaStar, FaClock, FaCalendar } from "react-icons/fa";

const NAVBAR_ITEMS = [
  {
    Icon: FaUserAlt,
    label: "Profile",
  },
  {
    Icon: FaStar,
    label: "Favorites",
  },
  {
    Icon: FaClock,
    label: "Time",
  },
  {
    Icon: FaCalendar,
    label: "Calendar",
  },
];

export const Navbar = () => {
  return (
    <ul className="flex gap-2">
      {NAVBAR_ITEMS.map((item) => (
        <li className="bg-gray-700 hover:bg-gray-600 transition-colors px-10 py-4 rounded-xl cursor-pointer">
          <item.Icon className="w-5 h-5" />
        </li>
      ))}
    </ul>
  );
};
