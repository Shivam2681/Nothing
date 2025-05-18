import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function Home() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgElement = document.querySelector(".svg");
          if (svgElement) {
            svgElement.remove();
          }
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e: Event) {
      const mouseEvent = e as MouseEvent;
      const xMove = (mouseEvent.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".phone", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="100"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  NOTHING
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./phone.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-96 lg:h-screen bg-black">
            <div className="imagesdiv bg-white relative overflow-hidden w-full h-96 lg:h-screen">
              {/* <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              /> */}
              {/* <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full "
                src="./nothing.png"
                alt=""
              /> */}
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[7rem] lg:text-[12rem] text-black leading-none lg:-ml-40">
                  Nothing
                </h1>
                {/* <h1 className="text-[12rem] text-black hidden lg:block leading-none ml-20">Phone 3</h1> */}
                {/* <h1 className="text-[12rem] text-black hidden lg:block leading-none ml-96">2025</h1> */}
              </div>
              <div className="text text-white absolute right-20 bottom-32 -translate-x-1/2  rotate-[-10deg]">
                <h1 className="text-[5rem] hidden md:block text-black leading-none lg:-ml-72">
                  Phone 3a
                </h1>
                <h1 className="text-[2rem] hidden md:block text-black lg:block leading-none lg:-ml-72">
                  Wonderful by design. <br />
                  Available now. Starting from ₹17,999.
                </h1>
                {/* <h1 className="text-[5rem] text-black hidden lg:block leading-none lg:-ml-72">2025</h1> */}
              </div>

              <img
                className="absolute character lg:w-1/2 -bottom-[250%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
                src="./nothing.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              {/* <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ear.webp"
                alt=""
              /> */}
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex flex-col md:flex-row text-white w-full h-[80%] px-4 sm:px-6 md:px-8">
              <div className="limg relative w-full md:w-1/2 h-1/2 md:h-full mb-8 md:mb-0">
                <img
                  className="absolute w-1/4 lg:w-1/3 scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./phone2.webp"
                  alt="Nothing Phone 3a Side View"
                />
              </div>
              <div className="rg w-full md:w-[30%] py-4 sm:py-8 md:py-30">
                <h1 className="text-4xl sm:text-6xl md:text-8xl">Still Running,</h1>
                <h1 className="text-4xl sm:text-6xl md:text-8xl">Not Hunting</h1>
                <p className="mt-4 sm:mt-6 md:mt-10 text-base sm:text-lg md:text-xl font-[Helvetica_Now_Display]">
                  The Nothing Phone (3a) embraces a minimalist design philosophy. 
                  We've focused on what truly matters - clean lines, sustainable materials, 
                  and technology that enhances your life without overwhelming it.
                </p>
              </div>
            </div>
          </div>
          <div className="design-section w-full min-h-screen py-16 md:py-0 flex items-center justify-center bg-zinc-100">
            <div className="design-content w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-black">Glyph Interface</h2>
                <p className="text-lg sm:text-xl text-gray-800 mb-6 sm:mb-8">
                  The iconic Glyph Interface returns with a refined design. 
                  Over 30 light segments create a visual language that's as functional as it is beautiful.
                  Customize notifications, charging indicators, and more with this uniquely Nothing feature.
                </p>
                <ul className="list-disc pl-5 text-base sm:text-lg text-gray-700 mb-8">
                  <li className="mb-2">Unique light patterns for different notifications</li>
                  <li className="mb-2">Charging progress indicator</li>
                  <li className="mb-2">Music visualization mode</li>
                  <li>Essential notifications at a glance</li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src="./glyph.webp" 
                  alt="Nothing Phone 3a Glyph Interface" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          {/* Camera Section */}
          <div className="camera-section w-full min-h-screen py-16 md:py-0 flex items-center justify-center bg-black">
            <div className="camera-content w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col-reverse lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                <img 
                  src="./camera3.webp" 
                  alt="Nothing Phone 3a Camera" 
                  className="w-full sm:w-3/4 md:w-2/3 mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white">Next-Level Photography</h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                  Capture every moment with exceptional clarity using the dual 50MP camera system. 
                  The primary sensor delivers stunning details, while advanced computational photography 
                  ensures perfect shots even in challenging light conditions.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-zinc-900 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">50MP</h3>
                    <p className="text-sm sm:text-base text-gray-400">Main Camera with Sony IMX890 sensor</p>
                  </div>
                  <div className="bg-zinc-900 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ultra HDR</h3>
                    <p className="text-sm sm:text-base text-gray-400">True-to-life colors and dynamic range</p>
                  </div>
                  <div className="bg-zinc-900 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Night Mode</h3>
                    <p className="text-sm sm:text-base text-gray-400">Crystal clear low-light photography</p>
                  </div>
                  <div className="bg-zinc-900 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">4K Video</h3>
                    <p className="text-sm sm:text-base text-gray-400">Cinema-quality video recording</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Features Section */}
          <div className="features-section w-full py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-10 sm:mb-16 text-center text-black">Why Nothing Phone (3a)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                <div className="feature-card bg-gray-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <i className="ri-cpu-line text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">MediaTek Dimensity 7350 Pro</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Powerful and efficient 4nm processor that delivers exceptional performance with minimal power consumption.
                  </p>
                </div>
                <div className="feature-card bg-gray-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <i className="ri-battery-charge-line text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">5000 mAh Battery</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Long-lasting battery that powers you through multiple days with a single charge and supports 45W fast charging.
                  </p>
                </div>
                <div className="feature-card bg-gray-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <i className="ri-smartphone-line text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">6.7" AMOLED Display</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Vibrant colors and deep blacks with 120Hz refresh rate for buttery-smooth animations and scrolling.
                  </p>
                </div>
                <div className="feature-card bg-gray-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <i className="ri-android-line text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Nothing OS 3.0</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Clean, fast and minimalist Android experience with 3 years of OS updates and 4 years of security patches.
                  </p>
                </div>
                <div className="feature-card bg-gray-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <i className="ri-sound-module-line text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Dual Stereo Speakers</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Immersive audio experience with high-quality speakers that deliver rich and detailed sound.
                  </p>
                </div>
                <div className="feature-card bg-gray-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <i className="ri-fingerprint-line text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Under-Display Fingerprint</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Fast and secure biometric authentication with an optical fingerprint sensor embedded in the display.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specs Section */}
          <div className="specs-section w-full py-16 sm:py-20 md:py-24 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-10 sm:mb-16 text-center text-white">Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-8">
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Display</h3>
                  <p className="text-sm sm:text-base text-gray-400">6.7" AMOLED, 2412 x 1080 pixels, 120Hz, HDR10+</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Processor</h3>
                  <p className="text-sm sm:text-base text-gray-400">MediaTek Dimensity 7350 Pro (4nm)</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">RAM & Storage</h3>
                  <p className="text-sm sm:text-base text-gray-400">8GB LPDDR5 RAM, 128GB / 256GB UFS 3.1</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Battery</h3>
                  <p className="text-sm sm:text-base text-gray-400">5000 mAh, 45W fast charging</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Main Camera</h3>
                  <p className="text-sm sm:text-base text-gray-400">50MP Sony IMX890 (OIS), f/1.8</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Ultrawide Camera</h3>
                  <p className="text-sm sm:text-base text-gray-400">50MP, f/2.2, 114° FOV</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Selfie Camera</h3>
                  <p className="text-sm sm:text-base text-gray-400">32MP, f/2.4</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Connectivity</h3>
                  <p className="text-sm sm:text-base text-gray-400">5G, Wi-Fi 6, Bluetooth 5.3, NFC, USB Type-C</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">OS</h3>
                  <p className="text-sm sm:text-base text-gray-400">Nothing OS 3.0 based on Android 14</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Water Resistance</h3>
                  <p className="text-sm sm:text-base text-gray-400">IP54 dust and splash resistance</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Dimensions</h3>
                  <p className="text-sm sm:text-base text-gray-400">161.7 x 76.3 x 8.5 mm, 190g</p>
                </div>
                <div className="spec-item border-b border-zinc-700 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Colors</h3>
                  <p className="text-sm sm:text-base text-gray-400">Black, White, Blue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="cta-section w-full min-h-screen py-16 md:py-0 flex items-center justify-center bg-white relative overflow-hidden">
            <img 
              src="./nothing.png" 
              alt="Nothing Phone 3a Front View" 
              className="absolute w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 md:px-8">
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 text-black">Experience Nothing</h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 sm:mb-8 md:mb-10">
                The Phone (3a) combines beautiful design, powerful technology, and a pure experience. 
                All at a price that makes sense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white text-base sm:text-xl font-bold rounded-full hover:bg-gray-800">
                  Buy Now - From ₹17,999
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-black text-black text-base sm:text-xl font-bold rounded-full hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>
          </div>


          {/* Footer */}
          <footer className="w-full py-12 bg-black text-white">
            <div className="max-w-7xl mx-auto px-8">
              <div className="flex flex-col md:flex-row justify-between mb-12">
                <div className="mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-6">Nothing</h3>
                  <p className="text-gray-400 max-w-md">
                    Making tech fun again. Nothing creates technology that feels like nothing.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-lg font-bold mb-4">Products</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-400 hover:text-white">Phone (3a)</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Phone (2a)</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Ear (2)</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">CMF by Nothing</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-4">Support</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Warranty</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Where to Buy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-4">Company</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 md:mb-0">© 2025 Nothing Technology Limited. All rights reserved.</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="ri-instagram-line text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="ri-twitter-x-line text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="ri-youtube-line text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="ri-linkedin-line text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default Home;
