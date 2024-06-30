import { Movie, Watched } from '../App';

interface MainProps {
  movies: Movie[];
  watched: Watched[];
  setIsOpen1: (open: any) => void;
  setIsOpen2: (open: any) => void;
  isOpen1: boolean;
  isOpen2: boolean;
  avgImdbRating: any;
  avgUserRating: any;
  avgRuntime: any;
}

export const Main = (props: MainProps) => {
  const {
    movies,
    watched,
    setIsOpen1,
    setIsOpen2,
    isOpen1,
    isOpen2,
    avgImdbRating,
    avgUserRating,
    avgRuntime,
  } = props;

  return (
    <main className='main'>
      <div className='box'>
        <button
          className='btn-toggle'
          onClick={() => setIsOpen1((open: boolean) => !open)}>
          {isOpen1 ? '–' : '+'}
        </button>
        {isOpen1 && (
          <ul className='list'>
            {movies?.map((movie) => (
              <li key={movie.imdbID}>
                <img
                  src={movie.Poster}
                  alt={`${movie.Title} poster`}
                />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='box'>
        <button
          className='btn-toggle'
          onClick={() => setIsOpen2((open: boolean) => !open)}>
          {isOpen2 ? '–' : '+'}
        </button>
        {isOpen2 && (
          <>
            <div className='summary'>
              <h2>Movies you watched</h2>
              <div>
                <p>
                  <span>#️⃣</span>
                  <span>{watched.length} movies</span>
                </p>
                <p>
                  <span>⭐️</span>
                  <span>{avgImdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{avgUserRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{avgRuntime} min</span>
                </p>
              </div>
            </div>

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
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
};
