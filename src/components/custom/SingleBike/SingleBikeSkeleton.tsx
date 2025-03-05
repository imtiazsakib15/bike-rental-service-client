import { Skeleton } from "@/components/ui/skeleton";

const SingleBikeSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Skeleton className="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div>

      <div className="md:w-1/2 space-y-6">
        <div>
          <Skeleton className="w-full h-10 rounded" />
          <Skeleton className="w-1/2 h-8 rounded mt-2" />
        </div>

        <Skeleton className="w-1/2 h-8 rounded" />

        <div className="space-y-2">
          <Skeleton className="w-full h-[20px] rounded" />
          <Skeleton className="w-full h-[20px] rounded" />
          <Skeleton className="w-full h-[20px] rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-gray-500">Brand</dt>
            <Skeleton className="w-[100px] h-[20px] rounded" />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-gray-500">Model</dt>
            <Skeleton className="w-[100px] h-[20px] rounded" />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-gray-500">Engine</dt>
            <Skeleton className="w-[100px] h-[20px] rounded" />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-gray-500">Year</dt>
            <Skeleton className="w-[100px] h-[20px] rounded" />
          </div>
        </div>

        <Skeleton className="w-full h-10 rounded" />
      </div>
    </div>
  );
};

export default SingleBikeSkeleton;
