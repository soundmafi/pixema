import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledInput = styled.input`
	background-color: ${Colors.BG_GRAPHITE};
	color: ${Colors.CTX_WHITE};
	padding: 16px 20px;
	border-radius: 10px;
`;

export const StyledLabel = styled.label`
	color: ${Colors.CTX_WHITE};
	${typography.S3}
	margin-bottom: 8px;
`;

export const StyledInputItem = styled.div`
	display: flex;
	flex-direction: column;
`;
