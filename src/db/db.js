export default async function getMovies() {
  return fetch("http://localhost:5000/api/movies").then((res) => res.json());
}
