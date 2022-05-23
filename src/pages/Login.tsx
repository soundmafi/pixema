import AuthenticationContainer from '../components/AuthenticationContainer/AuthenticationContainer';
import SignIn from '../components/SignIn/SignIn';
const Login = () => {
	return (
		<AuthenticationContainer>
			<SignIn />;
		</AuthenticationContainer>
	);
};

export default Login;
