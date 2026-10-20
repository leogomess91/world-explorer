function CountryCard({ country }) {
  return (
    <li className="country-card">
      <img
        className="country-card__flag"
        src={country.flags.png}
        alt={`Bandeira de ${country.name}`}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = "/flag-placeholder.svg";
        }}
      />

      <div className="country-card__info">
        <h3 className="country-card__name">{country.name}</h3>

        <p className="country-card__detail">
          <strong>Capital:</strong> {country.capital}
        </p>

        <p className="country-card__detail">
          <strong>Continente:</strong> {country.region}
        </p>

        <p className="country-card__detail">
          <strong>População:</strong>{" "}
          {country.population.toLocaleString("pt-BR")}
        </p>
      </div>
    </li>
  );
}

export default CountryCard;
