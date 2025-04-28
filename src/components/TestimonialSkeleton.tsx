
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TestimonialSkeleton = () => {
  return (
    <Card className="p-6 bg-white shadow-md border-none h-full">
      <div className="flex items-start space-x-4 mb-4">
        <Skeleton className="h-14 w-14 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
      <Skeleton className="h-20 w-full" />
    </Card>
  );
};

export default TestimonialSkeleton;
