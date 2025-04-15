import { Link } from "react-router-dom";
import Container from "../Container";
import { Facebook, Instagram, Twitter } from "lucide-react";
import FooterLink from "./FooterLink";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 pt-10 sm:pt-14 lg:pt-20 border-t">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 pb-5 sm:pb-8 gap-10">
          <div className="col-span-2">
            <Link to={"/"} className="flex items-center gap-1">
              <img
                src="/bike-icon.png"
                alt="Bike Icon"
                className="size-9 -mt-1"
              />
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-100 font-mono">
                Ride<span className="text-blue-900">Easy</span>
              </h3>
            </Link>
            <p className="mt-4 text-gray-300">
              Your premier bike rental service, providing a wide range of
              high-quality bikes for every type of rider. Whether you're
              exploring the city or embarking on a scenic adventure, we offer
              affordable rates, flexible rental options, and seamless online
              booking to ensure a smooth and enjoyable experience.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Important Links</h4>

            <ul className="mt-3 grid space-y-3">
              <FooterLink to="/">Privacy Policy</FooterLink>
              <FooterLink to="/">Terms & Conditions</FooterLink>
              <FooterLink to="/">Contact Us</FooterLink>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Follow Us On</h4>

            <div className="mt-4 space-x-2">
              <SocialIcon to="/">
                <Facebook />
              </SocialIcon>
              <SocialIcon to="/">
                <Instagram />
              </SocialIcon>
              <SocialIcon to="/">
                <Twitter />
              </SocialIcon>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-5 sm:py-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {currentYear}{" "}
            <Link className="underline" to="/">
              RideEasy
            </Link>
            . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
