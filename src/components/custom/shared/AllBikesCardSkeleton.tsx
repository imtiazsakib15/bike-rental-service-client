import { Skeleton } from "@/components/ui/skeleton";

const AllBikesCardSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <Skeleton className="w-full h-48 rounded mb-4" />
      <Skeleton className="h-6 w-4/5 mb-3" />
      <Skeleton className="h-4 w-3/4 mb-4" />

      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-6 w-20" />
      </div>

      <div className="grid gap-2 grid-cols-2">
        <Skeleton className="w-full h-9 rounded" />
        <Skeleton className="w-full h-9 rounded" />
      </div>
    </div>
  );
};

export default AllBikesCardSkeleton;
