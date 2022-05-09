import styled from "styled-components";

interface IPoster{
	Poster: string;
}

const MoviePoster = ({Poster}:IPoster) => {
	return (
        <StyledPoster src={Poster} alt="coma"/>
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