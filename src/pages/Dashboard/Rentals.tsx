import { useState } from "react";
import { useGetAllRentalsQuery } from "@/redux/features/rental/rentalApi";
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
import {
  RotateCw,
  MoreVertical,
  Search,
  ArrowUpDown,
  Bike,
  User,
  Calendar,
} from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TRental } from "@/types";

const Rentals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    status: "all",
  });

  const [sortBy, setSortBy] = useState("startTime-desc");

  const { data, isLoading, isError, refetch } = useGetAllRentalsQuery({
    searchTerm,
    ...filters,
    sort: sortBy,
  });

  const rentals: TRental[] = data?.data || [];

  const handleStatusFilter = (status: string) => {
    setFilters((prev) => ({ ...prev, status }));
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Rental Management</h1>
          <p className="text-muted-foreground">
            {rentals.length} {rentals.length === 1 ? "rental" : "rentals"} in
            history
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={refetch}>
            <RotateCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by user, bike, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {/* Status Filter */}
            <div className="flex gap-2">
              <Button
                variant={filters.status === "all" ? "default" : "outline"}
                onClick={() => handleStatusFilter("all")}
              >
                All
              </Button>
              <Button
                variant={filters.status === "active" ? "default" : "outline"}
                onClick={() => handleStatusFilter("active")}
              >
                Active
              </Button>
              <Button
                variant={filters.status === "completed" ? "default" : "outline"}
                onClick={() => handleStatusFilter("completed")}
              >
                Completed
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Rentals Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead className="w-[140px]">
                <div className="flex items-center">
                  <span>Rental ID</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setSortBy(sortBy === "id-asc" ? "id-desc" : "id-asc")
                    }
                  >
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>User</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <Bike className="h-4 w-4 mr-2" />
                  <span>Bike</span>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Rental Period</span>
                </div>
              </TableHead>

              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              [...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-[140px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[120px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[120px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[180px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-8 w-8 ml-auto" />
                  </TableCell>
                </TableRow>
              ))
            ) : isError ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center text-destructive h-24"
                >
                  Failed to load rentals
                </TableCell>
              </TableRow>
            ) : rentals.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center h-24">
                  No rentals found
                </TableCell>
              </TableRow>
            ) : (
              rentals.map((rental) => (
                <TableRow key={rental._id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="text-sm text-muted-foreground">
                      {rental._id.slice(-8)}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="font-medium">{rental.userId?.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {rental.userId?.email}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="font-medium">{rental.bikeId?.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {rental.bikeId?.cc}cc • {rental.bikeId?.year}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-col">
                      <span>
                        {format(
                          new Date(rental.startTime),
                          "MMM dd, yyyy HH:mm"
                        )}
                      </span>
                      {rental.returnTime ? (
                        <span className="text-sm text-muted-foreground">
                          →{" "}
                          {format(
                            new Date(rental.returnTime),
                            "MMM dd, yyyy HH:mm"
                          )}
                        </span>
                      ) : (
                        <span className="text-sm text-amber-500">
                          Active rental
                        </span>
                      )}
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={!rental.isReturned ? "default" : "secondary"}
                    >
                      {!rental.isReturned ? "Active" : "Completed"}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <span>View Details</span>
                        </DropdownMenuItem>
                        {!rental.returnTime && (
                          <DropdownMenuItem>
                            <span>Mark as Returned</span>
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-destructive">
                          <span>Cancel Rental</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-4 mt-6">
        <div className="text-sm text-muted-foreground">
          Showing 1-{Math.min(10, rentals.length)} of {rentals.length} rentals
        </div>
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
