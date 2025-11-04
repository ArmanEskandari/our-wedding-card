import { useState } from "react";
import { motion } from "motion/react";
import textureBgImage from "./assets/images/flower-background.jpg";

import "./App.css";
import { WeddingCardBack } from "./components/ui/WeddingCardBack";
import { WeddingCardFront } from "./components/ui/WeddingCardFront";
import { Button } from "./components/ui/Button";
import { FlipHorizontal, Navigation } from "lucide-react";
import { NavigationModal } from "./components/NavigationModal";
import { AudioPlayer } from "./components/AudioPlayer.tsx";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  // const [rsvpOpen, setRsvpOpen] = useState(false);

  // Wedding Details - Customize these
  const weddingData = {
    brideName: "Sanaz",
    groomName: "Arman",
    invitationText:
      "در کنار خانواده‌هایمان،\n" +
      "از شما دعوت می‌کنیم تا در شادی پیوندمان سهیم باشید",

    date: "چهارشنبه، ۵ آذر ۱۴۰۴",
    dayOfWeek: "چهارشنبه",
    fullDate: "June 15, 2024",
    timeFrom: "از ساعت ۱۹",
    timeTo: "۲۳",
    address: "آدرس:\n" + "شهریار - بزرگراه باغستان - گلها - بنفشه",
    poem: `با تو، هر لحظه بهار است،\n
حتی در میان زمستان`,
  };

  return (
    <>
      <div
        className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden bg-white"
        style={{
          backgroundImage: `url(${textureBgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 right-10 w-64 h-64 bg-amber-900 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl"
          />
        </div>
        {/* Main Content */}
        <div className="relative z-10 w-full max-w-2xl p-2">
          {/* Card Container with 3D flip */}
          <div className="perspective-1000 mb-8">
            <motion.div
              className="relative w-full aspect-[3/4] md:aspect-[4/5]"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              {/* Front Side */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <WeddingCardFront
                  brideName={weddingData.brideName}
                  groomName={weddingData.groomName}
                  date={weddingData.date}
                  invitationText={weddingData.invitationText}
                />
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
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
        </div>
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex gap-3 justify-center items-center w-full gap-4"
        >
          {/* Flip Card Button */}
          <div className="flex flex-col items-center justify-center gap-2">
            <Button
              onClick={() => setIsFlipped(!isFlipped)}
              size="icon"
              variant="outline"
              className="rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-lg transition-all relative overflow-visible"
            >
              <span className="absolute inset-0 rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.4)] animate-ping" />

              <FlipHorizontal className="w-4 h-4 text-rose-600 before:animate-ping" />
            </Button>
            <span className="text-gray-400 font-medium">چرخش کارت</span>
          </div>
          {/* Navigation Button */}
          <div className="flex flex-col items-center justify-center gap-2">
            <Button
              onClick={() => setNavigationOpen(true)}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/90 backdrop-blur-md hover:bg-white border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 animate-pulse text-blue-600" />
            </Button>
            <span className="text-gray-400 font-medium">مسیریابی</span>
          </div>
        </motion.div>

        {/*/!* Bottom text *!/*/}
        {/*<motion.div*/}
        {/*  initial={{ opacity: 0 }}*/}
        {/*  animate={{ opacity: 1 }}*/}
        {/*  transition={{ delay: 2, duration: 1 }}*/}
        {/*  className="text-center mt-12"*/}
        {/*>*/}
        {/*  <p className="text-gray-400 italic">Celebrating Love & Commitment</p>*/}
        {/*</motion.div>*/}

        {/* Modals */}
        <NavigationModal
          open={navigationOpen}
          onOpenChange={setNavigationOpen}
          address={weddingData.address}
        />
        <AudioPlayer />
      </div>
    </>
  );
}

export default App;
