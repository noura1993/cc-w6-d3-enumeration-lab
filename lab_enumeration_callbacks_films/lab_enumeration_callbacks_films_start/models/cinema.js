const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titles = function () {
  return this.films.map(film => film.title);
}

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);
}

Cinema.prototype.filterByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.checkByYear = function (year) {
  return this.films.some(film => film.year === year);
}



module.exports = Cinema;
