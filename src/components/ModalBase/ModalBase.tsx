import { StyledModal, Text } from './styles';

const ModalBase = (message: string) => {
	return (
		<StyledModal>
			<Text>{message}</Text>
		</StyledModal>
	);
};

export default ModalBase;
