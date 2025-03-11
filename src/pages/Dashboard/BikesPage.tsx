import { useState } from "react";
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bike, Filter, SortAsc } from "lucide-react";
import { AddBikeDialog } from "./AddBikeDialog";
import { BikeCard } from "../../components/custom/Dashboard/Bikes/BikeCard";
import { TBike } from "@/types";

const BikesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: "",
    maxPrice: "",
    minCC: "",
    isAvailable: "",
  });
  const [sortBy, setSortBy] = useState("pricePerHour-asc");

  const { data, isLoading, isError } = useGetAllBikesQuery({
    searchTerm,
    ...filters,
    sort: sortBy,
  });
  const bikes = data?.data as TBike[];
  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Available Bikes</h1>
          <p className="text-muted-foreground">
            {bikes?.length || 0} bikes available for rental
          </p>
        </div>
        <AddBikeDialog />
      </div>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Search bikes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:max-w-xs"
        />

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <div className="p-2 space-y-4">
                <Input
                  placeholder="Min Price"
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      minPrice: e.target.value,
                    }))
                  }
                />
                <Input
                  placeholder="Max Price"
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxPrice: e.target.value,
                    }))
                  }
                />
                <Input
                  placeholder="Min CC"
                  type="number"
                  value={filters.minCC}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, minCC: e.target.value }))
                  }
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <SortAsc className="mr-2 h-4 w-4" />
                Sort By
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={sortBy === "pricePerHour-asc"}
                onCheckedChange={() => setSortBy("pricePerHour-asc")}
              >
                Price: Low to High
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={sortBy === "pricePerHour-desc"}
                onCheckedChange={() => setSortBy("pricePerHour-desc")}
              >
                Price: High to Low
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={sortBy === "year-desc"}
                onCheckedChange={() => setSortBy("year-desc")}
              >
                Newest First
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content Section */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-lg" />
          ))}
        </div>
      ) : isError ? (
        <div className="text-center py-8 text-destructive">
          Failed to load bikes. Please try again later.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bikes?.map((bike) => (
            <BikeCard
              key={bike._id}
              bike={bike}
              onEdit={() => console.log("handleEditBike(bike._id)")}
              onDelete={() => console.log("handleDeleteBike(bike._id)")}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && bikes?.length === 0 && (
        <div className="text-center py-8 space-y-4">
          <Bike className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="text-xl font-semibold">No bikes found</p>
          <p className="text-muted-foreground">
            Try adjusting your filters or search terms
          </p>
          <Button
            variant="ghost"
            onClick={() => {
              setSearchTerm("");
              setFilters({
                brand: "",
                minPrice: "",
                maxPrice: "",
                minCC: "",
                isAvailable: "",
              });
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default BikesPage;
