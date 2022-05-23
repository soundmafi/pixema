export interface ISwitch {
	toggleTheme: (state: boolean) => void;
}

export interface IInputData {
	email: string;
	password: string;
	name: string;
	password_confirm: string;
	password_new: string;
	title: string;
	year: string;
	type: string;
}

export interface IFilterRequest {
	year: string | null;
	title: string | null;
	type: string | null;
	page: number | null;
}

export interface IOption {
	value: string;
	label: string;
}
