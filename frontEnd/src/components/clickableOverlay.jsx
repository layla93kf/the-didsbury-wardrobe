import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';

const OverlayClickableIframe = ({ src, clothingId }) => {
  const navigate = useNavigate();
  const handleOverlayClick = () => {
    navigate(`/api/items/${clothingId}`);
  };

  const isAboveMediumScreens = useMediaQuery('(min-width: 760px)');

  if (isAboveMediumScreens) {
    return (
      <div className="absolute">
        <div
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
          onClick={handleOverlayClick}
        ></div>

        <iframe
          title="image-overlay"
          style={{
            position: 'relative',
            width: 250,
            height: 250,
            marginTop: 10,
          }}
          src={src}
        ></iframe>
      </div>
    );
  } else if (!isAboveMediumScreens) {
    return (
      <div className="absolute">
        <div
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
          onClick={handleOverlayClick}
        ></div>

        <iframe
          title="image-overlay"
          style={{
            position: 'relative',
            width: 190,
            height: 190,
            marginTop: 10,
          }}
          src={src}
        ></iframe>
      </div>
    );
  }
};
export default OverlayClickableIframe;
