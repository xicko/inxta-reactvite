import React, { useState, useEffect } from "react";

interface ScreenshotsProps {
  classes: string;
}

const screenshots = [
  '/screenshots/compressed/ss1.webp',
  '/screenshots/compressed/ss2.webp',
  '/screenshots/compressed/ss3.webp'
];

const Screenshots: React.FC<ScreenshotsProps> = ({ classes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    // Show the placeholder for the first X seconds
    const placeholderTimer = setTimeout(() => {
      setShowPlaceholder(false);
    }, 1400);

    // Change images every 2750ms
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 2750);

    return () => {
      clearTimeout(placeholderTimer);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={classes}>
      <img
        className={`${classes} fixed transition-opacity ease-in duration-500 ${showPlaceholder ? 'opacity-100' : 'opacity-0'}`}
        draggable={false}
        src="/ssplaceholder.webp"
        alt="Placeholder"
        fetchPriority="high"
        width="1086"
        height="2160"
      />
      
      <img
        className={` transition-opacity ease-in duration-500 ${showPlaceholder ? 'opacity-0' : 'opacity-100'}`}
        draggable={false}
        src={screenshots[currentIndex]}
        alt="Screenshot"
        fetchPriority="high"
        width="1086"
        height="2160"
      />
    </div>
  );
};

export default Screenshots;