// app/audio-room/[roomId]/loading.tsx
export default function loading() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="aspect-video bg-gray-200 rounded-xl"></div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
