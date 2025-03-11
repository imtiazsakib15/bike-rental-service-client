import { Button } from "@/components/ui/button";
import { TBike } from "@/types";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";

type BikeCardProps = {
  bike: TBike;
  onEdit?: () => void;
  onDelete?: () => void;
};

export const BikeCard = ({
  bike,
  onEdit,
}: //  onDelete
BikeCardProps) => (
  <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
    <img
      src={bike.image}
      alt={bike.name}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <div className="space-y-2">
      <h3 className="font-semibold">
        {bike.brand} {bike.model}
      </h3>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{bike.year}</span>
        <span>{bike.cc}cc</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-primary">${bike.pricePerHour}/hr</span>
        <span
          className={`text-sm px-2 py-1 rounded ${
            bike.isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {bike.isAvailable ? "Available" : "Not Available"}
        </span>
      </div>
      <div className="flex gap-2 mt-4">
        <Link to={`/bikes/${bike._id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        {onEdit && (
          <Button variant="ghost" size="icon" onClick={onEdit}>
            <Edit className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  </div>
);
