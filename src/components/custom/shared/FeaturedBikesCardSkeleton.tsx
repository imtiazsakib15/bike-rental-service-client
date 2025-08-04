import { Skeleton } from "@/components/ui/skeleton";

const FeaturedBikesCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Skeleton className="w-full h-56 rounded-none" />

      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mb-3" />

        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-5 w-1/4" />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-16 rounded-full" />
          ))}
        </div>

        {/* Button placeholder */}
        <Skeleton className="w-full h-10 rounded-md" />
      </div>
    </div>
  );
};

export default FeaturedBikesCardSkeleton;
