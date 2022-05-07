import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { typography } from '../../ui/typography';

export const StyledUserLogged = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const StyledBadge = styled.div`
	width: 56px;
	height: 56px;
	background-color: ${Colors.primary};
	border-radius: 10px;
	color: ${Colors.ctxWhite};
	${typography.H3}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledUsername = styled.p`
	${typography.S3}
	color: ${Colors.ctxWhite};
`;

export const StyledOpenIcon = styled.div``;
