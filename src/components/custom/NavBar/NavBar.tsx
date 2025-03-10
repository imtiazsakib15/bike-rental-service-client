import { Link } from "react-router-dom";
import Container from "../Container";
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
import NavBarLink from "./NavBarLink";

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
                <NavBarLink key={navLink.path} to={navLink.path}>
                  {navLink.page}
                </NavBarLink>
              ))}

              {/* user register/login or logout option for large devices */}
              {user ? (
                <>
                  <NavBarLink to={"/dashboard"}>Dashboard</NavBarLink>
                  <Button onClick={handleLogout} variant={"destructive"}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavBarLink to={"/auth/login"}>Login</NavBarLink>
                  <NavBarLink to={"/auth/signup"}>Sign Up</NavBarLink>
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
                        <NavBarLink to={navLink.path}>
                          {navLink.page}
                        </NavBarLink>
                      </DropdownMenuItem>
                    ))}

                    {/* user register/login or logout option for small devices */}
                    {user ? (
                      <>
                        <DropdownMenuItem>
                          <NavBarLink to={"/dashboard"}>Dashboard</NavBarLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Button
                            onClick={handleLogout}
                            variant={"destructive"}
                          >
                            Logout
                          </Button>{" "}
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem>
                          <NavBarLink to={"/auth/login"}>Login</NavBarLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <NavBarLink to={"/auth/signup"}>Sign Up</NavBarLink>
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
