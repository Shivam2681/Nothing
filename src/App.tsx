import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BuyOptions from './pages/BuyOptions';
import Legacy from './pages/Legacy';
import Requirements from './pages/Requirements';
import Games from './pages/Games';
import News from './pages/News';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyOptions />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/games" element={<Games />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;