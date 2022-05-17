import styled from 'styled-components';

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

	margin-bottom: 24px;

	border-radius: 10px;
	object-fit: cover;
`;
