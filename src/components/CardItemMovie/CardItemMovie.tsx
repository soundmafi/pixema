
import MoviePoster from '../MoviePoster/MoviePoster';
import { StyledCardItemMovie, StyledTitle } from './styles';

interface IMovie {
	title: string;
	imdbID: string;
	poster: string;
}

const CardItemMovie = ({ poster, title, imdbID }: IMovie) => {
	return (
		<StyledCardItemMovie key={imdbID}>
			<MoviePoster poster={poster} />
			<StyledTitle>{title}</StyledTitle>
		</StyledCardItemMovie>
	);
};

export default CardItemMovie;
