// src/app/(layout-pages)/view-profile/[userId]/loading.tsx

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4">
            <div className="w-24 h-24 border-8 border-purple-300 border-t-transparent rounded-full animate-spin mb-6" />
            <h2 className="text-2xl font-semibold text-purple-700 animate-pulse">
                Fetching BookBuddy Profile...
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
                Please wait while we load their info 📚
            </p>

            {/* Skeleton placeholder for user profile */}
            <div className="mt-10 bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-purple-200 animate-pulse">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative group">
                        <div className="w-32 h-32 bg-purple-100 rounded-full animate-pulse mb-4" />
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center shadow-md">
                            <span className="relative flex h-3 w-3 mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Active
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-md">
                            <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium animate-pulse" />
                            <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium animate-pulse" />
                            <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Skeleton for stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-5xl">
                {Array(3)
                    .fill(null)
                    .map((_, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow-md border border-purple-100 animate-pulse"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-purple-100 rounded-lg text-purple-600 text-xl w-12 h-12" />
                                <div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Skeleton for available books */}
            <div className="mb-8 w-full max-w-5xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
                        Available for Trade
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array(4)
                        .fill(null)
                        .map((_, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-4 shadow-md border border-purple-100 animate-pulse"
                            >
                                <div className="bg-blue-50 rounded-xl h-40 mb-3 flex items-center justify-center text-blue-300 text-4xl" />
                                <div className="h-4 bg-gray-200 rounded mb-2" />
                                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                                <div className="flex justify-between items-center">
                                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded animate-pulse" />
                                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
