import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import wings from "../assets/finbee-wings.json";
import glow from "../assets/finbee-glow.json";
import finbeeBody from "../assets/finbee-body.png";

const FinBee = ({ isTyping }) => {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Trigger entrance animation once when component mounts
    const timer = setTimeout(() => setHasEntered(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ x: 200, y: -100, opacity: 0 }}
      animate={
        hasEntered
          ? { x: 0, y: 0, opacity: 1, rotate: 0 }
          : { x: 200, y: -100, opacity: 0 }
      }
      transition={{
        duration: 2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      style={{
        position: "relative",
        width: "140px",
        height: "140px",
      }}
    >
      {/* Bee Body */}
      <img
        src={finbeeBody}
        alt="FinBee"
        style={{
          width: "100%",
          position: "absolute",
          zIndex: 2,
        }}
      />

      {/* Wing Flutter */}
      <Lottie
        animationData={wings}
        loop
        style={{
          position: "absolute",
          top: -10,
          left: 20,
          width: "120px",
          zIndex: 1,
        }}
      />

      {/* Glow Animation (optional) */}
      {isTyping && (
        <Lottie
          animationData={glow}
          loop
          style={{
            position: "absolute",
            top: 40,
            left: 50,
            width: "80px",
            opacity: 0.6,
            zIndex: 0,
          }}
        />
      )}

      {/* Typing Dots */}
      {isTyping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: -15,
            left: "45%",
            fontSize: "28px",
            color: "#fbc02d",
          }}
        >
          ...
        </motion.div>
      )}
    </motion.div>
  );
};

export default FinBee;
