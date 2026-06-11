import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-designColor bg-opacity-50 rounded-full pointer-events-none z-[999]"
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
      }}
      transition={{
        type: "tween",
        duration: 0.3,
        stiffness: 300,
        damping: 20,
      }}
    />
  );
}
