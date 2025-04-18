import { Home, List, User } from "lucide-react";
import { cn } from "../lib/utils";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col bg-orange-500 text-white p-4">
      <div className="flex items-center space-x-2 text-xl font-bold mb-8">
        <div className="bg-white p-2 rounded">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        </div>
        <span>Store</span>
      </div>
      <nav className="space-y-2">
        <SidebarItem icon={<Home />} label="Home" path="/" active={pathname === "/"} />
        <SidebarItem icon={<List />} label="Listings" path="/product-detail" active={pathname === "/listings"} />
        <SidebarItem icon={<User />} label="Profile" path="/profile-page" active={pathname === "/profile"} />
      </nav>
    </div>
  );
};

const SidebarItem = ({
  icon,
  label,
  path,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  path: string;
  active?: boolean;
}) => {
  return (
    <Link
      to={path}
      className={cn(
        "flex items-center space-x-2 w-full p-2 rounded hover:bg-orange-600 transition",
        active && "bg-white text-orange-500 font-semibold"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Sidebar;
