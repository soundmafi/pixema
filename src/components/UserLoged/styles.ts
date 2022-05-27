import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';

export const StyledUserLogged = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	cursor: pointer;
	
	${media.TABLET} {
		margin-bottom: 15px;
	}
`;
export const StyledBadge = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 56px;
	height: 56px;

	${typography.H3}

	background-color: ${Colors.PRIMARY};
	border-radius: 10px;
	color: ${Colors.CTX_WHITE};
`;

export const StyledUsername = styled.p`
	${typography.S3}
`;

export const StyledOpenIcon = styled.div``;

export const StyledLink = styled(Link)`
	${typography.S2}

	color: ${Colors.CTX_WHITE};
	text-decoration: none;
`;
