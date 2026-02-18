import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <>
      <main className="min-h-screen flex items-center px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Explore the World,
              <span className="block bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                One Country at a Time
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Discover detailed insights about countries around the globe —
              from population statistics to fascinating cultural facts.
              Your journey across the world starts here.
            </p>

            <NavLink to="/country">
              <button
                className="inline-flex items-center gap-3 
                           px-7 py-3 rounded-xl
                           bg-linear-to-r from-cyan-500 to-blue-600
                           text-white font-medium tracking-wide
                           hover:from-cyan-400 hover:to-blue-500
                           transition-all duration-300
                           hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Start Exploring
                <FaLongArrowAltRight className="text-lg" />
              </button>
            </NavLink>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/images/world.png"
              alt="World illustration"
              className="w-full max-w-md md:max-w-lg 
                         drop-shadow-2xl 
                         transition-transform duration-500 
                         hover:scale-105"
            />
          </div>
        </div>
      </main>

      {/* About Section */}
      <About />
    </>
  );
};

export default Home;
