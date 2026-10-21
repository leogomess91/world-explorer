import { useEffect, useState } from "react";
import { getCountries } from "../utils/countriesApi";
import CountryList from "./CountryList";
import SearchForm from "./SearchForm";

function Explore() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar países:", error);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function handleSearch(term) {
    setSearchTerm(term);
    setVisibleCount(3);
  }

  function handleShowMore() {
    setVisibleCount((currentCount) => currentCount + 3);
  }

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const visibleCountries = filteredCountries.slice(0, visibleCount);

  return (
    <main className="main">
      <section className="explore">
        <h2 className="explore__title">Explore os países</h2>

        <p className="explore__description">
          Pesquise e descubra informações sobre países de diferentes partes do
          mundo.
        </p>

        <SearchForm onSearch={handleSearch} />

        {isLoading ? (
          <div className="explore__loading" role="status">
            <span className="explore__spinner" aria-hidden="true"></span>
            <p>Carregando países...</p>
          </div>
        ) : error ? (
          <p className="explore__error" role="alert">
            Não foi possível carregar os países. Tente novamente mais tarde.
          </p>
        ) : filteredCountries.length === 0 ? (
          <p className="explore__no-results">
            Nenhum país encontrado. Tente outra pesquisa.
          </p>
        ) : (
          <>
            <CountryList countries={visibleCountries} />

            {visibleCount < filteredCountries.length && (
              <button
                className="explore__more-button"
                type="button"
                onClick={handleShowMore}
              >
                Mostrar mais
              </button>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default Explore;
