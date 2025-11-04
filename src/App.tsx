import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import textureBgImage from "./assets/images/flower-background.png";

import "./App.css";
import { WeddingCardBack } from "./components/ui/WeddingCardBack";
import { WeddingCardFront } from "./components/ui/WeddingCardFront";
import { Button } from "./components/ui/Button";
import { FlipHorizontal, Navigation } from "lucide-react";
import { NavigationModal } from "./components/NavigationModal";
import { AudioPlayer } from "./components/AudioPlayer";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [audioModalOpen, setAudioModalOpen] = useState(true); // new state

  const weddingData = {
    brideName: "Sanaz",
    groomName: "Arman",
    invitationText:
      "در کنار خانواده‌هایمان،\nاز شما دعوت می‌کنیم تا در شادی پیوندمان سهیم باشید",
    date: "چهارشنبه، ۵ آذر ۱۴۰۴",
    dayOfWeek: "چهارشنبه",
    fullDate: "June 15, 2024",
    timeFrom: "از ساعت ۱۹",
    timeTo: "۲۳",
    gardenHall: "عمارت رویال",
    address: "\nشهریار - بزرگراه باغستان - گلها - بنفشه",
    poem: `با تو، هر لحظه بهار است،\nحتی در میان زمستان`,
  };
  const backFlippedRef = useRef(false); // ✅ proper ref initialization

  useEffect(() => {
    if (isFlipped) {
      backFlippedRef.current = true;
    }
  }, [isFlipped]);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen-safe w-[100vw] overflow-hidden bg-white"
      style={{
        backgroundImage: `url(${textureBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* same motion circles */}
      </div>

      {/* Render card content only when modal is closed */}
      {!audioModalOpen && (
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-3">
          <div className="perspective-1000 flex justify-center items-center w-full h-[80vh] sm:h-[75vh]">
            <motion.div
              className="relative w-[90vw] max-w-sm sm:max-w-md aspect-[3/4] md:aspect-[4/5]"
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
                WebkitTransformStyle: "preserve-3d",
                WebkitPerspective: "1000px",
              }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              {/* Front face */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                  WebkitTransform: "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                  WebkitTransformStyle: "preserve-3d",
                }}
              >
                <WeddingCardFront
                  brideName={weddingData.brideName}
                  groomName={weddingData.groomName}
                  date={weddingData.date}
                  invitationText={weddingData.invitationText}
                />
              </div>

              {/* Back face */}
              <div
                className="absolute inset-0 z-20"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  WebkitTransform: "rotateY(180deg)",
                  transformStyle: "preserve-3d",
                  WebkitTransformStyle: "preserve-3d",
                }}
              >
                {(isFlipped || backFlippedRef.current) && (
                  <WeddingCardBack
                    dayOfWeek={weddingData.dayOfWeek}
                    date={weddingData.fullDate}
                    timeFrom={weddingData.timeFrom}
                    timeTo={weddingData.timeTo}
                    address={weddingData.address}
                    gardenHall={weddingData.gardenHall}
                    poem={weddingData.poem}
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center items-center gap-8 pb-[calc(env(safe-area-inset-bottom)+16px)]"
          >
            {/* Flip */}
            <div className="flex flex-col items-center gap-1">
              <Button
                onClick={() => setIsFlipped(!isFlipped)}
                size="icon"
                variant="outline"
                className="rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-lg transition-all relative overflow-visible"
              >
                <span className="absolute inset-0 rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.4)] animate-ping" />

                <FlipHorizontal className="w-5 h-5 text-rose-600 before:animate-ping" />
              </Button>
              <span className="text-xs sm:text-sm text-gray-500">
                چرخش کارت
              </span>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center gap-1">
              <Button
                onClick={() => setNavigationOpen(true)}
                size="icon"
                variant="outline"
                className="rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-lg transition-all"
              >
                <Navigation className="w-5 h-5 text-blue-600" />
              </Button>
              <span className="text-xs sm:text-sm text-gray-500">مسیریابی</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modals */}
      <NavigationModal
        open={navigationOpen}
        onOpenChange={setNavigationOpen}
        address={weddingData.address}
      />
      <AudioPlayer isOpen={audioModalOpen} onOpenChange={setAudioModalOpen} />
    </div>
  );
}

export default App;
