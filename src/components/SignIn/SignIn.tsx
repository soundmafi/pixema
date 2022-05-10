import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import Input from '../Input/Input';
import {
	StyledButton,
	StyledRestorePasword,
	StyledSignForm,
	StyledText,
	StyledTextSignUp,
	StyledTitle,
} from './styles';

const SignIn = () => {
	const navigate = useNavigate()
	const onSubmit =(e: FormEvent<HTMLFormElement>) =>{
		e.preventDefault();
		navigate(routes.HOME);
	}
	return (
		<StyledSignForm onSubmit={onSubmit}>
			<StyledTitle>Sign In</StyledTitle>
			<Input inputName="Email" inputType="email" placeholder="Your email" />
			<Input inputName="Password" inputType="password" placeholder="Your pasword" />
			<StyledRestorePasword><Link to={routes.RESET_PASSWORD}>Forgot password?</Link></StyledRestorePasword>
			<StyledButton>Sign in</StyledButton>
			<StyledText>
				Don’t have an account? <Link to={routes.SIGN_UP}><StyledTextSignUp>Sign Up</StyledTextSignUp></Link>
			</StyledText>
		</StyledSignForm>
	);
};

export default SignIn;
