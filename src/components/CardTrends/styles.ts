import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';

export const StyledCardItemMovie = styled.li`
	display: block;
	padding: 10px 20px 0;
	width: 250px;
	${media.TABLET} {
		padding: 10px 10px 0;
		width: 250px;
	}
`;

export const StyledTitle = styled.p`
	${typography.S2}
`;

export const StyledLink = styled(Link)`
	${typography.S2}

	color: var(--txtColor);
	text-decoration: none;
`;

export const StyledPoster = styled.img`
	width: 230px;
	height: 340px;

	margin-bottom: 24px;

	border-radius: 10px;
	object-fit: cover;

	box-shadow: 0px 4px 26px 2px rgb(192, 192, 192, 0.2);

	${media.TABLET} {
		width: 175px;
		height: 250px;
	}
`;
