import { unionMovieData } from '../App';
import { tempMovieData } from '../data';

interface MovieProps {
  movies: unionMovieData[];
  onSelect: (id: string | null) => void;
}

export const MovieList = (props: MovieProps) => {
  const {onSelect} = props;
  let { movies } = props;

  if(movies === undefined) {
    movies = [...tempMovieData];
  }
  
  return (
    <ul className='list list-movies'>
      {movies.map((movie) => (
        <li key={movie.imdbID} onClick={() => onSelect(movie.imdbID)}>
          <img
            src={movie?.Poster}
            alt={`${movie?.Title} poster`}
          />
          <h3>{movie?.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie?.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
