import { createGlobalStyle } from 'styled-components';
import { darkTheme } from './themes';
import { lightTheme } from './themes';

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

html[theme='darkTheme']{
	${darkTheme}
	}

html[theme='lightTheme']{
	${lightTheme}
}

body {
	font-family: 'Exo 2', sans-serif;
	background-color: var(--bgColor);
	color: var(--txtColor);
}
`;
