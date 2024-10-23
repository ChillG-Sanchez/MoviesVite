class Movie {
  title: string;
  duration: number;
  genres: string[];

  constructor(title: string, duration: number, genres: string[]) {
    this.title = title;
    this.duration = duration;
    this.genres = genres;
  }
}

const movies: Movie[] = [
  new Movie("Inception", 148, ["Sci-Fi", "Thriller"]),
  new Movie("The Matrix", 136, ["Action", "Sci-Fi"]),
  new Movie("Interstellar", 169, ["Adventure", "Drama", "Sci-Fi"])
];

function displayMovies(movies: Movie[]) {
  const tableBody = document.getElementById("moviesTableBody");
  if (tableBody) {
    tableBody.innerHTML = "";
    movies.forEach(movie => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${movie.title}</td>
        <td>${movie.duration}</td>
        <td>${movie.genres.join(", ")}</td>
      `;
      tableBody.appendChild(row);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayMovies(movies);

  const form = document.getElementById("movie-form") as HTMLFormElement;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const duration = parseInt((document.getElementById("duration") as HTMLInputElement).value);
    const genres = (document.getElementById("genres") as HTMLInputElement).value.split(",").map(genre => genre.trim());
    const newMovie = new Movie(title, duration, genres);
    movies.push(newMovie);
    displayMovies(movies);
    form.reset();
  });
});

// kivételkezelés
// utólagos szerkesztés a táblázatban, törlés, módosítás
// keresés a táblázatban
// rendezés a táblázatban
