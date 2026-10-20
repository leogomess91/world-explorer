const BASE_URL = "https://countries.dev";

function getCountries() {
  return fetch(`${BASE_URL}/countries`).then((response) => {
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    return response.json();
  });
}

export { getCountries };
