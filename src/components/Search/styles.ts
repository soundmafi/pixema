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
	display: flex;
	width: 100%;
`;



export const StyledSearchButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
		
	height: 45px;
	width: 45px;
	min-width: 45px;
	margin-left: 10px;
	padding: 5px 10px;
	align-self: center;

	color: ${Colors.CTX_WHITE};

	background-color: ${Colors.BG_GRAPHITE};
	border-radius: 10px;

	&:hover {
		background-color: #535668;
		box-shadow: 0px 2px 9px 0px rgb(192, 192, 192, 0.17);
	}

	&:active {
		box-shadow: 0px 2px 10px 2px rgb(192, 192, 192, 0.2);
		background-color:  #978fc1;
	}
`;
