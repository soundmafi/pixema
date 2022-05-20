import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledContainer = styled.div`
	display: grid;
	width: 500px;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 10px;
	margin-bottom: 20px;
`;

export const StyledButton = styled.button`
	padding: 3px 5px;
	${typography.S3}
	border: 1px solid ${Colors.BG_GRAPHITE};
	border-radius: 8px;
`;

export const StyledTotalPage = styled.p`
	display: block;
    background-color: ${Colors.CTX_LIGHT};
	padding: 3px 5px;
	${typography.S3}
	border: 1px solid ${Colors.BG_GRAPHITE};
	border-radius: 8px;
`;
