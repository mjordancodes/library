let baseURL = "https://api.airtable.com/v0/appNOiwNgPCGylwR6/";
let apiKey = `?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;
let url = "";

export async function getAllBooks() {
  url = baseURL + "books" + apiKey;
  return fetch(url).then((res) => res.json());
}

export async function getAllAuthors() {
  url = baseURL + "authors" + apiKey;
  return fetch(url).then((res) => res.json());
}
