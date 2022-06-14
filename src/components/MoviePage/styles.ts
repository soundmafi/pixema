import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';
import { media } from '../../ui/media';
import Recommendations from '../Recommendations/Recommendations';

export const StyledMoviePage = styled.div`
	grid-area: outlet;
	position: relative;
	display: grid;
	justify-content: center;
	column-gap: 42px;
	grid-template-areas:
		'movieAside movieMain'
		'recommendation recommendation';
	${media.TABLET} {
		grid-template-areas:
			'movieAside movieMain'
			'recommendation recommendation';
	}
	@media (max-width: 600px) {
		grid-template-areas:
			'movieAside'
			'movieMain'
			'recommendation';
	}
`;

export const StyledAsideMovie = styled.div`
	grid-area: movieAside;
	margin: 0 auto;
`;

export const StyledMovieMain = styled.div`
	grid-area: movieMain;
	/* @media (max-width:600px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	} */
`;

export const StyledRecommendation = styled.div``;

export const StyledGenre = styled.div`
	${typography.S1}
	@media (max-width:600px) {
		display: flex;
		justify-content: center;
	}
`;

export const StyledTitle = styled.h1`
	margin-bottom: 24px;

	${typography.H1}
	@media (max-width:600px) {
		display: flex;
		justify-content: center;
	}
`;

export const StyledBadge = styled.p`
	display: block;

	padding: 2px 8px;

	${typography.S3}

	color: var(--txtColor);
	background-color: ${Colors.BG_GRAPHITE};
	border-radius: 6px;
	@media (max-width:600px) {
		margin: 0 auto;
	}
	
`;

export const ModifiedStyledBadge = styled(StyledBadge)`
	background-color: ${Colors.GREEN};
`;

export const StyledBadgeContainer = styled.div`
	margin-bottom: 40px;

	display: flex;
	gap: 20px;
	justify-content: start;
`;

export const StyledPlot = styled.p`
	display: block;
	overflow: hidden;
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
	${Colors.CTX_LIGHT}
`;
export const StyledValue = styled.p``;

export const StyledButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	column-gap: 1px;
`;
export const StyledButtonFavorite = styled.button<{ isFavorite: boolean }>`
	padding: 12px;

	background-color: ${({ isFavorite }) => {
		return isFavorite ? `${Colors.ORANGE}` : `${Colors.BG_GRAPHITE}`;
	}};
	border-radius: 10px;

	&:hover {
		background-color: #2c3439;
		background-color: ${({ isFavorite }) => {
			return isFavorite ? `${Colors.ORANGE}` : `#2c3439`;
		}};
	}
	&:active {
		background-color: #374d54;
		background-color: ${({ isFavorite }) => {
			return isFavorite ? `${Colors.ORANGE}` : `${Colors.BG_GRAPHITE}`;
		}};
	}
`;
export const StyledButtonShare = styled.button`
	padding: 12px;

	background-color: ${Colors.BG_GRAPHITE};
	border-radius: 0 10px 10px 0;
`;

export const StyledButtonClose = styled.button`
	position: absolute;
	left: 0px;
	top: -30px;

	width: 25px;
	height: 25px;

	background-color: ${Colors.BG_DARK};
	@media (max-width: 600px) {
		top: -10px;
	}
`;

export const StyledRecommendations = styled(Recommendations)`
	background-color: aliceblue;
`;
