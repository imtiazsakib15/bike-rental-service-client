import { TSidebarItem } from "@/types";
import {
  Bike,
  DollarSign,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

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
    id: "finance",
    label: "Finance",
    route: "/dashboard/finance",
    icon: DollarSign,
  },
  {
    id: "settings",
    label: "Settings",
    route: "/dashboard/settings",
    icon: Settings,
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
