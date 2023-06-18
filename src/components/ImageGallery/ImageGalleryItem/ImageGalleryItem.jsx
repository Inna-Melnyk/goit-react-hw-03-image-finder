import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Wrap } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { image, imageName, largeImage } = this.props;
    const { isOpen } = this.state;


    return (
      <Wrap>
        <img src={image} alt={imageName} width="240" onClick={this.openModal} />

        {isOpen && (
          <Modal
            imageName={imageName}
            url={largeImage}
            isOpen={isOpen}
            onClose={this.closeModal}
          />
        )}
      </Wrap>
    );
  }
}
