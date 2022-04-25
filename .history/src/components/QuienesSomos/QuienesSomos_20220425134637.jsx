
import ImageGallery from 'react-image-gallery';

function QuienesSomos() {
  const images = [
    {
      original: './Fotos/7-wonders-duel-como-se-juega.jpg',
      thumbnail: './Fotos/7-wonders-duel-como-se-juega.jpg',
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

  return (
    <ImageGallery items={images} />
  );
}

export default QuienesSomos;



//