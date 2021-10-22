import React,{ useState, useCallback,useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import dreamclues from './images/DreamsClues.png';
import BigData from './images/BigData.png';
import GG from './images/GitandGithub.jpg';
import Python from './images/Python.png';
import responsiveWebDesign from './images/responsiveWebDesign.png';
import AnimatedCursor from "react-animated-cursor";


const Certificates = () => {

  <AnimatedCursor
  innerSize={8}
  outerSize={8}
  color='255,255,255'
  outerAlpha={0.5}
  innerScale={0.9}
  outerScale={10}
/>

useEffect(() => {
  Aos.init({duration: 2000});
}, []);

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

      const photos = [
        {
          src: dreamclues, 
          width: 10,
          height: 4
        },
        {
          src: BigData,
          width: 5,
          height:3
        },
        {
          src: GG,
          width: 5,
          height: 3
        },
        {
          src: "https://udemy-certificate.s3.amazonaws.com/image/UC-e257929e-3256-4e0b-b7a4-4e39d68f62f7.jpg",
          width: 5,
          height: 3
        },
        {
          src: Python,
          width: 5,
          height: 3
        },
        {
          src: "https://udemy-certificate.s3.amazonaws.com/image/UC-8KXCZXSB.jpg",
          width: 5,
          height: 3
        },
        {
          src: "https://udemy-certificate.s3.amazonaws.com/image/UC-JQR18PFF.jpg",
          width: 5,
          height: 3
        },
        {
          src: responsiveWebDesign,
          width: 5,
          height: 3
        },
      ];
      
    return <>
          <div data-aos='zoom-in'>
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