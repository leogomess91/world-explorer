import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  return (
    <ul className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.alpha2Code} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
