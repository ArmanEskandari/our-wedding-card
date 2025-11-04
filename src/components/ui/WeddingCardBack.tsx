import { motion } from "motion/react";
import backBgImage from "../../assets/images/invitation-Back-BG.png";
import { MapPin } from "lucide-react";

interface WeddingCardBackProps {
  dayOfWeek: string;
  date: string;
  timeFrom: string;
  timeTo: string;
  address: string;
  gardenHall: string;
  poem: string;
}

export function WeddingCardBack({
  dayOfWeek,
  timeFrom,
  timeTo,
  address,
  gardenHall,
  poem,
}: WeddingCardBackProps) {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${backBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex flex-col justify-between items-center h-full p-6 sm:p-8 text-center">
        {/* Poem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-nastaliq text-4xl sm:text-5xl text-zinc-700 leading-snug whitespace-pre-line h-full"
        >
          {poem}
        </motion.div>

        {/* Time & Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-zinc-600 text-xl sm:text-2xl space-y-2 h-full"
        >
          <p>{dayOfWeek}</p>
          <div className="flex justify-center items-center gap-2 sm:gap-3">
            <div className="border-y-2 border-black flex-1 max-w-24 py-1">
              آذر
            </div>
            <div className="text-black text-6xl sm:text-8xl">۵</div>
            <div className="border-y-2 border-black flex-1 max-w-24 py-1">
              ۱۴۰۴
            </div>
          </div>
          <p className="font-vazir">{`${timeFrom} تا ${timeTo}`}</p>
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col justify-end items-end gap-2 text-gray-600 h-full"
        >
          <div className="flex items-center justify-center gap-2 py-1 w-full h-fit">
            <MapPin />
            <p className="text-base sm:text-lg">{gardenHall}</p>
          </div>
          <p className="text-sm sm:text-sm">{address}</p>
        </motion.div>
      </div>
    </div>
  );
}
