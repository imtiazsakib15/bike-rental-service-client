import { useState } from "react";
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bike, Edit, Trash2, Filter, SortAsc } from "lucide-react";
import { AddBikeDialog } from "@/components/custom/Dashboard/Bikes/AddBikeDialog";
import { TBike } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BikesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: "",
    maxPrice: "",
    minCC: "",
    isAvailable: "",
  });
  const [sort, setSort] = useState("-createdAt");

  const { data, isLoading, isError, refetch } = useGetAllBikesQuery({
    searchTerm,
    sort,
  });
  const bikes = data?.data as TBike[];

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Bike className="size-6" />
            Bike Management
          </h1>
          <p className="text-muted-foreground">
            {bikes?.length || 0} bikes in inventory
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
                checked={sort === "pricePerHour"}
                onCheckedChange={() => setSort("pricePerHour")}
              >
                Price: Low to High
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={sort === "-pricePerHour"}
                onCheckedChange={() => setSort("-pricePerHour")}
              >
                Price: High to Low
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={sort === "-createdAt"}
                onCheckedChange={() => setSort("-createdAt")}
              >
                Newest First
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content Section */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-12 rounded-lg" />
          ))}
        </div>
      ) : isError ? (
        <div className="text-center py-8 space-y-4">
          <div className="text-destructive">Failed to load bikes</div>
          <Button variant="outline" onClick={refetch}>
            Retry
          </Button>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bike</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bikes?.map((bike) => (
                <TableRow key={bike._id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={bike.image}
                        className="h-12 w-12 rounded-md object-cover"
                        alt={bike.model}
                      />
                      <div>
                        <div className="font-medium">
                          {bike.brand} {bike.model}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {bike.cc}cc • {bike.year}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{bike.brand}</div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={bike.isAvailable ? "default" : "destructive"}
                    >
                      {bike.isAvailable ? "Available" : "Unavailable"}
                    </Badge>
                  </TableCell>
                  <TableCell>${bike.pricePerHour}/hr</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && bikes?.length === 0 && (
        <div className="text-center py-8 space-y-4">
          <Bike className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="text-xl font-semibold">No bikes found</p>
          <p className="text-muted-foreground">
            Try adjusting your search or add a new bike
          </p>
        </div>
      )}
    </div>
  );
};

export default BikesPage;
