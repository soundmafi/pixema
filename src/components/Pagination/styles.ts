import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledContainer = styled.div`
	display: grid;
	width: 400px;
	grid-template-columns: 2fr 0.6fr 0.6fr 0.6fr 2fr 3fr;
	column-gap: 5px;
	margin-bottom: 20px;
	align-items: center;
`;

export const StyledButton = styled.button<{isActive:boolean}>`
	padding: 2px 5px;
	${typography.B1}
	border: 1px solid ${Colors.BG_GRAPHITE};
	border-radius: 10px;

	background-color: ${({isActive }) => {
		return isActive ? `${Colors.PRIMARY}` : `${Colors.CTX_WHITE}`;
	}};

`;
export const StyledButtonNav = styled.button<{isActive:boolean}>`
	padding: 2px 5px;
	${typography.B1}
	border: 1px solid ${Colors.BG_GRAPHITE};
	border-radius: 10px;

	background-color: ${({isActive }) => {
		return isActive ? `${Colors.CTX_WHITE}` : `#ababab`;
	}};
`;

export const StyledTotalPage = styled.p`
	text-align: center;
`;
