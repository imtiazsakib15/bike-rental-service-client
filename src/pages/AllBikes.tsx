import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@/components/custom/Container";
import {
  useGetAllBikesQuery,
  useGetTotalBikeNumberQuery,
} from "@/redux/features/bike/bikeApi";
import { TBike } from "@/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCreateRentalMutation } from "@/redux/features/rental/rentalApi";

const AllBikes = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    brand: "",
    model: "",
    // minYear: "",
    // maxYear: "",
    // minCC: "",
    // maxCC: "",
    isAvailable: "",
    sort: "",
    page: 1,
    limit: 6,
  });

  const { data: totalBikes } = useGetTotalBikeNumberQuery("");
  const { data, isLoading, isError } = useGetAllBikesQuery(filters);
  const [createRental] = useCreateRentalMutation();
  const bikes = data?.data;

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      page: 1, // Reset to first page when filters change
    }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    const rentalInfo = {
      bikeId: (e.target as HTMLFormElement).bikeId.value,
      startTime: new Date().toISOString(),
    };
    console.log(rentalInfo);
    const result = await createRental(rentalInfo).unwrap();
    window.location.replace(result.data.payment_url);
  };

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Filters</h2>

            {/* Search Input */}
            <div className="mb-4">
              <input
                type="text"
                name="searchTerm"
                placeholder="Search bikes..."
                className="w-full p-2 border rounded"
                value={filters.searchTerm}
                onChange={handleFilterChange}
              />
            </div>

            {/* Brand Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Brand</label>
              <input
                type="text"
                name="brand"
                className="w-full p-2 border rounded"
                value={filters.brand}
                onChange={handleFilterChange}
              />
            </div>

            {/* Model Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Model</label>
              <input
                type="text"
                name="model"
                className="w-full p-2 border rounded"
                value={filters.model}
                onChange={handleFilterChange}
              />
            </div>

            {/* Year Range */}
            {/* <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Year Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="minYear"
                  placeholder="Min"
                  className="w-1/2 p-2 border rounded"
                  value={filters.minYear}
                  onChange={handleFilterChange}
                />
                <input
                  type="number"
                  name="maxYear"
                  placeholder="Max"
                  className="w-1/2 p-2 border rounded"
                  value={filters.maxYear}
                  onChange={handleFilterChange}
                />
              </div>
            </div> */}

            {/* Engine CC Range */}
            {/* <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Engine Size (CC)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="minCC"
                  placeholder="Min"
                  className="w-1/2 p-2 border rounded"
                  value={filters.minCC}
                  onChange={handleFilterChange}
                />
                <input
                  type="number"
                  name="maxCC"
                  placeholder="Max"
                  className="w-1/2 p-2 border rounded"
                  value={filters.maxCC}
                  onChange={handleFilterChange}
                />
              </div>
            </div> */}

            {/* Availability */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Availability
              </label>
              <select
                name="isAvailable"
                className="w-full p-2 border rounded"
                value={filters.isAvailable}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </select>
            </div>

            {/* Sort */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select
                name="sort"
                className="w-full p-2 border rounded"
                value={filters.sort}
                onChange={handleFilterChange}
              >
                <option value="">Default</option>
                <option value="pricePerHour">Price: Low to High</option>
                <option value="-pricePerHour">Price: High to Low</option>
                <option value="year">Year: Oldest First</option>
                <option value="-year">Year: Newest First</option>
                <option value="cc">Engine Size: Small to Large</option>
                <option value="-cc">Engine Size: Large to Small</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bike Listings */}
        <div className="lg:col-span-3">
          {isLoading ? (
            <div className="text-center py-8">Loading bikes...</div>
          ) : (
            <></>
          )}

          {isError ? (
            <div className="text-center sm:text-lg font-medium text-red-500 py-8">
              Something went wrong!
            </div>
          ) : (
            <></>
          )}

          {bikes ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(bikes as TBike[]).map((bike) => (
                  <div
                    key={bike._id}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      {bike.brand} {bike.model}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {bike.year} • {bike.cc}cc
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold">
                        ${bike.pricePerHour}/hr
                      </span>
                      <span
                        className={`px-2 py-1 rounded ${
                          bike.isAvailable
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {bike.isAvailable ? "Available" : "Unavailable"}
                      </span>
                    </div>

                    {/* Add View Details Button */}
                    <div className="grid gap-2 grid-cols-2">
                      <Link
                        to={`/bikes/${bike._id}`}
                        className="w-full py-2 px-4 text-center text-sm font-medium bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                      >
                        View Details
                      </Link>

                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            disabled={!bike.isAvailable}
                            className={`w-full py-2 px-4 rounded text-white text-sm font-medium transition-colors ${
                              bike.isAvailable
                                ? "bg-blue-950 hover:bg-blue-900"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                          >
                            Rent Now
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <form className="w-full" onSubmit={handlePayment}>
                            <input
                              type="hidden"
                              name="bikeId"
                              value={bike._id}
                            />
                            <DialogHeader>
                              <DialogTitle>
                                Pay 500 TK as service charge?
                              </DialogTitle>
                              <DialogDescription>
                                To rent this bike, you need to pay 500 TK as
                                service charge. Click "Proceed" to proceed with
                                the payment.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button type="submit">Proceed</Button>
                            </DialogFooter>{" "}
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center gap-2">
                {Array.from({
                  length: Math.ceil(totalBikes?.data / filters.limit),
                }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, page: i + 1 }))
                    }
                    className={`px-4 py-2 rounded ${
                      filters.page === i + 1
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AllBikes;
