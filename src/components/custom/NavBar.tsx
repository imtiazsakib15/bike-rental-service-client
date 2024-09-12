import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { NAV_LINKS } from "@/constants/navLinks.constant";

const NavBar = () => {
  return (
    <div className="bg-white py-3 lg:py-4 border-b shadow-md">
      <Container>
        <div className="flex justify-between">
          <Link to={"/"}>
            <h3 className="text-2xl sm:text-3xl font-semibold font-mono">
              Ride<span className="text-blue-900">Easy</span>
            </h3>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hidden md:block space-x-5">
              {NAV_LINKS.map((navLink) => (
                <NavLink
                  key={navLink.path}
                  to={navLink.path}
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-900" : ""
                  }
                >
                  {navLink.page}
                </NavLink>
              ))}
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-blue-900" : ""
                }
              >
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-blue-900" : ""
                }
              >
                Register
              </NavLink>
            </div>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MenuIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52">
                  <DropdownMenuGroup>
                    {NAV_LINKS.map((navLink) => (
                      <DropdownMenuItem key={navLink.path}>
                        <NavLink
                          to={navLink.path}
                          className={({ isActive }) =>
                            isActive ? "border-b-2 border-blue-900" : ""
                          }
                        >
                          {navLink.page}
                        </NavLink>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem>
                      <NavLink
                        to={"/login"}
                        className={({ isActive }) =>
                          isActive ? "border-b-2 border-blue-900" : ""
                        }
                      >
                        Login
                      </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <NavLink
                        to={"/register"}
                        className={({ isActive }) =>
                          isActive ? "border-b-2 border-blue-900" : ""
                        }
                      >
                        Register
                      </NavLink>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
