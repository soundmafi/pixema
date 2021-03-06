import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';
import { ButtonCloseIcon } from '../ButtonClose/ButtonCloseIcon';

export const StyledFilter = styled.div<{ isDisable: boolean }>`
	position: absolute;
	z-index: 100;
	top: ${({ isDisable }) => {
		return isDisable ? `38px` : `-600px`;
	}};
	right: 0px;

	grid-template-columns: 1fr;

	padding: 48px 40px;

	border-radius: 10px;
	border: 1px solid ${Colors.CTX_LIGHT};
	background-color: ${Colors.BG_DARK};

	box-shadow: 0px 7px 11px 3px rgba(255, 255, 255, 0.48);

	transition: top 0.3s ease-in-out;

	${media.TABLET}{
		padding: 15px;
	}
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
	position: relative;
	z-index: 100;
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

	${media.TABLET}{
		right: 20px;
	top: 15px;
	width: 15px;
	height: 15px;
	}
`;

export const CloseIcon =styled(ButtonCloseIcon)`
	width : 10px;
`

export const StyledClearFilter = styled.button`
	padding: 15px;

	color: ${Colors.CTX_WHITE};
	background-color: ${Colors.BG_GRAPHITE};

	border-radius: 10px;
	transition: 0.2s;

	&:hover {
		background-color: #4b4e50;
	}
	&:active {
		background-color: #2e2f30;
		box-shadow: rgb(255 255 255 / 42%) 0px 0px 6px 2px, rgb(255 255 255 / 5%) 0px 2px 4px -1px;
	}

	${media.MOBILE}{
		padding: 10px 7px;
		border-radius: 6px;
	}

`;

export const StyledShowResult = styled(StyledClearFilter)`
	color: ${Colors.CTX_WHITE};

	background-color: ${Colors.PRIMARY};

	&:hover {
		background-color: #9685ed;
	}
	&:active {
		background-color: #423295;
		box-shadow: rgb(255 255 255 / 42%) 0px 0px 6px 2px, rgb(255 255 255 / 5%) 0px 2px 4px -1px;
	}
`;

export const StyledButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 40px;
	${media.MOBILE}{
		column-gap: 10px;

	}
`;

export const StyledSortingContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 5px;

	margin-bottom: 32px;
	${media.MOBILE}{
		margin-bottom: 25px;

	}

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

	${media.MOBILE}{
		padding: 10px 5px;

	}
`;
