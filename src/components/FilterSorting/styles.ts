import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledSortingContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 5px;

	margin-bottom: 32px;

	overflow: hidden;
	border-radius: 10px;
	border: 3px solid ${Colors.BG_GRAPHITE};
	box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 6px -1px,
		rgba(255, 255, 255, 0.06) 0px 2px 4px -1px;
	
`;

export const StyledTitle = styled.p`
	${typography.S3}
`;
export const StyledInput = styled.input`
	display: none;
`;

export const StyledLabel = styled.label<{ htmlFor: string; typeSort: string }>`
	padding: 15px 14px;

	${typography.S1}
	text-align: center;
	color: ${Colors.CTX_WHITE};
	
	background-color: ${({ htmlFor, typeSort }) => {
		return htmlFor === typeSort ? `${Colors.ORANGE}` : `${Colors.BG_DARK}`;
	}};

	transition: 0.3s;

	cursor: pointer;
`;
