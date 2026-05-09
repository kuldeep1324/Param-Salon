import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Cursor glow effect (desktop only)
  useEffect(() => {
    const handleMouse = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouse);
      return () => window.removeEventListener("mousemove", handleMouse);
    }
  }, []);

  return (
    <>
      {/* Cursor Glow */}
      <div
        className="cursor-glow hidden md:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex flex-col items-center gap-6">
              {/* Animated logo ring */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute h-24 w-24 animate-spin rounded-full border-2 border-transparent border-t-[#ffcc00]" style={{ animationDuration: '1.5s' }} />
                <div className="absolute h-20 w-20 animate-spin rounded-full border-2 border-transparent border-b-[#ff9500]" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                <span className="font-heading text-2xl font-bold text-gold-gradient bg-gradient-to-r from-[#ffcc00] to-[#ff9500] bg-clip-text text-transparent">
                  PS
                </span>
              </motion.div>

              {/* Loading text */}
              <motion.p
                className="text-sm font-light tracking-[0.3em] text-[#bdbdbd] uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Param Salon
              </motion.p>

              {/* Progress bar */}
              <motion.div
                className="h-[2px] w-32 overflow-hidden rounded-full bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#ffcc00] to-[#ff9500]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Home />
        </motion.div>
      )}
    </>
  );
}

export default App;