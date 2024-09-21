function createMovie(title, director, year, genres, isWatched) {
    return {
      title,
      director,
      year,
      genres,
      isWatched
    };
  }
  
  const furyMovie = createMovie("Ярость", "Дэвид Эйр", 2014, ["военный", "драма", "триллер"], true);
  console.log(furyMovie);