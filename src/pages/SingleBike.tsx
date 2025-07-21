import RentButtonWithPayment from "@/components/custom/shared/RentButtonWithPayment";
import SingleBikeSkeleton from "@/components/custom/SingleBike/SingleBikeSkeleton";
import { useGetABikeQuery } from "@/redux/features/bike/bikeApi";
import { TBike } from "@/types";
import { useParams } from "react-router-dom";

const SingleBike = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useGetABikeQuery(id as string);
  const bike = data?.data as TBike;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {isLoading && <SingleBikeSkeleton />}
      {error && (
        <p className="text-red-500 text-lg font-semibold h-[50vh] grid place-items-center">
          Something went wrong!
        </p>
      )}
      {bike && (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Bike Image */}
          <div className="md:w-1/2">
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Bike Details */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {bike.brand} {bike.model} - {bike.name}
              </h1>
              <p className="text-lg text-gray-500 mt-2">
                {bike.year} • {bike.cc}cc
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-blue-600">
                {bike.pricePerHour}tk/hour
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  bike.isAvailable
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {bike.isAvailable ? "Available" : "Not Available"}
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed">{bike.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <dt className="text-sm font-medium text-gray-500">Brand</dt>
                <dd className="mt-1 text-gray-900">{bike.brand}</dd>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <dt className="text-sm font-medium text-gray-500">Model</dt>
                <dd className="mt-1 text-gray-900">{bike.model}</dd>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <dt className="text-sm font-medium text-gray-500">Engine</dt>
                <dd className="mt-1 text-gray-900">{bike.cc}cc</dd>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <dt className="text-sm font-medium text-gray-500">Year</dt>
                <dd className="mt-1 text-gray-900">{bike.year}</dd>
              </div>
            </div>

            <RentButtonWithPayment bike={bike} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBike;
