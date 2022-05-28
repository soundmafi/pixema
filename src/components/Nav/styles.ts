import { Link} from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';

export const StyledNav = styled.nav`
	display: grid;
	grid-row-gap: 40px;

	${media.TABLET} {
		grid-row-gap: 10px;
	}
`;

export const StyledText = styled.p`
	${typography.S2}
	margin-left: 10px;
`;

export const StyledLink = styled(Link)<{ isactive: boolean }>`
	display: flex;
	align-items: center;

	padding: 5px 45px 5px 10px;
	width: 100%;

	color: ${Colors.CTX_WHITE};
	text-decoration: none;

	border: ${({ isactive }) => {
		return isactive ? `2px solid ${Colors.PRIMARY}` : `2px solid ${Colors.BG_GRAPHITE}`;
	}};
	border-radius: 10px;

	transition: 0.3s;

	&:hover {
		background-color: #353535;
		box-shadow: 0px 2px 9px 0px rgb(192, 192, 192, 0.17);
	}

	&:active {
		box-shadow: 0px 2px 10px 2px rgb(192, 192, 192, 0.2);
		background-color:  #353535;
	}
`;
