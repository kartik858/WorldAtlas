import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="group list-none">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                      rounded-2xl overflow-hidden shadow-lg 
                      hover:shadow-2xl hover:shadow-cyan-500/20 
                      transition-all duration-500 
                      hover:-translate-y-2">

        {/* Flag Image */}
        <div className="overflow-hidden">
          <img
            src={flags.svg}
            alt={flags.alt || name.common}
            className="w-full h-44 object-cover 
                       transition-transform duration-500 
                       group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h2 className="text-lg font-semibold tracking-wide text-white">
            {name.common.length > 15
              ? name.common.slice(0, 15) + "..."
              : name.common}
          </h2>

          <div className="text-sm text-gray-400 space-y-1">
            <p>
              <span className="text-gray-300 font-medium">Population:</span>{" "}
              {population.toLocaleString()}
            </p>
            <p>
              <span className="text-gray-300 font-medium">Region:</span>{" "}
              {region}
            </p>
            <p>
              <span className="text-gray-300 font-medium">Capital:</span>{" "}
              {capital?.[0] || "N/A"}
            </p>
          </div>

          {/* Button */}
          <NavLink to={`/country/${name.common}`}>
            <button
              className="mt-4 w-full py-2 rounded-lg 
                         bg-linear-to-r from-cyan-500 to-blue-600
                         text-white font-medium 
                         hover:from-cyan-400 hover:to-blue-500
                         transition-all duration-300 
                         hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
