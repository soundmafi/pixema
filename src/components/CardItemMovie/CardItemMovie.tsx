import MoviePoster from '../MoviePoster/MoviePoster';
import { StyledCardItemMovie, StyledLink, StyledTitle } from './styles';

interface IMovie {
	title: string;
	imdbID: string;
	poster: string;
}

const CardItemMovie = ({ poster, title, imdbID }: IMovie) => {
	return (
		<StyledCardItemMovie key={imdbID}>
			<StyledLink to={`/${imdbID}`} key={imdbID}>
				<MoviePoster poster={poster} />
				<StyledTitle>{title}</StyledTitle>
			</StyledLink>
		</StyledCardItemMovie>
	);
};

export default CardItemMovie;
