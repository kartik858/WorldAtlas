import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/ui/Loader";
import CountryCard from "../components/layout/CountryCard";
import { SearchFilter } from "../components/ui/SearchFilter";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (isLoading) return <Loader />;

  // Search logic
  const matchesSearch = (country) => {
    return country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
  };

  // Filter logic
  const matchesRegion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  const filteredCountries = countries.filter(
    (country) => matchesSearch(country) && matchesRegion(country)
  );

  return (
    <section className="min-h-screen px-6 pb-16 max-w-7xl mx-auto">

      {/* Search & Filter */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      {/* Countries Grid */}
      {filteredCountries.length > 0 ? (
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          ))}
        </ul>
      ) : (
        <div className="text-center mt-16 text-gray-400">
          <p className="text-xl mb-2">No countries found</p>
          <p className="text-sm">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </section>
  );
};

export default Country;
