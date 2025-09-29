import { useEffect } from 'react';

export const useFadeInOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach((el) => observer.observe(el));

    // Cleanup function to unobserve elements when the component unmounts
    return () => elementsToFadeIn.forEach((el) => observer.unobserve(el));
  }, []); // The empty array ensures this effect runs only once
};