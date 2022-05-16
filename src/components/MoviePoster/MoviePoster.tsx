import styled from "styled-components";

interface IPoster{
	poster: string;
}

const MoviePoster = ({poster}:IPoster) => {
	return (
        <StyledPoster src={poster} alt="coma"/>
	);
};

export default MoviePoster;

export const StyledPoster = styled.img`
	object-fit: cover;
	width: 266px;
	height: 357px;
	border-radius: 10px;
    margin-bottom: 24px;
`;