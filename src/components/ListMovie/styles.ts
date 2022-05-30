import styled from 'styled-components';
import { Colors } from '../../ui/colors';
import { media } from '../../ui/media';

export const StyledList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
	grid-gap: 10px;

	width: 100%;

	${media.TABLET} {
		grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
	}
`;

export const ListContainer = styled.div`
	grid-area: outlet;
	width: 100%;
	position: relative;
`;

export const StyledFilter = styled.button`
	position: absolute;
	top: -10px;
    right: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	height: 40px;
	width: 40px;
	min-width: 40px;
	margin-left: 10px;
	padding: 5px;
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
		background-color: #978fc1;
	}
`;
