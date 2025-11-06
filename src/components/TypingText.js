import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <p style={{ color: "#1E2A4A", fontSize: "18px", textAlign: "center" }}>
      {displayedText}
      <span className="cursor" style={{ color: "#FFB800" }}>
        |
      </span>
    </p>
  );
};

export default TypingText;
