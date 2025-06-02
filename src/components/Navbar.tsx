import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    return () => {
      if (isOpen) setIsOpen(false);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-7">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lines flex lg:hidden flex-col gap-[5px] cursor-pointer"
            >
              <div className="line w-15 h-2 bg-white"></div>
              <div className="line w-8 h-2 bg-white"></div>
              <div className="line w-5 h-2 bg-white"></div>
            </button>
            <Link to="/" className="text-4xl font-bold text-white">Nothing</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-yellow-500 text-xl transition-colors duration-300 relative group">
                <span>Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/buy" className="text-white hover:text-yellow-500 text-xl transition-colors duration-300 relative group">
                <span>Buy</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/audio" className="text-white hover:text-yellow-500 text-xl transition-colors duration-300 relative group">
                <span>Audio</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/news" className="text-white hover:text-yellow-500 text-xl transition-colors duration-300 relative group">
                <span>News</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="text-white hover:text-yellow-500 text-xl transition-colors duration-300 relative group">
                <span>About</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-20 left-0 w-full h-screen bg-black md:hidden"
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-500 text-2xl transition-colors">Home</Link>
              <Link to="/buy" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-500 text-2xl transition-colors">Buy</Link>
              <Link to="/audio" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-500 text-2xl transition-colors">Audio</Link>
              {/* <Link to="/requirements" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-500 text-2xl transition-colors">Requirements</Link> */}
              {/* <Link to="/games" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-500 text-2xl transition-colors">Games</Link> */}
              <Link to="/news" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-500 text-2xl transition-colors">News</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-500 text-2xl transition-colors">About</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}