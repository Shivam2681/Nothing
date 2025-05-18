export default function Games() {
  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold mb-12 text-center">Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder content */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-xl">Game content will be added here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}