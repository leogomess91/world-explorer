import { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-form__label" htmlFor="country-search">
        Pesquisar país
      </label>

      <input
        className="search-form__input"
        id="country-search"
        type="text"
        placeholder="Digite o nome de um país"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        required
      />

      <button className="search-form__button" type="submit">
        Pesquisar
      </button>
    </form>
  );
}

export default SearchForm;
