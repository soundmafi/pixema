import { StyledModal, StyledPicture, StyledText } from './styles';
import background from './../../assets/Backgrounds/error.jpeg';

const ModalNotFound = () => {
	return (
		<StyledModal>
			<StyledPicture src={background} />
			<StyledText> Movie not found...</StyledText>
		</StyledModal>
	);
};

export default ModalNotFound;
