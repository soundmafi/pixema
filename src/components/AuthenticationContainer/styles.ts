import styled from 'styled-components';
import background from './../../assets/backgrounds/registration.jpg';

export const StyledBackContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	height: 100vh;

	overflow: hidden;

	&:before {
		content: ' ';
		display: block;

		position: absolute;
		left: 0;
		top: 0;
		
		width: 100%;
		height: 100%;
		
		z-index: 1;
		opacity: 0.4;
		
		background-image: url(${background});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
`;