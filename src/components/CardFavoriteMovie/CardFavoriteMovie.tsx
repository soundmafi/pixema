import MoviePoster from '../MoviePoster/MoviePoster';
import { StyledButtonClose, StyledCardItemMovie, StyledTitle } from './styles';
import { ReactComponent as ButtonRemoveIcon } from './../../assets/Icons/icon-cancel.svg';
import { unsetFavorite } from '../../store/slices/favoritesReducer';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

interface IMovie {
	title: string;
	imdbID: string;
	poster: string;
}

export default function CardFavoriteMovie({ poster, title, imdbID }: IMovie) {
    const dispatch = useDispatch();
	const handleRemoveFavorite = () => {
		dispatch(unsetFavorite(imdbID));
	};
	return (
		<StyledCardItemMovie key={imdbID}>
			<Link to={`/${imdbID}`} key={imdbID}>
				<MoviePoster poster={poster} />
				<StyledTitle>{title}</StyledTitle>
			</Link>
            <StyledButtonClose onClick={handleRemoveFavorite}>
				<ButtonRemoveIcon />
			</StyledButtonClose>
		</StyledCardItemMovie>
	);
}
