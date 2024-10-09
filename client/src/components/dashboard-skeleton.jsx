import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <Skeleton className="h-12 w-64 mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="space-y-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-6" />
            </div>
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>

      <div className="space-y-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <Skeleton className="h-6 w-48" />
        <div className="flex space-x-4">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
        </div>
      </div>

      <div className="space-y-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
