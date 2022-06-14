import styled from 'styled-components';
import { NextPageIcon } from '../../assets/Icons';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';
import { typography } from '../../ui/typography';

export const StyledContainer = styled.div`
	display: grid;
	width: 400px;
	grid-template-columns: 2fr 0.6fr 0.6fr 0.6fr 2fr 3fr;
	column-gap: 5px;
	margin-bottom: 20px;
	align-items: center;

	${media.TABLET} {
		width: 270px;
		grid-template-columns: 0.6fr 0.6fr 0.6fr 0.6fr 0.6fr 2fr;
	}

	${media.MOBILE} {
		width: 250px;
		grid-template-columns: 0.6fr 0.6fr 0.6fr 0.6fr 0.6fr 2fr;
		column-gap: 5px;

	}
`;

export const StyledButton = styled.button<{ isActive: boolean }>`
	padding: 2px 5px;
	${typography.B1}
	border: 1px solid ${Colors.BG_GRAPHITE};
	border-radius: 10px;

	background-color: ${({ isActive }) => {
		return isActive ? `${Colors.PRIMARY}` : `${Colors.CTX_WHITE}`;
	}};

${media.MOBILE} {
	padding: 0px;
	border-radius: 8px;

	}
`;
export const StyledButtonNav = styled.button<{ isActive: boolean }>`
	padding: 2px 5px;
	${typography.B1}
	border: 1px solid ${Colors.BG_GRAPHITE};
	border-radius: 10px;

	${media.TABLET} {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 26px;
	}

	${media.MOBILE} {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 23px;
		padding: 0px;
	}

	background-color: ${({ isActive }) => {
		return isActive ? `${Colors.CTX_WHITE}` : `#ababab`;
	}};

	transition: 0.2s;

	&:hover {
		background-color: ${({ isActive }) => {
			return isActive ? `#9685ed` : `#ababab`;
		}};
	}
	&:active {
		background-color: ${({ isActive }) => {
			return isActive ? `#8f60e1` : `#ababab`;
		}};
	}
`;

export const StyledTotalPage = styled.p`
	text-align: left;
`;

export const NextPage = styled(NextPageIcon)``;
export const PreviousPage = styled(NextPageIcon)`
	transform: rotate(180deg);
`;
