import styled from 'styled-components';
import { Colors } from '../../ui/colors';

export const StyledNavbar = styled.div<{isOpen:boolean}>`
	display: ${({ isOpen }) => {
			return (isOpen  ? `block`: `block`)
		}};

    position: absolute;
	right:  ${({ isOpen }) => {
			return (isOpen  ? `0px`: `-50px`)
		}};;
	top: 100px;

    width: 250px;
    padding: 20px;
    background-color: ${Colors.SECONDARY};


    transition: right 0.3s ease-in-out;
`;
