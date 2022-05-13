import MoviePoster from '../MoviePoster/MoviePoster';
import { StyledCardItemMovie, StyledTitle } from './styles';

interface IMovie {
	title: string;
	imdbID: string;
	Poster: string;
}

const CardItemMovie = ({ Poster, title }: IMovie) => {
	return (
		<StyledCardItemMovie>
			<MoviePoster Poster={Poster} />
			<StyledTitle>{title}</StyledTitle>
		</StyledCardItemMovie>
	);
};

export default CardItemMovie;
