import React from "react";
import { motion } from "framer-motion";
import beeImage from "../assets/finbee.png"; // make sure path is correct

const FinBeeAvatar = () => {
  return (
    <motion.div
      initial={{ x: -200, y: 100, opacity: 0, rotate: -10 }}
      animate={{
        x: [-200, -100, 0, 10, 0], // gentle curve path
        y: [100, 50, 0, -10, 0],   // moves diagonally upward
        opacity: [0, 0.8, 1],
        rotate: [-10, 5, 0, -5, 0], // tilt like fluttering
        transition: {
          duration: 3,
          ease: "easeInOut",
        },
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Larger FinBee with floating + shimmer effect */}
      <motion.img
        src={beeImage}
        alt="FinBee"
        style={{
          width: 220, // increased size
          height: 250, // increased size
          filter: "drop-shadow(0px 0px 18px rgba(255, 215, 0, 0.7))",
        }}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.03, 1],
          rotate: [0, 3, 0, -3, 0], // gentle flutter
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default FinBeeAvatar;
