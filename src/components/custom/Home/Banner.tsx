import { Link } from "react-router-dom";
import Container from "../Container";

const Banner = () => {
  return (
    <div className="bg-banner bg-cover bg-center bg-blend-overlay w-full h-[50vh] sm:h-[70vh] lg:h-[80vh]">
      <div className="bg-black w-full h-full bg-opacity-80 flex justify-center items-center text-center">
        <Container>
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl">
            Find Your Perfect Ride Today!
          </h1>
          <p className="text-gray-200 sm:text-lg font-medium pt-4">
            Explore our extensive range of bikes for any adventure.
          </p>
          <div className="mt-8">
            <Link
              to={"/all-bikes"}
              className="font-medium bg-blue-900 text-white py-2.5 px-5 rounded-md hover:bg-blue-950"
            >
              Rent a Bike
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
