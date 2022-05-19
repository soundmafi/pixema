import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledFilter = styled.div<{ isDisable: boolean }>`
	position: absolute;
	top: 38px;
	right: 10px;

	display: ${({ isDisable }) => {
		return isDisable ? `grid` : `none`;
	}};

	grid-template-columns: 1fr;

	padding: 48px 40px;
	/* max-width: 518px; */

	border-radius: 10px;
	border: 1px solid ${Colors.CTX_LIGHT};
	background-color: ${Colors.BG_DARK};

	box-shadow: 0px 7px 11px 3px rgba(255, 255, 255, 0.48);
`;

export const StyledFilterForm = styled.form``;

export const StyledTitleFilter = styled.h2`
	margin-bottom: 15px;
	color: ${Colors.CTX_WHITE};
`;

export const StyledTitleParameters = styled.h3`
	margin-bottom: 8px;
	color: ${Colors.CTX_WHITE};
`;

export const StyledLine = styled.div`
	height: 3px;
	width: 100%;
	margin-bottom: 40px;

	background-color: ${Colors.BG_GRAPHITE};
`;

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 80px;

	background-color: ${Colors.BG_DARK};
`;

export const StyledButtonClose = styled.button`
	position: absolute;
	right: 30px;
	top: 25px;

	width: 20px;
	height: 20px;
	margin-left: 15px;

	background-color: ${Colors.BG_DARK};
`;

export const StyledClearFilter = styled.button`
	padding: 15px;

	color: ${Colors.CTX_WHITE};
	background-color: ${Colors.BG_GRAPHITE};

	border-radius: 10px;
`;

export const StyledShowResult = styled(StyledClearFilter)`
	color: ${Colors.CTX_WHITE};

	background-color: ${Colors.PRIMARY};
`;

export const StyledButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 40px;
`;

export const StyledSortingContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
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

export const StyledLabel = styled.label<{ htmlFor: string; typeMovie: string }>`
	padding: 10px 15px;

	${typography.S1}
	text-align: center;
	color: ${Colors.CTX_WHITE};

	background-color: ${({ htmlFor, typeMovie }) => {
		return htmlFor === typeMovie ? `${Colors.ORANGE}` : `${Colors.BG_DARK}`;
	}};

	transition: 0.3s;

	cursor: pointer;
`;
