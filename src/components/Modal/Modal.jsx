import ReactModal from "react-modal";
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Image } from "./Modal.styled";

ReactModal.setAppElement("#root");

export const Modal = ({ imageName, url, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal Window"
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
        content: {
          padding: "0",
          width: "80%",
          height: 700,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none"
        }
      }}
    >
      <Image src={url} alt={imageName} onClick={onClose} width="500" />
    </ReactModal>
  );
};

Modal.propTypes = {
  imageName: PropTypes.string,
  url: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
