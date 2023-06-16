import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List, Item } from './ImageGalleryList.styled';

export const ImageGalleryList = ({ items, name }) => {
  return (
    <List>
      {items.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <Item key={id}>
            <ImageGalleryItem
              imageName={name}
              image={webformatURL}
              largeImage={largeImageURL}
            />
          </Item>
        );
      })}
    </List>
  );
};
