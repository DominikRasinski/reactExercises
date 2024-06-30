import { Movie } from '../App';

interface NavbarProps {
  movies: Movie[];
  setQuery: (e: any) => void;
  query: any;
}

export const Navbar = (props: NavbarProps) => {
  const { setQuery, query, movies } = props;

  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <span role='img'>🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className='search'
        type='text'
        placeholder='Search movies...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className='num-results'>
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
};
