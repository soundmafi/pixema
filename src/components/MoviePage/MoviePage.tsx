import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { transformMovieDetails } from '../../services/mappers/movieDetails';
import { IMovieDetails } from '../../services/types';
import MoviePoster from '../MoviePoster/MoviePoster';
import { setFavorite, unsetFavorite } from '../../store/slices/favoritesReducer';
import { useSelector } from 'react-redux';
import {
	ModifiedStyledBadge,
	StyledAsideMovie,
	StyledAttribute,
	StyledBadge,
	StyledBadgeContainer,
	StyledButtonClose,
	StyledButtonFavorite,
	StyledButtonsContainer,
	StyledGenre,
	StyledInfoContainer,
	StyledMovieMain,
	StyledMoviePage,
	StyledPlot,
	StyledTitle,
	StyledValue,
} from './styles';
import { RootStore } from '../../store/store';
import { FavoriteIcon, RatingIMDB, BackIcon } from '../../assets/Icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getUser } from '../../store/selectors/userSelectors';
import {
	getMoviesDetailsResponse,
	getMoviesDetailsStatus,
} from '../../store/selectors/movieDetailsSelector';
import { fetchMovieDetails } from '../../store/slices/movieDetailReducer';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

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
		type: '',
	};

	const { favorites } = useSelector(({ favorites }: RootStore) => favorites);

	const dispatch = useAppDispatch();
	const { id } = useParams();
	const navigate = useNavigate();
	const { isAuth } = useAppSelector(getUser);
	const response = useAppSelector(getMoviesDetailsResponse);
	const responseStatus = useAppSelector(getMoviesDetailsStatus);
	const [movieID, setMovieID] = useState<IMovieDetails>(initialMovieDetail);

	const handleBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		if (id !== undefined) {
			dispatch(fetchMovieDetails(id));
		}
	}, [dispatch, id]);

	useEffect(() => {
		if (response.Response === 'True') {
			setMovieID(transformMovieDetails(response));
		}
	}, [response]);

	const isFavorite = favorites.filter(({ imdbID }) => imdbID === movieID.imdbID).length > 0;

	const handleMovie = () => {
		isFavorite
			? dispatch(unsetFavorite(movieID.imdbID))
			: dispatch(
					setFavorite({
						title: movieID.title,
						imdbID: movieID.imdbID,
						year: movieID.year,
						poster: movieID.poster,
						type: movieID.type,
					})
			  );
	};

	return (
		<StyledMoviePage>
			<StyledButtonClose onClick={handleBack}>
				<BackIcon />
			</StyledButtonClose>

			{responseStatus === 'loading' ? (
				<LoadingSpinner />
			) : (
				<>
					<StyledAsideMovie>
						<MoviePoster poster={movieID.poster} title={movieID.title} />
						{isAuth && (
							<StyledButtonsContainer>
								<StyledButtonFavorite isFavorite={isFavorite} onClick={handleMovie}>
									<FavoriteIcon />
								</StyledButtonFavorite>
							</StyledButtonsContainer>
						)}
					</StyledAsideMovie>
					<StyledMovieMain>
						<StyledGenre>{movieID.genre}</StyledGenre>
						<StyledTitle>{movieID.title}</StyledTitle>
						<StyledBadgeContainer>
							<ModifiedStyledBadge>{movieID.imdbRating}</ModifiedStyledBadge>
							<StyledBadge>
								<RatingIMDB />
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
				</>
			)}

		</StyledMoviePage>
	);
};

export default MoviePage;
