import MoviePoster from '../MoviePoster/MoviePoster';
import { StyledButtonClose, StyledCardItemMovie, StyledLink, StyledTitle } from './styles';
import { unsetFavorite } from '../../store/slices/favoritesReducer';
import { TrashIcon } from '../../assets/Icons';
import { useAppDispatch } from '../../store/hooks/hooks';

interface IMovie {
	title: string;
	imdbID: string;
	poster: string;
}

export default function CardFavoriteMovie({ poster, title, imdbID }: IMovie) {
	const dispatch = useAppDispatch();
	const handleRemoveFavorite = () => {
		dispatch(unsetFavorite(imdbID));
	};
	return (
		<StyledCardItemMovie key={imdbID}>
			<StyledLink to={`/${imdbID}`} key={imdbID}>
				<MoviePoster poster={poster} />
				<StyledTitle>{title}</StyledTitle>
			</StyledLink>
			<StyledButtonClose onClick={handleRemoveFavorite}>
				<TrashIcon viewBox="-150 -110 750 750" />
			</StyledButtonClose>
		</StyledCardItemMovie>
	);
}
