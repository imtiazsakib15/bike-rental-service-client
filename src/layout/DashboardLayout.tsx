import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import {
  ADMIN_SIDEBAR_ITEMS,
  USER_SIDEBAR_ITEMS,
} from "@/constants/sidebarItems.constant";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("dashboard");
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } lg:w-64 transition-all duration-300 fixed lg:relative h-full bg-white border-r`}
      >
        <div className="h-full overflow-y-auto">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to={"/"}>
              <h3 className="text-2xl sm:text-3xl font-semibold font-mono">
                Ride<span className="text-blue-900">Easy</span>
              </h3>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="p-2">
            {(user?.role === "admin"
              ? ADMIN_SIDEBAR_ITEMS
              : USER_SIDEBAR_ITEMS
            ).map((item) => (
              <Link to={item.route} key={item.id}>
                <Button
                  key={item.id}
                  variant={activeNav === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start mb-1"
                  onClick={() => setActiveNav(item.id)}
                >
                  <item.icon className="size-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden p-4 border-b flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
        </header>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
