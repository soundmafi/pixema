import styled from 'styled-components';
import { Colors } from '../../ui/colors';

export const StyledMenuContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 56px;
	height: 56px;

	border-radius: 15px;
	background-color: ${Colors.PRIMARY};

    &:active {
		background-color: #8c7fd1;
	}
`;
