import { Movie, Watched } from '../App';
import { MovieList } from './MovieList';
import { WatchedList } from './WatchedList';
import { Summary } from './Summary';

interface MainProps {
  movies: Movie[];
  watched: Watched[];
  setIsOpen1: (open: any) => void;
  setIsOpen2: (open: any) => void;
  isOpen1: boolean;
  isOpen2: boolean;
}

export const Main = (props: MainProps) => {
  const { movies, watched, setIsOpen1, setIsOpen2, isOpen1, isOpen2 } = props;

  return (
    <main className='main'>
      <div className='box'>
        <button
          className='btn-toggle'
          onClick={() => setIsOpen1((open: boolean) => !open)}>
          {isOpen1 ? '–' : '+'}
        </button>
        {isOpen1 && <MovieList movies={movies} />}
      </div>

      <div className='box'>
        <button
          className='btn-toggle'
          onClick={() => setIsOpen2((open: boolean) => !open)}>
          {isOpen2 ? '–' : '+'}
        </button>
        {isOpen2 && (
          <>
            <Summary watched={watched} />
            <WatchedList watched={watched} />
          </>
        )}
      </div>
    </main>
  );
};
