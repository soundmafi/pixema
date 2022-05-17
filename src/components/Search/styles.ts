import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledSearch = styled.input`
	width: 100%;
	padding: 16px 20px;

	${typography.S1}

	background-color: ${Colors.BG_GRAPHITE};
	color: ${Colors.SECONDARY};
	border-radius: 10px;

	&::placeholder {
		color: ${Colors.SECONDARY};
	}
`;

export const StyledLabel = styled.form`
	position: relative;

	width: 100%;
`;

export const StyledButtonOpen = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;

	padding: 0;

	background-color: ${Colors.BG_GRAPHITE};
`;
