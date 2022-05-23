import { StyledBackContainer } from './styles';

type IRegistration = {
	children: React.ReactNode;
};

const AuthenticationContainer = (props: IRegistration) => {
	return <StyledBackContainer>{props.children}</StyledBackContainer>;
};

export default AuthenticationContainer;
