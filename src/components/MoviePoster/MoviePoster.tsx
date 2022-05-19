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

	box-shadow: 0px 3px 34px 6px rgba(176, 187, 195, 0.2);
`;
