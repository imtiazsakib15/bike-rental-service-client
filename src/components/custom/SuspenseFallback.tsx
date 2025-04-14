import { ReactNode, Suspense } from "react";
import { CircleLoader } from "react-spinners";

const SuspenseFallback = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center">
          <CircleLoader color="#0e2898" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseFallback;
