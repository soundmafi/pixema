import { SpinnerCircularSplit } from 'spinners-react';

const LoadingSpinner = () => {
	return (
		<SpinnerCircularSplit
			size={89}
			thickness={82}
			speed={65}
			color="rgba(169, 183, 255, 1)"
			secondaryColor="rgba(117, 57, 172, 0.16)"
		/>
	);
};

export default LoadingSpinner;
