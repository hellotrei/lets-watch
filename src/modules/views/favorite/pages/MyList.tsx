import React from 'react';
import { MovieThumb } from '../../../views/movie/components/MovieThumb/MovieThumb';
import { GridContainer } from '../../../shared/styles/GridContainer';
import { useDispatch, useSelector } from "react-redux";
import { unlikeMovie } from '../../movie/store/actions/moviesActions';
import { MovieItem } from '../../movie/services/MoviesService';
import { useTranslation } from 'react-i18next';

export const MyList: React.FC = () => {
    const { t } = useTranslation(['favorite']);
    const dispatch = useDispatch();
    const likedMovies = useSelector((state: any) => state.movies.likedMovies);

    const handleUnlikeMovie = (movie: MovieItem) => {
        dispatch(unlikeMovie(movie));
    };

    return (
        <GridContainer>
            {likedMovies.length === 0 && <h2>{t('thereIsNoListFavorite')}</h2>}
            {likedMovies.map((movie: MovieItem) => (
                <MovieThumb
                    key={movie.imdbID}
                    movie={movie}
                    unlike={() => handleUnlikeMovie(movie)}
                    likedByUser={true}
                />
            ))}
        </GridContainer>
    );
};
