import { FiSearch } from "react-icons/fi";

export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sorted = [...countries].sort((a, b) =>
      value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );
    setCountries(sorted);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mb-10">
      
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                      rounded-2xl p-6 shadow-lg 
                      flex flex-col lg:flex-row 
                      gap-6 lg:items-center lg:justify-between">

        {/* Search Input */}
        <div className="relative w-full lg:w-1/3">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-3 
                       bg-black/40 border border-white/10 
                       rounded-xl text-gray-200 
                       placeholder-gray-500
                       focus:outline-none 
                       focus:ring-2 focus:ring-cyan-500
                       transition-all duration-300"
          />
        </div>

        {/* Sort Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => sortCountries("asc")}
            className="px-5 py-2 rounded-lg 
                       bg-linear-to-r from-cyan-500 to-blue-600 
                       text-white font-medium
                       hover:from-cyan-400 hover:to-blue-500
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-cyan-500/30"
          >
            A → Z
          </button>

          <button
            onClick={() => sortCountries("des")}
            className="px-5 py-2 rounded-lg 
                       bg-linear-to-r from-purple-500 to-indigo-600 
                       text-white font-medium
                       hover:from-purple-400 hover:to-indigo-500
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-purple-500/30"
          >
            Z → A
          </button>
        </div>

        {/* Region Filter */}
        <div className="w-full lg:w-1/4">
          <select
            value={filter}
            onChange={handleSelectChange}
            className="w-full py-3 px-4 
                       bg-black/40 border border-white/10 
                       rounded-xl text-gray-200
                       focus:outline-none 
                       focus:ring-2 focus:ring-cyan-500
                       transition-all duration-300"
          >
            <option value="all">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Ocean</option>
          </select>
        </div>
      </div>
    </section>
  );
};
