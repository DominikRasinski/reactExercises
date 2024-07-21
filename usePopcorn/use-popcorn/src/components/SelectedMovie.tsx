import { useEffect, useState } from "react";
import { unionSelect } from "../App";
import { Movie } from "../App";

type MovieDetails = Omit<Movie, "imdbID">;

interface SelectedMovieProps {
    movieId: unionSelect;
    onCloseMovie: () => void;
}

export const SelectedMovie = (props: SelectedMovieProps) => {
    const {movieId, onCloseMovie} = props;
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState<MovieDetails>();

    useEffect(() => function(){
        async function getMovieDetails(){
            try{
                setIsLoading(true);
                const res = await fetch(`https://www.omdbapi.com/?apikey=933a888b&i=${movieId}`);
                if(!res.ok) {
                    throw new Error('Something went wrong when trying to fetch details about movie');
                }
                const data = await res.json();
                setMovie(data);
                console.log(data)
            } catch(err) {

            }
            setIsLoading(false);
        }
        getMovieDetails();
    }, [])

    if(movieId === null) return null;

    return (
        <div className="details">
            <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
            {movieId}
        </div>
    )
}