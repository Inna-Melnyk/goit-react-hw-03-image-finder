import React, { Component } from "react"; 
import PropTypes from 'prop-types';
import { Container, Text } from "./ImageGallery.styled";
import { Button } from "../Button/Button";
import { Loader } from "components/Loader/Loader";
import { ImageGalleryList } from "../ImageGallery/ImageGalleyList/ImageGalleyList";

export class ImageGallery extends Component {
  render() {
    const { images, isLoading, hasMoreImages, onClickMoreImages } = this.props;
    return (
      <Container>
        {!images && <Text>Enter search name</Text>}
        {images && <ImageGalleryList items={images} />}
        {hasMoreImages && <Button onClick={onClickMoreImages} />}
        {isLoading && <Loader />}
      </Container>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasMoreImages: PropTypes.bool,
  onClickMoreImages: PropTypes.func.isRequired,
};
