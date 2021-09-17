import React,{ useState, useCallback } from 'react';
import ImageGallery from 'react-image-gallery';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import dreamclues from './images/DreamsClues.png';
import BigData from './images/BigData.png';
import GG from './images/GitandGithub.jpg';
const Certificates = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
    const images = [
        {
          original: dreamclues,
          thumbnail: dreamclues//'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
      const photos = [
        {
          src: dreamclues, 
          // "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
          width: 420,
          height: 200
        },
        {
          src: BigData,
          width: 1,
          height: 1
        },
        {
          src: GG,
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
          width: 3,
          height: 4
        },
       
      ];
      
    return <>
        {/* return 
        <Gallery photos={photos} />; */}
          {/* <ImageGallery items={images} />; */}
          <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>

    </>
}

export default Certificates;