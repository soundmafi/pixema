import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledSearch = styled.input`
	width: 100%;
	border-radius: 10px;
	padding: 16px 20px;
	${typography.S1}
	background-color: ${Colors.BG_GRAPHITE};
	color: ${Colors.SECONDARY};

	&::placeholder {
		color: ${Colors.SECONDARY};
	}
`;

export const StyledLabel = styled.form`
	position: relative;
	width: 100%;
`;

export const StyledButtonOpen = styled.button`
	padding: 0;
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: ${Colors.BG_GRAPHITE};
`;

export const StyledIcon = styled.svg`
	background-color: ${Colors.BG_GRAPHITE};
	border: none;
	padding: 0;
`;
