import { useEffect, useState } from "react";
import { unionSelect } from "../App";
import { Stars } from "./stars/Stars";
import { Loader } from "./Loader";
import { ErrorMessage } from "./Error";
import { Watched } from "../App";
// type MovieDetails = Omit<Movie, "imdbID"> & {
//     Plot: string;
// };

type MovieDetails = {
    Title: string;
    Year: string;
    Poster: string;
    Plot: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Actors: string;
    Director: string;
    imdbRating: string;
}


interface SelectedMovieProps {
    movieId: unionSelect;
    onCloseMovie: () => void;
    onAddToFavorites: (movie: Watched) => void;
    watched: Watched[];
}

export const SelectedMovie = (props: SelectedMovieProps) => {
    const {movieId, onCloseMovie, onAddToFavorites, watched} = props;
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState<MovieDetails>();
    const [error, setError] = useState('');
    const [userRating, setUserRatting] = useState(0);
    let isWatched: any = [];
    let watchedUserRating: number | undefined = 0;

    if(movieId) {
        isWatched = watched.map((movie) => movie.imdbID).includes(movieId);
        watchedUserRating = watched.find(movie=>movie.imdbID === movieId)?.userRating;
    }

    console.log(isWatched)

    const handleUserRating = (rating: number) => {
        setUserRatting(rating);
    }


    useEffect(() => {
        const controller = new AbortController();
        async function getMovieDetails(){
            try{
                setIsLoading(true);
                const res = await fetch(`https://www.omdbapi.com/?apikey=933a888b&i=${movieId}`, {signal: controller.signal});
                if(!res.ok) {
                    throw new Error('Something went wrong when trying to fetch details about movie');
                }
                
                const data = await res.json();
                if(data.Response === 'False') {
                    throw new Error("Movie not found");
                }
                setMovie(() => data);
                setError('');
            } catch(err) {
                setError((err as Error).message)
            } finally {
                setIsLoading(false);
            }
        }

        if(movieId) {
            getMovieDetails();
        }

        return () => {
            controller.abort();
        }

    }, [movieId]);

    if(movieId === null) return null;

    const addToFavorites = (movie: any) => {
        const newWatchedMovie = {
            imdbID: movieId,
            Title: movie.Title,
            Year: movie.Year,
            Poster: movie.Poster,
            imdbRating: Number(movie.imdbRating),
            runtime: Number(movie.Runtime.split(" ").at(0)),
            userRating: userRating,
        }
        onAddToFavorites(newWatchedMovie);
        onCloseMovie();
    }
    console.log(userRating)

    return (
        <div className="details">
            {error !== '' ? <ErrorMessage message={error} /> : 
                isLoading ? <Loader /> : 
                <>
                    <header>
                        <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
                        <img src={movie?.Poster} alt={`Poster of ${movie?.Title}`} />
                        <div className="details-overview">
                            <h2>{movie?.Title}</h2>
                            <p>{movie?.Released} &bull; {movie?.Runtime}</p>
                            <p>{movie?.Genre}</p>
                            <p><span>⭐</span>{movie?.imdbRating} IMDb rating</p>
                        </div>
                    </header>

                    <section>
                        <div className="rating">

                            {!isWatched ? (
                                <>
                                    <Stars maxRating={10} size={30} onSetRating={handleUserRating}/>
                                    {movie && userRating > 0 &&
                                        <button className="btn-add" onClick={() => addToFavorites(movie)}>+ Add to list</button>}
                                </>
                            ) : (<p>You rated that movie {watchedUserRating}<span>⭐</span></p>)}

                        </div>
                        <p>
                            <em>{movie?.Plot}</em>
                        </p>
                        <p>Starring {movie?.Actors}</p>
                        <p>Directed by {movie?.Director}</p>
                    </section>
                </>
            
            }
        </div>
    )
}