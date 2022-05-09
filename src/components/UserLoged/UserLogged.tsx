import { StyledBadge, StyledOpenIcon, StyledUserLogged, StyledUsername } from './styles';

const UserLogged = () => {
	return (
		<StyledUserLogged>
			<StyledBadge>AL</StyledBadge>
			<StyledUsername>Alexsei Lapitsky</StyledUsername>
			<StyledOpenIcon>
				<svg
					width="12"
					height="7"
					viewBox="0 0 12 7"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.6247 1.78087C12.056 1.43586 12.1259 0.806567 11.7809 0.375305C11.4359 -0.0559569 10.8066 -0.125878 10.3753 0.219131L11.6247 1.78087ZM6 5L5.3753 5.78087L6 6.28063L6.6247 5.78087L6 5ZM1.62469 0.219131C1.19343 -0.125879 0.56414 -0.0559574 0.219131 0.375304C-0.125878 0.806566 -0.0559569 1.43586 0.375305 1.78087L1.62469 0.219131ZM10.3753 0.219131L5.3753 4.21913L6.6247 5.78087L11.6247 1.78087L10.3753 0.219131ZM6.6247 4.21913L1.62469 0.219131L0.375305 1.78087L5.3753 5.78087L6.6247 4.21913Z"
						fill="#AFB2B6"
					/>
				</svg>
			</StyledOpenIcon>
		</StyledUserLogged>
	);
};

export default UserLogged;