import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List, Item } from './ImageGalleyList.styled';

export const ImageGalleryList = ({ items }) => {
  return (
    <List>
      {items.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <Item key={id}>
            <ImageGalleryItem
              tags={tags}
              image={webformatURL}
              largeImage={largeImageURL}
            />
          </Item>
        );
      })}
    </List>
  );
};

ImageGalleryList.propTypes = {
  id: PropTypes.string,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};
