import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledCardItemMovie = styled.li`
	display: block;
`;

export const StyledTitle = styled.p`
	${typography.S2}
	
`;
export const StyledLink = styled(Link)`
	${typography.S2}

	color: var(--txtColor);
	text-decoration: none;
`;
