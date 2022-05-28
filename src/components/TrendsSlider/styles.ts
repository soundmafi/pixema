import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledCardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 15px;
	overflow: hidden;
`;
export const StyledCardItemMovie = styled.div`
	display: block;
`;

export const StyledTitle = styled.p`
	${typography.S2}
`;
export const StyledLink = styled(Link)`

	${typography.S2}

	color: ${Colors.CTX_WHITE};
	text-decoration: none;
`;

export const StyledRecommendation = styled.div`
	grid-area: outlet;
	margin-bottom: 50px;
`;

export const StyledTitleRecommendation = styled.h2`
	${typography.H2}
	margin-bottom: 40px;
`;
