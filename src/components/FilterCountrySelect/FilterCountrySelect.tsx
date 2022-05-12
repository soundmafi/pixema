import Select, { StylesConfig } from 'react-select';
import { IOption } from '../../types/types';
import { Colors } from '../../ui/colors';
interface ISelect {
	handleSelect: (option: IOption | null) => void;
	value: string;
	name: string;
}

const CustomSelect = ({ handleSelect, value, name }: ISelect) => {
	const options: IOption[] = [
		{ value: 'Belarus', label: 'Belarus' },
		{ value: 'Spain', label: 'Spain' },
		{ value: 'Germany', label: 'Germany' },
	];

	const customStyles: StylesConfig<IOption> = {
		control: (nativeStyles) => ({
			...nativeStyles,
			padding: 16,
			border: 'none',
			backgroundColor: `${Colors.BG_GRAPHITE}`,
			borderRadius: 10,
			marginBottom: 50
		}),

		indicatorSeparator: (nativeStyles) => ({
			...nativeStyles,
			display: 'none',
		}),

		indicatorsContainer: (nativeStyles) => ({
			...nativeStyles,
			marginRight: 20,
		}),

		singleValue: (nativeStyles) => ({
			...nativeStyles,
			fontSize: 18,
			letterSpacing: -0.3,
			color: `${Colors.CTX_WHITE}`,
			paddingLeft: 40,
			textAlign: 'center',
		}),

		menuList: (nativeStyles) => ({
			...nativeStyles,
			backgroundColor: `${Colors.BG_GRAPHITE}`,
		}),

		option: (nativeStyles) => ({
			...nativeStyles,
			backgroundColor: `${Colors.GREEN}`,
			border: `1px solid #000000`,
			borderRadius: `10px`,
		}),
	};

	return (
		<Select
			styles={customStyles}
			options={options}
			// defaultValue={options[1]}
			value={options.find((option) => option.value === value)}
			onChange={handleSelect}
			isMulti={false}
			name={name}
		/>
	);
};

export default CustomSelect;
