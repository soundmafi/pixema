import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { transformMovieDetails } from '../../services/mappers/movieDetails';
import { movieApi } from '../../services/movieApi';
import { IMovieDetails } from '../../services/types';
import { ButtonCloseIcon } from '../ButtonClose/ButtonCloseIcon';
import MoviePoster from '../MoviePoster/MoviePoster';
import Recommendations from '../Recommendations/Recommendations';
import { ReactComponent as FavoriteIcon } from './../../assets/Icons/nav-favorites.svg';
import { ReactComponent as ShareIcon } from './../../assets/Icons/icon-share.svg';
import { ReactComponent as BadgeIcon } from './../../assets/Icons/imdb-rating.svg';

import {
	ModifiedStyledBadge,
	StyledAsideMovie,
	StyledAttribute,
	StyledBadge,
	StyledBadgeContainer,
	StyledButtonClose,
	StyledButtonFavorite,
	StyledButtonsContainer,
	StyledButtonShare,
	StyledGenre,
	StyledInfoContainer,
	StyledMovieMain,
	StyledMoviePage,
	StyledPlot,
	StyledTitle,
	StyledValue,
} from './styles';

const MoviePage = () => {
	const initialMovieDetail: IMovieDetails = {
		title: '',
		year: '',
		released: '',
		runtime: '',
		genre: '',
		director: '',
		writer: '',
		actors: '',
		plot: '',
		country: '',
		poster: '',
		ratings: [],
		imdbRating: '',
		imdbID: '',
		boxOffice: '',
		production: '',
		response: true,
	};

	const [movieID, setMovieID] = useState<IMovieDetails>(initialMovieDetail);
	const { id } = useParams();
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		movieApi.getMovieDetails(id).then((movie) => setMovieID(transformMovieDetails(movie)));
	}, [id]);

	return (
		<StyledMoviePage>
			<StyledButtonClose onClick={handleBack}>
				<ButtonCloseIcon />
			</StyledButtonClose>

			<StyledAsideMovie>
				<MoviePoster poster={movieID.poster} />
				<StyledButtonsContainer>
					<StyledButtonFavorite>
						<FavoriteIcon />
					</StyledButtonFavorite>
					<StyledButtonShare>
						<ShareIcon />
					</StyledButtonShare>
				</StyledButtonsContainer>
			</StyledAsideMovie>
			<StyledMovieMain>
				<StyledGenre>{movieID.genre}</StyledGenre>
				<StyledTitle>{movieID.title}</StyledTitle>
				<StyledBadgeContainer>
					<ModifiedStyledBadge>{movieID.imdbRating}</ModifiedStyledBadge>
					<StyledBadge>
						<BadgeIcon />
						{movieID.imdbRating}
					</StyledBadge>
					<StyledBadge>{movieID.runtime}</StyledBadge>
				</StyledBadgeContainer>

				<StyledPlot>{movieID.plot}</StyledPlot>

				<StyledInfoContainer>
					<StyledAttribute>Year</StyledAttribute>
					<StyledValue>{movieID.year}</StyledValue>
					<StyledAttribute>Released</StyledAttribute>
					<StyledValue>{movieID.released}</StyledValue>
					<StyledAttribute>BoxOffice</StyledAttribute>
					<StyledValue>{movieID.boxOffice}</StyledValue>
					<StyledAttribute>Country</StyledAttribute>
					<StyledValue>{movieID.country}</StyledValue>
					<StyledAttribute>Production</StyledAttribute>
					<StyledValue>{movieID.production}</StyledValue>
					<StyledAttribute>Actors</StyledAttribute>
					<StyledValue>{movieID.actors}</StyledValue>
					<StyledAttribute>Director</StyledAttribute>
					<StyledValue>{movieID.director}</StyledValue>
					<StyledAttribute>Writer</StyledAttribute>
					<StyledValue>{movieID.writer}</StyledValue>
				</StyledInfoContainer>
			</StyledMovieMain>
			<Recommendations />
		</StyledMoviePage>
	);
};

export default MoviePage;
