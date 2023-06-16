import ReactModal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Image } from './Modal.styled';


ReactModal.setAppElement('#root');

export const Modal = ({ imageName, url, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal Window"
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
        content: {
          padding: '0',
          width: 1000,
          height: 600,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
        },
      }}
    >
      <Image src={url} alt={imageName} onClick={onClose} width="500" />
    </ReactModal>
  );
};
