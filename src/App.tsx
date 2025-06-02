import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
// import Legacy from './pages/Legacy';
import Requirements from './pages/Requirements';
import Games from './pages/Games';
import News from './pages/News';
import About from './pages/About';
import Audio from './pages/Audio';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/buy" element={<PageTransition><Buy /></PageTransition>} />
        {/* <Route path="/legacy" element={<PageTransition><Legacy /></PageTransition>} /> */}
        <Route path="/requirements" element={<PageTransition><Requirements /></PageTransition>} />
        <Route path="/games" element={<PageTransition><Games /></PageTransition>} />
        <Route path="/news" element={<PageTransition><News /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/audio" element={<PageTransition><Audio /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;