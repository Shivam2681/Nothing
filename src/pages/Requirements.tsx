export default function Requirements() {
  const specs = {
    minimum: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-6600K / AMD Ryzen 5 2600",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580",
      storage: "100 GB available space"
    },
    recommended: {
      os: "Windows 10/11 64-bit",
      processor: "Intel Core i7-10700K / AMD Ryzen 7 5800X",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800 XT",
      storage: "150 GB available space"
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold mb-12 text-center">System Requirements</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Minimum Requirements */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-8 text-yellow-500">Minimum Requirements</h2>
            <div className="space-y-6">
              {Object.entries(specs.minimum).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-xl text-gray-400 capitalize">{key}</span>
                  <span className="text-2xl">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Requirements */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-8 text-yellow-500">Recommended Requirements</h2>
            <div className="space-y-6">
              {Object.entries(specs.recommended).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-xl text-gray-400 capitalize">{key}</span>
                  <span className="text-2xl">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="mt-12 p-8 bg-gray-900 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Additional Notes</h2>
          <ul className="space-y-4 text-xl">
            <li className="flex items-center">
              <i className="ri-information-line text-yellow-500 mr-2"></i>
              DirectX 12 compatible system required
            </li>
            <li className="flex items-center">
              <i className="ri-information-line text-yellow-500 mr-2"></i>
              SSD recommended for optimal performance
            </li>
            <li className="flex items-center">
              <i className="ri-information-line text-yellow-500 mr-2"></i>
              Internet connection required for online features
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}