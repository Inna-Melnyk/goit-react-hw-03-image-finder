import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { List, Item } from "./ImageGalleyList.styled";

export const ImageGalleryList = ({ items }) => {
  return (
    <List>
      {items.map(({ id, imageName, webformatURL, largeImageURL }) => {
        return (
          <Item key={id}>
            <ImageGalleryItem
              imageName={imageName}
              image={webformatURL}
              largeImage={largeImageURL}
            />
          </Item>
        );
      })}
    </List>
  );
};
