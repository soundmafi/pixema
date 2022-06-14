import styled from 'styled-components';
import { media } from '../../ui/media';
import background from './../../assets/Backgrounds/registration.jpg';
export const Authorization = styled.div`
	display: grid;
	grid-column-gap: 40px;
	grid-template-columns: 1fr;
	grid-template-areas:
		'logo'
		'outlet'
		'footer';

	max-width: 1920px;
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	padding: 40px 62px;

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

	/* ${media.TABLET} {
		grid-column-gap: 40px;
		grid-template-columns: 1fr;
		grid-template-areas:
			'header'
			'outlet'
			'footer';
		padding: 40px;
	}

	${media.MOBILE} {
		grid-column-gap: 40px;
		grid-template-columns: 1fr;
		grid-template-areas:
			'header'
			'outlet'
			'footer';
		padding: 40px;
	} */
`;


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