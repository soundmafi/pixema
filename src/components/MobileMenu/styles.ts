import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';

export const StyledMenuContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	width: 56px;
	height: 56px;
	margin-left: auto;
	${media.TABLET} {
		width: 38px;
		height: 38px;
		border-radius: 10px;
	}

	border-radius: 15px;
	background-color: ${Colors.PRIMARY};

	&:active {
		background-color: #8c7fd1;
	}
`;
