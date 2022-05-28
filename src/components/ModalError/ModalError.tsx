import { StyledModal, StyledPicture, StyledText } from './styles';
import background from './../../assets/backgrounds/error.jpeg';

const ModalError = () => {
	return (
		<StyledModal>
			<StyledPicture src={background} />
			<StyledText> Something was wrong...</StyledText>
		</StyledModal>
	);
};

export default ModalError;
