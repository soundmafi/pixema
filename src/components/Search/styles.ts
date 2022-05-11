import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

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

export const StyledLabel = styled.label`
	width: 100%;
`;