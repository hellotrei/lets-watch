import React, { useEffect, useState } from 'react';
import { MovieThumb } from '../components/MovieThumb/MovieThumb';
import { MovieFormData, SearchBar } from '../components/SearchBar';
import { MovieItem, MoviesService } from '../services/MoviesService';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { likeMovie, unlikeMovie } from '../store/actions/moviesActions';
import { GridContainer } from '../../../shared/styles/GridContainer';
import Spinner from '../../../shared/components/Spinner/Spinner';
import env from "react-dotenv";

export const Home: React.FC = () => {
  const [movies, setMovies] = useState<Array<MovieItem>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<string>('0');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchType, setSearchType] = useState<string>('');

  const dispatch = useDispatch();
  const likedMovies = useSelector((state: any) => state.movies.likedMovies);

  const { t } = useTranslation(['movie']);

  const handleSearch = async ({ s, type }: MovieFormData) => {
    try {
      setSearchQuery(s || '');
      setSearchType(type?.value || '');

      const { data } = await MoviesService.getWithParams({
        s: s || '',
        type: type?.value || '',
        page: 1
      });

      setMovies(data.Search || []);
      setTotalResults(data.totalResults || '0');
      setPage(1);
    } catch (error) {
      throw new Error(String(error));
    }
  };

  const fetchMoreMovies = async () => {
    try {
      if (movies.length >= parseInt(totalResults, 10)) {
        return;
      }

      setIsLoading(true);
      const nextPage = page + 1;

      const { data } = await MoviesService.getWithParams({
        s: searchQuery,
        type: searchType,
        page: nextPage
      });

      setMovies((prevMovies) => [...prevMovies, ...(data.Search || [])]);
      setPage(nextPage);
    } catch (error) {
      throw new Error(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        !isFetchingMore &&
        movies.length < parseInt(totalResults, 10)
      ) {
        setIsFetchingMore(true);
        fetchMoreMovies().finally(() => setIsFetchingMore(false));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [movies, isFetchingMore, totalResults]);

  useEffect(() => {
    const performInitialSearch = async () => {
      const defaultSearchQuery = env.DEFAULT_SEARCH_QUERY;
      const defaultSearchParams: MovieFormData = {
        s: defaultSearchQuery,
        type: { value: 'movie', label: 'Movie' }
      };

      await handleSearch(defaultSearchParams);
    };

    performInitialSearch();
  }, []);

  const handleLikeMovie = (movie: MovieItem) => {
    dispatch(likeMovie(movie));
  };

  const handleUnlikeMovie = (movie: MovieItem) => {
    dispatch(unlikeMovie(movie));
  };

  const isLikedByUser = (movie: MovieItem) => {
    return likedMovies.find((m: MovieItem) => m.imdbID === movie.imdbID) ? true : false;
  };

  const handleLoadMore = () => {
    fetchMoreMovies();
  };

  return (
    <>
      <SearchBar onFormSubmit={handleSearch} />

      <GridContainer>
        {movies.length === 0 && !isLoading && <h1>{t('notFound')}</h1>}
        {movies &&
          movies.map((movie: MovieItem) => (
            <MovieThumb
              key={movie.imdbID}
              movie={movie}
              like={() => handleLikeMovie(movie)}
              unlike={() => handleUnlikeMovie(movie)}
              likedByUser={isLikedByUser(movie)}
            />
          ))}
        {movies.length < parseInt(totalResults, 10) && (
          <button onClick={handleLoadMore} disabled={isFetchingMore}>
            {isFetchingMore && <Spinner />}
          </button>
        )}
      </GridContainer>
    </>
  );
};
