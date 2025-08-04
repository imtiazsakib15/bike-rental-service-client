import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import Container from "../Container";
import { TBike } from "@/types";
import { Link } from "react-router-dom";
import Title from "../shared/Title";
import FeaturedBikesCardSkeleton from "../shared/FeaturedBikesCardSkeleton";

const FeaturedBikes = () => {
  const { data, isLoading, isError } = useGetAllBikesQuery({ limit: "6" });

  const bikes = data?.data as TBike[];

  return (
    <Container>
      <div className="mt-4 sm:mt-6 md:mt-8">
        <Title>Featured Bikes</Title>

        {isError && (
          <div className="text-center sm:text-lg font-medium text-red-500 py-8">
            Something went wrong!
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {isLoading && (
            <>
              <FeaturedBikesCardSkeleton />
              <FeaturedBikesCardSkeleton />
              <FeaturedBikesCardSkeleton />
            </>
          )}
          {bikes &&
            bikes.map((bike: TBike) => (
              <div
                key={bike._id}
                className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="w-full h-56 hover:scale-105 transition-transform object-cover"
                  src={bike.image}
                  alt={bike.name}
                />

                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{bike.name}</h3>
                  <p className="text-gray-600 text-base mb-4">
                    {bike.description.slice(0, 100)} ...
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-800 font-semibold">
                      ${bike.pricePerHour} / hour
                    </span>
                    <span className="font-semibold">
                      {bike.isAvailable ? (
                        <span className="text-green-600">Available</span>
                      ) : (
                        <span className="text-red-600">Not Available</span>
                      )}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Brand: {bike.brand}
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Model: {bike.model}
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Year: {bike.year}
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      CC: {bike.cc}
                    </span>
                  </div>

                  <div className="mt-4">
                    <Link
                      to={`/bikes/${bike._id}`}
                      className="block text-center font-medium w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-900"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedBikes;
