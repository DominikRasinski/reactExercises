import { useEffect, useState } from "react";
import { unionSelect } from "../App";
import { Stars } from "./stars/Stars";
import { Loader } from "./Loader";
import { ErrorMessage } from "./Error";

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
}

export const SelectedMovie = (props: SelectedMovieProps) => {
    const {movieId, onCloseMovie} = props;
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState<MovieDetails>();
    const [error, setError] = useState('');

    useEffect(() => {
        async function getMovieDetails(){
            try{
                setIsLoading(true);
                const res = await fetch(`https://www.omdbapi.com/?apikey=933a888b&i=${movieId}`);
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
    }, [movieId]);

    if(movieId === null) return null;

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
                            <Stars maxRating={10} size={30}/>
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