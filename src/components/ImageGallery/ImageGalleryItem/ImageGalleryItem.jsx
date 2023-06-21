import { Component } from "react";
import { Modal } from "../../Modal/Modal";
import { Wrap } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { image, tags, largeImage } = this.props;
    const { isOpen } = this.state;

    return (
      <Wrap>
        <img src={image} alt={tags} width="240" onClick={this.openModal} />

        {isOpen && (
          <Modal
            imageName={tags}
            url={largeImage}
            isOpen={isOpen}
            onClose={this.closeModal}
          />
        )}
      </Wrap>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  imageName: PropTypes.string,
  largeImage: PropTypes.string.isRequired,
};
