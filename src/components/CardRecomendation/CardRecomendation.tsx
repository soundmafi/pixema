import { StyledCardItemMovie, StyledLink, StyledPoster, StyledTitle } from './styles';

interface IMovie {
	title: string;
	imdbID: string;
	poster: string;
}

const CardRecomendation = ({ poster, title, imdbID }: IMovie) => {
	return (
		<StyledCardItemMovie key={imdbID}>
			<StyledLink to={`/${imdbID}`} key={imdbID}>
				<StyledPoster src={poster} alt={title} />
				<StyledTitle>{title}</StyledTitle>
			</StyledLink>
		</StyledCardItemMovie>
	);
};

export default CardRecomendation;
