import { createPortal } from 'react-dom';
import { StyledModal } from './styles';

const Modal = ({ children }) => {
	return createPortal(
		<StyledModal>{children}</StyledModal>,
		document.getElementById('modal')
	);
};

export default Modal;
