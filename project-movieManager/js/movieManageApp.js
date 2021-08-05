"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("./movie");
var movie1 = new movie_1.Movie(1, "A New Hope", 1977, "PG-13", "George Lucus");
var movie2 = new movie_1.Movie(2, "Empire Strikes Back", 1980, "PG-13", "George Lucus");
var movie3 = new movie_1.Movie(3, "Return of the Jedi", 1983, "PG-13", "George Lucus");
var movies = [movie1, movie2, movie3];
movies.push(new movie_1.Movie(4, "Inception", 2010, "R", "Christopher Nolan"));
console.log("\nList of Movies:");
movies.forEach(function (m) {
    console.log("ID: " + m.id + " | Title: " + m.title + " | Year: " + m.year + " | Rating: " + m.rating + " | Director: " + m.direcrtor);
});
console.log("\nEnd Application\n");
