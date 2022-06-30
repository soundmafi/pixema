import { SpinnerCircularSplit } from 'spinners-react';
import { Container } from './styles';

const LoadingSpinner = () => {
	return (
		<Container>
			<SpinnerCircularSplit
				size={89}
				thickness={82}
				speed={65}
				color="rgba(169, 183, 255, 1)"
				secondaryColor="rgba(117, 57, 172, 0.16)"
			/>
		</Container>
	);
};

export default LoadingSpinner;
