import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/Button";
import { Dialog } from "./ui/Dialog";
import { Music, Play, Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const onOpenChange = (open: boolean) => setIsOpen(open);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = true;
    audio.loop = true;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };
    tryAutoplay();

    return () => {
      audio.pause();
    };
  }, []);

  const handleUserStart = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.muted = false;
      await audio.play();
      setIsReady(true);
      setIsPlaying(true);
      setIsMuted(false);
      setIsOpen(false);
    } catch (err) {
      console.warn("Playback failed:", err);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Floating Audio Controls */}
      <div className="fixed top-4 right-4 z-50">
        <AnimatePresence mode="wait">
          {!isReady ? (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <Button
                onClick={handleUserStart}
                size="icon"
                className="rounded-full p-3 bg-rose-500 hover:bg-rose-600 text-white shadow-lg"
              >
                <Play className="h-4 w-4" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="mute-toggle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <Button
                onClick={toggleMute}
                size="icon"
                className="rounded-full p-3 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border border-rose-200 hover:border-rose-300"
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                <AnimatePresence mode="wait">
                  {isMuted ? (
                    <motion.div
                      key="muted"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <VolumeX className="h-4 w-4 text-rose-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="playing"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Volume2 className="h-4 w-4 text-rose-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Music */}
        <audio
          ref={audioRef}
          preload="auto"
          src="https://dl.musicdel.ir/tag/music/1404/01/14/Ed%20Sheeran%20-%20Perfect%20(128).mp3"
        />
      </div>

      {/* Intro Dialog */}
      <Dialog
        open={isOpen}
        onOpenChange={onOpenChange}
        title="اجازه پخش موزیک را می‌دهید؟"
      >
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <Music className="w-10 h-10 text-rose-500" />
          <p className="text-sm text-gray-600">
            لطفاً انتخاب کنید که آیا تمایل به پخش موزیک پس‌زمینه دارید یا خیر.
          </p>

          <div className="flex items-center justify-center gap-6 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setIsMuted(true);
                setIsReady(true);
                setIsOpen(false);
              }}
              className="rounded-full w-16 h-16 border-gray-300 hover:border-gray-400"
            >
              <VolumeX className="w-6 h-6 text-gray-600" />
            </Button>

            <Button
              onClick={handleUserStart}
              size="icon"
              className="rounded-full w-16 h-16 bg-rose-500 hover:bg-rose-600 text-white shadow-md"
            >
              <Volume2 className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
