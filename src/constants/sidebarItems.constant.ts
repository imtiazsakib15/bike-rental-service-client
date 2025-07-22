import { TSidebarItem } from "@/types";
import { Bike, DollarSign, LayoutDashboard, Users } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: TSidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    route: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "bikes",
    label: "Bikes",
    route: "/dashboard/bikes",
    icon: Bike,
  },
  { id: "users", label: "Users", route: "/dashboard/users", icon: Users },
  {
    id: "rentals",
    label: "Rentals",
    route: "/dashboard/rentals",
    icon: DollarSign,
  },
];

export const USER_SIDEBAR_ITEMS: TSidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    route: "/dashboard",
    icon: LayoutDashboard,
  },
];
