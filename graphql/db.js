let movies = [
  {
    id: 0,
    name: "MOVIE 1",
    score: 1
  },
  {
    id: 1,
    name: "MOVIE 2",
    score: 77
  },
  {
    id: 2,
    name: "MOVIE 3",
    score: 52
  },
  {
    id: 3,
    name: "MOVIE 4",
    score: 91
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
