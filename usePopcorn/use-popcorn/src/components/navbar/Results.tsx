import { Movie, unionMovieData } from '../../App';
interface ResultsProps {
  movies: unionMovieData[];
}

export const Results = (props: ResultsProps) => {
  const { movies } = props;
  return (
    <p className='num-results'>
      Found <strong>{movies ? movies.length : 0}</strong> results
    </p>
  );
};
