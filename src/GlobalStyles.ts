import { createGlobalStyle } from 'styled-components';
import { Colors } from './ui/colors';

export const GlobalStyles = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
input{
	border: none;
    outline: none;
}
button {
	padding: 0;
	appearance: none;
	
	font-family: inherit;
	border: none;
	outline: none;
	cursor: pointer;	
}
body {
	font-family: 'Exo 2', sans-serif;
	background: ${Colors.bgBlack};
}
`;
