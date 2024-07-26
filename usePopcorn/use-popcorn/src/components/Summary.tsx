import { Watched } from '../App';

interface SummaryProps {
  watched: Watched[];
}

export const Summary = (props: SummaryProps) => {
  const { watched } = props;
  const average = (arr: any) =>
    arr.reduce(
      (acc: number, cur: number, i: number, arr: any) => acc + cur / arr.length,
      0
    );
  const avgImdbRating = (average(watched.map((movie) => movie.imdbRating))).toFixed(1);
  const avgUserRating = (average(watched.map((movie) => movie.userRating))).toFixed(1);
  const avgRuntime =  Math.floor(average(watched.map((movie) => movie.runtime)));

    console.log(avgUserRating);

  return (
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
  );
};
