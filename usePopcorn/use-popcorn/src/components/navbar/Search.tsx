import { useEffect, useRef } from "react";

interface SearchProps {
  query: any;
  setQuery: (e: any) => void;
}

export const Search = (props: SearchProps) => {
  const { query, setQuery } = props;
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if(e.code === "Enter") {
        if(document.activeElement === inputEl.current) {
          return;
        }
        if (inputEl.current) {
          inputEl.current.focus();
          setQuery("");
        }
      }
    }

    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback)
  }, [setQuery]);

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};
