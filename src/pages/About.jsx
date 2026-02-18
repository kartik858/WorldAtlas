import countryFacts from "../api/countryFacts.json";

export const About = () => {
  return (
    <section className="min-h-screen px-6 py-16 max-w-7xl mx-auto">

      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Interesting Facts We're Proud Of
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore some fascinating highlights about countries around the world.
          Every nation has a story — here are a few that stand out.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {countryFacts.map((item) => {
          const { id, countryName, capital, population, interestingFact } = item;

          return (
            <div
              key={id}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 
                         rounded-2xl p-6 shadow-lg 
                         transition-all duration-300 
                         hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {countryName}
              </h3>

              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-medium text-gray-200">Capital:</span>{" "}
                  {capital}
                </p>

                <p>
                  <span className="font-medium text-gray-200">Population:</span>{" "}
                  {population}
                </p>

                <p>
                  <span className="font-medium text-gray-200">
                    Interesting Fact:
                  </span>{" "}
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
