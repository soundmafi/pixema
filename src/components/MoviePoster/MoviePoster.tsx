import styled from 'styled-components';
import { media } from '../../ui/media';
import emptyCard from './../../assets/backgrounds/card-empty.jpg';

interface IPoster {
	poster: string;
	title: string;
}

const MoviePoster = ({ poster, title }: IPoster) => {
	let moviePoster = '';
	if (poster !== 'N/A') {
		moviePoster = poster;
	} else {
		moviePoster = emptyCard;
	}

	return <StyledPoster src={moviePoster} alt={title} />;
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
