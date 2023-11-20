import { ImageGalleryItem } from '../GalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ inf, onClick }) => {
  return (
    <ImageGalleryList>
      {inf.map(item => (
        <ImageGalleryItem
          key={item.id}
          preview={item.webformatURL}
          alt={item.tags}
          onClick={onClick}
          bigPhoto={item.largeImageURL}
        ></ImageGalleryItem>
      ))}
    </ImageGalleryList>
  );
};
