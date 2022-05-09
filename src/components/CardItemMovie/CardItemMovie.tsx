import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';
import MoviePoster from '../MoviePoster/MoviePoster';

interface IMovie {
	Title: string;
	imdbID: string;
	Poster: string;
}

const CardItemMovie = ({ Poster, Title }: IMovie) => {
	return (
		<StyledCardItemMovie>
			<MoviePoster Poster={Poster}/>
			<StyledTitle>{Title}</StyledTitle>
		</StyledCardItemMovie>
	);
};

export default CardItemMovie;

export const StyledCardItemMovie = styled.li`
	display: block;
	width: 266px;
`;



export const StyledTitle = styled.p`
	${typography.S2}
	color: ${Colors.ctxWhite}
`;
