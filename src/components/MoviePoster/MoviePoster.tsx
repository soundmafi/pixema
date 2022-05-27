import styled from 'styled-components';
import { media } from '../../ui/media';

interface IPoster {
	poster: string;
}

const MoviePoster = ({ poster }: IPoster) => {
	return <StyledPoster src={poster} alt="coma" />;
};

export default MoviePoster;

export const StyledPoster = styled.img`
	width: 266px;
	height: 357px;

	${media.TABLET} {
		width: 208px;
		height: 279px;
	}
	
	margin-bottom: 24px;

	border-radius: 10px;
	object-fit: cover;

	box-shadow: 0px 4px 26px 2px rgb(192, 192, 192, 0.2);
`;
