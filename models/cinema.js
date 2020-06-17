const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.checkByYear = function (year) {
  return this.films.some(film => film.year === year);
};

Cinema.prototype.moreThanLength = function (length) {
  return this.films.every(film => film.length >= length);
};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce( (totalTime, film) => totalTime + film.length, 0);
};

Cinema.prototype.filmsByProperty = function (propertyName, propertyValue) {
  return this.films.filter(film => film[propertyName] === propertyValue);
};


module.exports = Cinema;
