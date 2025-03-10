import { useState } from "react";
import {
  LayoutDashboard,
  Bike,
  Users,
  DollarSign,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("dashboard");

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      route: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "add-bike",
      label: "Add Bike",
      route: "/dashboard/add-bike",
      icon: Bike,
    },
    { id: "users", label: "Users", icon: Users },
    { id: "finance", label: "Finance", icon: DollarSign },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } lg:w-64 transition-all duration-300 fixed lg:relative h-full border-r`}
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
            {navItems.map((item) => (
              <Link to={item.route as string} key={item.id}>
                <Button
                  key={item.id}
                  variant={activeNav === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start mb-1"
                  onClick={() => setActiveNav(item.id)}
                >
                  <item.icon className="h-4 w-4 mr-2" />
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
