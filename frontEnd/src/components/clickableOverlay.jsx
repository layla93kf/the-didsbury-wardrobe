import React, { useState, useRef, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';

const OverlayClickableIframe = ({ src, clothingId }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  const handleOverlayClick = () => {
    navigate(`/api/items/${clothingId}`);
  };

  const isAboveMediumScreens = useMediaQuery('(min-width: 760px)');

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before it's visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasLoaded]);


  // Cleanup WebGL contexts when component unmounts (user navigates away)
  useEffect(() => {
    return () => {
      if (iframeRef.current) {
        iframeRef.current.src = 'about:blank';
      }
    };
  }, []);

  // Cleanup when user navigates away from the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (iframeRef.current) {
        iframeRef.current.src = 'about:blank';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  if (isAboveMediumScreens) {
    return (
      <div className="absolute" ref={containerRef}>
        <div
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
          onClick={handleOverlayClick}
        ></div>

        {isVisible ? (
          <iframe
            ref={iframeRef}
            title="image-overlay"
            style={{
              position: 'relative',
              width: 250,
              height: 250,
              marginTop: 10,
            }}
            src={src}
            sandbox="allow-scripts allow-forms"
            loading="lazy"
            referrerPolicy="no-referrer"
            allow="fullscreen"
          ></iframe>
        ) : (
          <div
            style={{
              position: 'relative',
              width: 250,
              height: 250,
              marginTop: 10,
              backgroundColor: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
            }}
          >
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>Loading...</span>
          </div>
        )}
      </div>
    );
  } else if (!isAboveMediumScreens) {
    return (
      <div className="absolute" ref={containerRef}>
        <div
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
          onClick={handleOverlayClick}
        ></div>

        {isVisible ? (
          <iframe
            ref={iframeRef}
            title="image-overlay"
            style={{
              position: 'relative',
              width: 190,
              height: 190,
              marginTop: 10,
            }}
            src={src}
            sandbox="allow-scripts allow-forms"
            loading="lazy"
            referrerPolicy="no-referrer"
            allow="fullscreen"
          ></iframe>
        ) : (
          <div
            style={{
              position: 'relative',
              width: 190,
              height: 190,
              marginTop: 10,
              backgroundColor: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
            }}
          >
            <span style={{ color: '#9ca3af', fontSize: '12px' }}>Loading...</span>
          </div>
        )}
      </div>
    );
  }
};
export default OverlayClickableIframe;
