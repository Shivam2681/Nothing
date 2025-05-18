import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Rockstar Games</h3>
            <p className="text-gray-400">The future of gaming starts here.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/games" className="text-gray-400 hover:text-yellow-500 transition-colors">Games</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-yellow-500 transition-colors">News</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-yellow-500 transition-colors">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="text-2xl hover:text-yellow-500 transition-colors">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="text-2xl hover:text-yellow-500 transition-colors">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="w-full px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Rockstar Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}