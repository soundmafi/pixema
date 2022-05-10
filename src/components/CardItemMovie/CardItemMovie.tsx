import MoviePoster from '../MoviePoster/MoviePoster';
import { StyledCardItemMovie, StyledTitle } from './styles';

interface IMovie {
	Title: string;
	imdbID: string;
	Poster: string;
}

const CardItemMovie = ({ Poster, Title }: IMovie) => {
	return (
		<StyledCardItemMovie>
			<MoviePoster Poster={Poster} />
			<StyledTitle>{Title}</StyledTitle>
		</StyledCardItemMovie>
	);
};

export default CardItemMovie;
