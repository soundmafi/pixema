import { ModalText } from '../../ui/modalText';
import { StyledModal, Text } from './styles';

interface IModalMessage {
	message: ModalText;
}

const ModalBase = (message: IModalMessage) => {
	return (
		<StyledModal>
			<Text>{message.message}</Text>
		</StyledModal>
	);
};

export default ModalBase;
