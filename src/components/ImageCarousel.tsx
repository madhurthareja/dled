import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/imageCarousel.css';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  type?: 'image' | 'video'; // Add type to distinguish between image and video
  videoId?: string; // YouTube video ID for embedded videos
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoSlide?: boolean;
  slideInterval?: number;
  showArrows?: boolean;
  height?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoSlide = true,
  slideInterval = 5000,
  showArrows = true,
  height = '400px'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Check if current slide is a video
  const currentSlideIsVideo = images[currentIndex]?.type === 'video';

  useEffect(() => {
    // Pause auto-advance if:
    // 1. autoSlide is disabled, OR
    // 2. mouse is hovered, OR
    // 3. current slide is a video, OR
    // 4. there's only one or no images
    if (autoSlide && !isHovered && !currentSlideIsVideo && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, slideInterval);

      return () => clearInterval(timer);
    }
  }, [autoSlide, isHovered, currentSlideIsVideo, images.length, slideInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) {
    return <div className="carousel-empty">No images available</div>;
  }

  return (
    <div 
      className={`carousel-container ${height === '300px' ? 'carousel-mobile' : height === '250px' ? 'carousel-small' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-track">
        {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              data-index={index}
              data-current={currentIndex}
            >
              {image.type === 'video' && image.videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${image.videoId}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=1&playsinline=1&cc_load_policy=0&enablejsapi=1`}
                  title={image.alt}
                  className="carousel-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image"
                />
              )}
              {/* Only show overlay for images, not videos */}
              {image.type !== 'video' && (image.title || image.description) && (
                <div className="carousel-overlay">
                  <div className="carousel-content">
                    {image.title && <h3 className="carousel-title">{image.title}</h3>}
                    {image.description && <p className="carousel-description">{image.description}</p>}
                  </div>
                </div>
              )}
            </div>
        ))}
      </div>

      {showArrows && images.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* Progress bar */}
      {autoSlide && !isHovered && images.length > 1 && (
        <div className="carousel-progress">
          <div 
            className={`carousel-progress-bar ${!isHovered ? 'animate' : 'paused'}`}
            data-duration={slideInterval}
          />
        </div>
      )}
    </div>
  );
};
