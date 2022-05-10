import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledMoviePage = styled.div`
	display: grid;
	grid-template-columns: 0.2fr 1fr;
	column-gap: 42px;
	grid-template-areas:
		'movieAside movieMain'
		'movieAside recommendation';
`;

export const StyledAsideMovie = styled.div`
	grid-area: movieAside;
`;

export const StyledMovieMain = styled.div`
	grid-area: movieMain;
`;

export const StyledRecommendation = styled.div``;

export const StyledGenre = styled.div`
	${typography.S1}
`;

export const StyledTitle = styled.h1`
	${typography.H1}
	margin-bottom: 24px;
`;

export const StyledBadge = styled.p`
	display: block;
	padding: 2px 8px;
	${typography.S3}
	background-color: ${Colors.bgGraphite};
	border-radius: 6px;
`;

export const ModifiedStyledBadge = styled(StyledBadge)`
	background-color: ${Colors.green};
`;

export const StyledBadgeContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: start;
	margin-bottom: 40px;
`;

export const StyledPlot = styled.p`
	margin-bottom: 40px;
`;

export const StyledInfoContainer = styled.div`
	display: grid;
	grid-template-columns: 0.2fr 1fr;
	grid-auto-rows: auto;
	row-gap: 20px;
	column-gap: 50px;
	margin-bottom: 56px;
`;

export const StyledAttribute = styled.p`
	${Colors.ctxLigth}
`;
export const StyledValue = styled.p``;

export const StyledButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 1px;
`;
export const StyledButtonFavorite = styled.button`
	padding: 12px;
	background-color: ${Colors.bgGraphite};
	border-radius: 10px 0 0 10px;
`;
export const StyledButtonShare = styled.button`
	padding: 12px;
	background-color: ${Colors.bgGraphite};
	border-radius: 0 10px 10px 0;
`;