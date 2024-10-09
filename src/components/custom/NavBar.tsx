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
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

const NavBar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully");
  };

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
            {/* navbar for large devices */}
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

              {/* user register/login or logout option for large devices */}
              {user ? (
                <Button onClick={handleLogout} variant={"destructive"}>
                  Logout
                </Button>
              ) : (
                <>
                  <NavLink
                    to={"/auth/login"}
                    className={({ isActive }) =>
                      isActive ? "border-b-2 border-blue-900" : ""
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to={"/auth/signup"}
                    className={({ isActive }) =>
                      isActive ? "border-b-2 border-blue-900" : ""
                    }
                  >
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>

            {/* navbar for small devices */}
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

                    {/* user register/login or logout option for small devices */}
                    {user ? (
                      <DropdownMenuItem>
                        <Button onClick={handleLogout} variant={"destructive"}>
                          Logout
                        </Button>{" "}
                      </DropdownMenuItem>
                    ) : (
                      <>
                        <DropdownMenuItem>
                          <NavLink
                            to={"/auth/login"}
                            className={({ isActive }) =>
                              isActive ? "border-b-2 border-blue-900" : ""
                            }
                          >
                            Login
                          </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <NavLink
                            to={"/auth/signup"}
                            className={({ isActive }) =>
                              isActive ? "border-b-2 border-blue-900" : ""
                            }
                          >
                            Sign Up
                          </NavLink>
                        </DropdownMenuItem>
                      </>
                    )}
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
