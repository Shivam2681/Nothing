import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Nothing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Making technology fun again since 2020, with products that feel like nothing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
              alt="Nothing Design Studio"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-gray-400">
              Founded in 2020 by Carl Pei, Nothing was created to bring excitement back to the tech industry. We believe technology should fade into the background and feel like nothing.
            </p>
            <p className="text-gray-400">
              From our transparent earbuds to the distinctive Glyph Interface, we're challenging the status quo with products that are both innovative and beautiful.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Design</h3>
            <p className="text-gray-400">Creating beautiful technology that stands out through iconic design language.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-400">Reimagining what's possible in consumer tech with groundbreaking features.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Community</h3>
            <p className="text-gray-400">Building products with and for our passionate global community of users.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold flex items-center">
                <span className="w-8 h-8 bg-white text-black rounded-full mr-3 flex items-center justify-center">1</span>
                Transparency
              </h3>
              <p className="text-gray-400 ml-11">
                We believe in being transparent - both in our communication and in our design philosophy. Our products showcase their internal beauty through transparent elements, revealing the craftsmanship inside.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold flex items-center">
                <span className="w-8 h-8 bg-white text-black rounded-full mr-3 flex items-center justify-center">2</span>
                Minimalism
              </h3>
              <p className="text-gray-400 ml-11">
                Less is more. We strip away the unnecessary to create products that are intuitive and purposeful. Our design language emphasizes only what truly matters.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold flex items-center">
                <span className="w-8 h-8 bg-white text-black rounded-full mr-3 flex items-center justify-center">3</span>
                Sustainability
              </h3>
              <p className="text-gray-400 ml-11">
                We're committed to creating technology that lasts. From our choice of materials to our focus on longevity through software updates, we're building products that stand the test of time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold flex items-center">
                <span className="w-8 h-8 bg-white text-black rounded-full mr-3 flex items-center justify-center">4</span>
                User-Centric
              </h3>
              <p className="text-gray-400 ml-11">
                Our community is at the heart of everything we do. We actively involve our users in the development process, listening to feedback and implementing features that truly matter.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-24 bg-gray-900 p-10 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-gray-400 mb-8">
                Nothing brings together talent from across the tech industry, with team members who have worked at leading companies including Apple, Samsung, Dyson, and OnePlus.
              </p>
              <p className="text-gray-400">
                Together, we're building a company that challenges the status quo and creates technology worth getting excited about again.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">London</h3>
                <p className="text-gray-400">Global Headquarters</p>
              </div>
              <div className="bg-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Shenzhen</h3>
                <p className="text-gray-400">R&D Center</p>
              </div>
              <div className="bg-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Taipei</h3>
                <p className="text-gray-400">Engineering Hub</p>
              </div>
              <div className="bg-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Bangalore</h3>
                <p className="text-gray-400">Software Development</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Journey</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            We're just getting started. Experience the difference with Nothing Phone (3a).
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black text-xl font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            Explore Our Products
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}