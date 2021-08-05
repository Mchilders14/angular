import { Movie } from "./movie";

let movie1: Movie = new Movie(1, "A New Hope", 1977, "PG-13", "George Lucus");
let movie2: Movie = new Movie(2, "Empire Strikes Back", 1980, "PG-13", "George Lucus");
let movie3: Movie = new Movie(3, "Return of the Jedi", 1983, "PG-13", "George Lucus");

let movies:Movie[] = [movie1, movie2, movie3];

movies.push(new Movie(4, "Inception", 2010, "R", "Christopher Nolan"))

console.log("\nList of Movies:");

movies.forEach(m => {
    console.log(`ID: ${m.id} | Title: ${m.title} | Year: ${m.year} | Rating: ${m.rating} | Director: ${m.direcrtor}`)
});

console.log("\nEnd Application\n");
