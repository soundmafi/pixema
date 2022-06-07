import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledModal = styled.div`
	z-index: 20;
	display: grid;
	row-gap: 32px;

	max-width: 480px;
	width: 100%;
	padding: 40px 10px;
	margin: 0 auto;

	background-color: ${Colors.BG_GRAPHITE};

	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
		rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
		rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const StyledText = styled.p`
	${typography.H2}
	text-align: center;
	color: ${Colors.CTX_WHITE};
`;

export const StyledPicture = styled.img`
	margin: 0 auto;
	width: 70%;
		
	object-fit: cover;

	border-radius: 10px;
`;
