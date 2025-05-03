import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://localhost:3000/data/json/BooksData.json";

export function getBooks() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
