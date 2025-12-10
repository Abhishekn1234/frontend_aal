import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Maximize2 } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function VideoPlayer() {
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Load YouTube Iframe API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      if (iframeRef.current) {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          videoId: "Stvu6pcAaWY", // <<< Your video ID
          playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else {
                setIsPlaying(false);
              }
            },
          },
        });
      }
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    document.body.style.overflow = !isZoomed ? "hidden" : "unset";
  };

  return (
    <div className={`relative ${isZoomed ? "fixed inset-0 z-50 bg-black" : "w-full max-w-4xl mx-auto"}`}>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">

        {/* YouTube iframe container */}
        <div
          ref={iframeRef}
          className="w-full aspect-video bg-black"
        ></div>

        {/* Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <motion.button
            onClick={togglePlay}
            className="bg-cyan-500 hover:bg-cyan-400 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </motion.button>

          <motion.button
            onClick={toggleZoom}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Maximize2 size={18} />
          </motion.button>
        </div>

        {/* Center play button when paused */}
        {!isPlaying && !isZoomed && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <motion.button
              onClick={togglePlay}
              className="bg-cyan-500 hover:bg-cyan-400 text-white p-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play size={32} />
            </motion.button>
          </div>
        )}
      </div>

      {/* Close Zoom */}
      {isZoomed && (
        <motion.button
          onClick={toggleZoom}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Maximize2 size={20} className="rotate-45" />
        </motion.button>
      )}
    </div>
  );
}
