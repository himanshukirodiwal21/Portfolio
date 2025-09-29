import React, { useState, useEffect, useMemo } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Code Craftsman'];

  // This logic finds the longest role to use for the placeholder
  const longestRole = useMemo(() => {
    return roles.reduce((a, b) => (a.length > b.length ? a : b));
  }, []); // The empty array means this only runs once

  // The useEffect for the animation logic remains exactly the same
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentRole = roles[roleIndex];
      let newText;

      if (isDeleting) {
        newText = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        newText = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }
      
      setText(newText);

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    };

    const typingInterval = setInterval(type, isDeleting ? 50 : 100);

    return () => clearInterval(typingInterval); // Cleanup
  }, []);

  return (
    <>
      {/* This placeholder is invisible but reserves the maximum required width */}
      <span className="placeholder-text">{longestRole}</span>

      {/* The actual typing effect is positioned on top of the placeholder */}
      <span className="typing-container">{text}</span>
    </>
  );
};

export default TypingEffect;