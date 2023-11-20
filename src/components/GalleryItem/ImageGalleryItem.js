import { useState } from 'react';
import { Modal } from '../Modal/Modal';

import { GalleryItem } from './GalleryItem';
import { ImageStyled } from './ImageStyled';

export const ImageGalleryItem = ({ preview, bigPhoto, id, alt }) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const openModal = () => {
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <>
      <GalleryItem
        // key={id}
        style={{
          padding: '15px',
        }}
        onClick={openModal}
      >
        <ImageStyled
          src={preview}
          alt={alt}
          width="100px"
          // data-source={item.largeImageURL}
        />
      </GalleryItem>
      <Modal isOpen={isModalOpen} onClose={closeModal} photo={bigPhoto} />
    </>
  );
};
