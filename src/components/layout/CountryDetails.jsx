import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../ui/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending || !country) return <Loader />;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div
        className="w-full max-w-6xl 
                   bg-white/5 backdrop-blur-xl 
                   border border-white/10 
                   rounded-3xl shadow-2xl 
                   p-6 md:p-10"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Flag */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={country.flags?.svg}
              alt={country.flags?.alt || country.name?.official}
              className="w-full h-62.5 md:h-87.5 object-cover 
                         transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Country Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {country.name?.official}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm md:text-base">
              
              <p>
                <span className="font-semibold text-gray-200">
                  Native Names:
                </span>{" "}
                {country.name?.nativeName &&
                  Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
              </p>

              <p>
                <span className="font-semibold text-gray-200">
                  Population:
                </span>{" "}
                {country.population?.toLocaleString()}
              </p>

              <p>
                <span className="font-semibold text-gray-200">
                  Region:
                </span>{" "}
                {country.region}
              </p>

              <p>
                <span className="font-semibold text-gray-200">
                  Sub Region:
                </span>{" "}
                {country.subregion}
              </p>

              <p>
                <span className="font-semibold text-gray-200">
                  Capital:
                </span>{" "}
                {country.capital?.join(", ")}
              </p>

              <p>
                <span className="font-semibold text-gray-200">
                  Top Level Domain:
                </span>{" "}
                {country.tld?.[0]}
              </p>

              <p>
                <span className="font-semibold text-gray-200">
                  Currencies:
                </span>{" "}
                {country.currencies &&
                  Object.keys(country.currencies)
                    .map((cur) => country.currencies[cur].name)
                    .join(", ")}
              </p>

              <p>
                <span className="font-semibold text-gray-200">
                  Languages:
                </span>{" "}
                {country.languages &&
                  Object.values(country.languages).join(", ")}
              </p>
            </div>

            {/* Back Button */}
            <NavLink to="/country">
              <button
                className="mt-8 px-6 py-3 rounded-xl
                           bg-linear-to-r from-cyan-500 to-blue-600
                           text-white font-medium
                           hover:from-cyan-400 hover:to-blue-500
                           transition-all duration-300
                           hover:shadow-lg hover:shadow-cyan-500/30"
              >
                ← Go Back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
