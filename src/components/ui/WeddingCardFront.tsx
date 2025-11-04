import { motion } from "motion/react";
import frontBgImage from "../../assets/images/invitation-173-Front-BG.png";

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
      className="relative w-full h-full rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${frontBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex flex-col justify-between items-center h-full p-6 sm:p-8 md:p-10">
        {/* Invitation Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-xs sm:text-base text-rose-800 leading-relaxed whitespace-pre-line h-full"
        >
          {invitationText}
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          className="text-center text-black h-full"
        >
          <p className="font-ephesis text-5xl sm:text-6xl">{brideName}</p>
          <span className="font-ephesis text-3xl sm:text-4xl">&</span>
          <p className="font-ephesis text-5xl sm:text-6xl">{groomName}</p>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center text-rose-900 text-xs sm:text-base h-full flex items-end justify-center"
        >
          {date}
        </motion.div>
      </div>
    </div>
  );
}
