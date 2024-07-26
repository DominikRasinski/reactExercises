import { Watched } from '../App';

interface MovieListProps {
  watched: Watched[];
  onRemoveWatch: (id: string) => void;
}

export const WatchedList = (props: MovieListProps) => {
  const { watched, onRemoveWatch } = props;
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.runtime} min</span>
            </p>
            <button className='btn-delete' onClick={() => onRemoveWatch(movie.imdbID)}>X</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
