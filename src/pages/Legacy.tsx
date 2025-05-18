import { motion } from 'framer-motion';

export default function Legacy() {
  const audioProducts = [
    {
      title: "Nothing Ear (2)",
      year: "2023",
      description: "Hi-res audio certified wireless earbuds with personalized ANC and dual connection for seamless device switching.",
      image: "/ear1.webp"
    },
    {
      title: "Nothing Ear (stick)",
      year: "2022",
      description: "Half-in ear earbuds with ergonomic design housed in a unique cylindrical case, delivering 12mm custom drivers for rich sound.",
      image: "/ear2.webp"
    },
    {
      title: "Nothing Ear (1)",
      year: "2021",
      description: "Our first product. Transparent design with Active Noise Cancellation and up to 34 hours of listening time.",
      image: "/ear3.webp"
    },
    {
      title: "Nothing Ear (1) Black Edition",
      year: "2021",
      description: "Limited edition of our iconic earbuds in sleek black while maintaining the transparent design language.",
      image: "/ear4.webp"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nothing Audio Legacy</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our journey of sound innovation through transparent design and exceptional audio experiences.
          </p>
        </motion.div>

        <div className="space-y-24">
          {audioProducts.map((product, index) => (
            <motion.div 
              key={product.title} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-80 object-cover rounded-lg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-none"></div>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block bg-gray-900 px-4 py-1 rounded-full mb-2">
                  <p className="text-lg text-white font-medium">{product.year}</p>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">{product.title}</h2>
                <p className="text-xl text-gray-400">{product.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors mt-4"
                >
                  Explore Product
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 bg-gray-900 p-10 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Sound Innovation</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            At Nothing, we believe audio devices should be both technologically advanced and aesthetically beautiful.
            Every product represents our commitment to transparent design and exceptional sound quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black rounded-lg">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Sound</h3>
              <p className="text-gray-400">Custom-engineered drivers and advanced acoustic architecture for exceptional audio clarity.</p>
            </div>
            <div className="p-6 bg-black rounded-lg">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparent Design</h3>
              <p className="text-gray-400">Showcasing the beauty of technology through our signature transparent design language.</p>
            </div>
            <div className="p-6 bg-black rounded-lg">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Features</h3>
              <p className="text-gray-400">Intelligent noise cancellation, intuitive controls, and seamless connectivity across devices.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience Nothing Audio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Discover our complete range of audio products designed to deliver exceptional sound with distinctive style.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black text-xl font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            Shop Collection
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}