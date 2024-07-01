interface SearchProps {
  query: any;
  setQuery: (e: any) => void;
}

export const Search = (props: SearchProps) => {
  const { query, setQuery } = props;
  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};
