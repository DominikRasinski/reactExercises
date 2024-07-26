import { Movie } from '../../App';
interface ResultsProps {
  movies: Movie[];
}

export const Results = (props: ResultsProps) => {
  const { movies } = props;
  return (
    <p className='num-results'>
      Found <strong>{movies ? movies.length : 0}</strong> results
    </p>
  );
};
