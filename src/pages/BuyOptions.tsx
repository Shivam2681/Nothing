import { motion } from 'framer-motion';

export default function BuyOptions() {
  const phones = [
    {
      name: "Nothing Phone (3a)",
      price: "$499",
      features: [
        "Snapdragon 7+ Gen 3 Processor",
        "6.7\" AMOLED Display",
        "Advanced Glyph Interface",
        "50MP Dual Camera",
        "12GB RAM, 256GB Storage"
      ],
      image: "/api/placeholder/800/500"
    },
    {
      name: "Nothing Phone (2)",
      price: "$599",
      features: [
        "Snapdragon 8+ Gen 1 Processor",
        "6.7\" LTPO OLED Display",
        "Glyph Interface 2.0",
        "50MP + 50MP Dual Camera",
        "12GB RAM, 256GB Storage",
        "4700 mAh Battery"
      ],
      image: "/api/placeholder/800/500"
    },
    {
      name: "Nothing Phone (1)",
      price: "$399",
      features: [
        "Snapdragon 778G+ Processor",
        "6.55\" OLED Display",
        "Original Glyph Interface",
        "50MP + 50MP Dual Camera",
        "8GB RAM, 128GB Storage",
        "4500 mAh Battery"
      ],
      image: "/api/placeholder/800/500"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nothing Phones</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our lineup of innovative smartphones designed with transparency and minimalist technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phones.map((phone, index) => (
            <motion.div
              key={phone.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={phone.image} 
                  alt={phone.name} 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">{phone.name}</h2>
                <p className="text-3xl font-bold text-white mb-6">{phone.price}</p>
                <ul className="space-y-3 mb-8">
                  {phone.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-white text-black font-bold py-4 px-6 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Shop Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 bg-gray-900 p-10 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Nothing Difference</h2>
              <p className="text-gray-400 mb-6">
                Every Nothing Phone is built with our distinctive transparent design philosophy, 
                featuring the iconic Glyph Interface that reimagines how you interact with your device.
              </p>
              <p className="text-gray-400">
                Experience Nothing OS - our clean, fast Android experience with zero bloatware 
                and a design language that perfectly complements our hardware.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black p-6 rounded-lg">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Glyph Interface</h3>
                <p className="text-gray-400">Unique LED notification system integrated into the phone's design</p>
              </div>
              <div className="bg-black p-6 rounded-lg">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Clean Design</h3>
                <p className="text-gray-400">Transparent elements that reveal the beautiful technology inside</p>
              </div>
              <div className="bg-black p-6 rounded-lg">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Nothing OS</h3>
                <p className="text-gray-400">Fast, clean Android experience with our distinctive dot matrix aesthetic</p>
              </div>
              <div className="bg-black p-6 rounded-lg">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Camera</h3>
                <p className="text-gray-400">Pro-grade camera system for exceptional photography</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Compare Models</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Find the Nothing Phone that fits your needs and experience technology that feels like nothing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black text-xl font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            View Comparison
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}