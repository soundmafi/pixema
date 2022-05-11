export interface ISwitch {
	toggleTheme: (state: boolean) => void;
}

export interface IInputData {
	'email': string;
	'password': string;
	'name': string;
	'password_confirm': string
}