import React, { useState, useEffect } from 'react';

import './Footer.css'
function ScrollDetectFooter() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      const scrollPosition = window.scrollY;

      if (windowHeight + scrollPosition >= documentHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'visible' : ''}`}>
      {/* Your footer content */}
    </footer>
  );
}

export default ScrollDetectFooter;
