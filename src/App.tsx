import { useState } from "react";
import { motion } from "motion/react";
import textureBgImage from "./assets/images/flower-background.jpg";

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
    address: "آدرس:\nشهریار - بزرگراه باغستان - گلها - بنفشه",
    poem: `با تو، هر لحظه بهار است،\nحتی در میان زمستان`,
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-white"
      style={{
        backgroundImage: `url(${textureBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated background lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 right-8 w-40 h-40 bg-amber-900 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-8 left-8 w-52 h-52 bg-rose-800 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg p-3">
        <div className="perspective-1000 mb-6">
          <motion.div
            className="relative w-full aspect-[3/4] md:aspect-[4/5]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0"
              style={{ backfaceVisibility: "hidden" }}
            >
              <WeddingCardFront
                brideName={weddingData.brideName}
                groomName={weddingData.groomName}
                date={weddingData.date}
                invitationText={weddingData.invitationText}
              />
            </div>

            {/* Back */}
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <WeddingCardBack
                dayOfWeek={weddingData.dayOfWeek}
                date={weddingData.fullDate}
                timeFrom={weddingData.timeFrom}
                timeTo={weddingData.timeTo}
                address={weddingData.address}
                poem={weddingData.poem}
              />
            </div>
          </motion.div>
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center items-center gap-8"
        >
          {/* Flip card */}
          <div className="flex flex-col items-center gap-1">
            <Button
              onClick={() => setIsFlipped(!isFlipped)}
              size="icon"
              variant="outline"
              className="rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-lg transition-all relative"
            >
              <FlipHorizontal className="w-4 h-4 text-rose-600" />
            </Button>
            <span className="text-sm text-gray-400">چرخش کارت</span>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-1">
            <Button
              onClick={() => setNavigationOpen(true)}
              size="icon"
              variant="outline"
              className="rounded-full bg-white/90 backdrop-blur-md hover:bg-white border border-gray-200 shadow-md hover:shadow-lg"
            >
              <Navigation className="w-4 h-4 animate-pulse text-blue-600" />
            </Button>
            <span className="text-sm text-gray-400">مسیریابی</span>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <NavigationModal
        open={navigationOpen}
        onOpenChange={setNavigationOpen}
        address={weddingData.address}
      />
      <AudioPlayer />
    </div>
  );
}

export default App;
