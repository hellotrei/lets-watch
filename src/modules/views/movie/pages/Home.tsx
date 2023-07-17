import React, { useState } from 'react';
import { MovieThumb } from '../components/MovieThumb/MovieThumb';
import { MovieFormData, SearchBar } from '../components/SearchBar';
import { MovieItem, MoviesService } from '../services/MoviesService';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { likeMovie, unlikeMovie } from '../store/actions/moviesActions';
import { GridContainer } from '../../../shared/styles/GridContainer';

export const Home: React.FC = () => {
    const [movies, setMovies] = useState<Array<MovieItem>>([]);
    const dispatch = useDispatch();
    const likedMovies = useSelector((state: any) => state.movies.likedMovies);

    const { t } = useTranslation(['movie']);

    const handleSearch = async ({ s, type }: MovieFormData) => {
        try {
            const { data } = await MoviesService.getWithParams({
                s,
                type: type?.value,
            });

            setMovies(data.Search);
        } catch (error) {
            throw new Error(String(error));
        }
    };

    const handleLikeMovie = (movie: MovieItem) => {
        dispatch(likeMovie(movie));
    };

    const handleUnlikeMovie = (movie: MovieItem) => {
        dispatch(unlikeMovie(movie));
    };

    const isLikedByUser = (movie: MovieItem) => {
        return likedMovies.find((m: MovieItem) => m.imdbID === movie.imdbID) ? true : false;
    };


    return (
        <>
            <SearchBar onFormSubmit={handleSearch} />

            <GridContainer>
                {movies ? (
                    movies.map((movie: MovieItem) => (
                        <MovieThumb
                            key={movie.imdbID}
                            movie={movie}
                            like={() => handleLikeMovie(movie)}
                            unlike={() => handleUnlikeMovie(movie)}
                            likedByUser={isLikedByUser(movie)}
                        />
                    ))
                ) : (
                    <h1>{t('notFound')}</h1>
                )}
            </GridContainer>
        </>
    );
};
