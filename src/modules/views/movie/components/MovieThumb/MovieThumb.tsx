import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MoviesRoutePaths } from '../../config/routes';
import { MovieItem } from '../../services/MoviesService';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/components/Button/Button';
import { Colors } from '../../../../shared/styles/Colors';

const imagePlaceholderUri = 'http://placehold.it/974x548';

type MovieThumbProps = {
  movie: MovieItem;
  likedByUser: boolean;
  like?: () => void;
  unlike?: () => void;
};

const InfoWrapper = styled.div`
  width: 250px;
  height: 80px;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.black};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  color: white;
  padding: 10px;
  opacity: 0.8;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  a {
    color: ${Colors.white};
  }
`;

const MobieThumbWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  border: black solid 1px;
  margin: 20px 15px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover ${InfoWrapper} {
    transform: translateY(0);
  }
`;

const MoviePic = styled.img`
  width: 250px;
  height: 250px;
`;

export const MovieThumb: React.FC<MovieThumbProps> = ({
  movie,
  likedByUser,
  like,
  unlike,
}) => {
  const [isLikedByUser, setLiked] = useState(likedByUser);
  const { t } = useTranslation(['movie']);

  const handleLikeButtonClick = () => {
    if (isLikedByUser) {
      unlike && unlike();
    } else {
      like && like();
    }

    setLiked(!isLikedByUser);
  };

  return (
    <MobieThumbWrapper>
      <MoviePic src={movie.Poster || imagePlaceholderUri} alt={`${movie.Title} pic`} />
      <InfoWrapper>
        <h3>
          <Link to={`${MoviesRoutePaths.Movie}/${movie.imdbID}`}>{movie.Title.substring(0, 20)}</Link>
        </h3>
        <Button
          label={isLikedByUser ? t('unlike') : t('like')}
          onClick={handleLikeButtonClick}
        />
      </InfoWrapper>
    </MobieThumbWrapper>
  );
};
