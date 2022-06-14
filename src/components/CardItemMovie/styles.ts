import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';

export const StyledCardItemMovie = styled.li`
	display: block;
`;

export const StyledTitle = styled.p`
	${typography.S2}
	width: 266px;

	${media.TABLET} {
		width: 208px;
	}
	
`;
export const StyledLink = styled(Link)`
	${typography.S2}

	color: var(--txtColor);
	text-decoration: none;
`;
