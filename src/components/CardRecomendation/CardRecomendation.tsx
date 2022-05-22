import styled from 'styled-components';
import MoviePoster from '../MoviePoster/MoviePoster';
import { StyledCardItemMovie, StyledLink, StyledTitle } from './styles';

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


export const StyledPoster = styled.img`
	width: 210px;
	height: 300px;

	margin-bottom: 24px;

	border-radius: 10px;
	object-fit: cover;

	/* box-shadow: 0px 3px 34px 6px rgba(176, 187, 195, 0.2); */

	box-shadow: 0px 4px 26px 2px rgb(192, 192, 192, 0.2);
`;
