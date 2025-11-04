import { motion } from "motion/react";

import frontBgImage from "../../assets/images/invitation-173-Front-BG.jpg";

interface WeddingCardFrontProps {
  brideName: string;
  groomName: string;
  date: string;
  invitationText: string;
}

export function WeddingCardFront({
  brideName,
  groomName,
  date,
  invitationText,
}: WeddingCardFrontProps) {
  return (
    <div
      className="relative w-full h-full from-rose-50 via-pink-50 to-purple-50 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${frontBgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-8 md:p-12">
        {/* Invitation Note - Top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-rose-800 max-w-xs mx-auto">{invitationText}</p>
        </motion.div>

        {/* Names - Middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="relative">
            {/* Decorative border */}
            <div className="absolute transform rotate-1"></div>
            <div className="absolute transform -rotate-1"></div>

            <div className="relative px-8 py-6 md:px-12 md:py-8 rounded-lg">
              <div className="text-center text-black space-y-2">
                <p className="tangerine-bold text-7xl">{brideName}</p>
                <div className="flex items-center justify-center space-x-3">
                  <span className="tangerine-regular text-4xl">&</span>
                </div>
                <p className="tangerine-bold text-7xl">{groomName}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Date - Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center"
        >
          <div className="px-6 py-3 rounded-full ">
            <p className="text-rose-900">{date}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
