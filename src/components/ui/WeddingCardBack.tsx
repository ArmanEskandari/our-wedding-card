import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import backBgImage from "../../assets/images/invitation-Back-BG.jpg";

interface WeddingCardBackProps {
  dayOfWeek: string;
  date: string;
  timeFrom: string;
  timeTo: string;
  address: string;
  poem: string;
}

export function WeddingCardBack({
  dayOfWeek,
  // date,
  timeFrom,
  timeTo,
  address,
  poem,
}: WeddingCardBackProps) {
  return (
    <div
      className="relative w-full h-full from-rose-50 via-pink-50 to-purple-50 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${backBgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-around h-full p-8 md:p-12">
        {/* Poem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="px-6 py-4 rounded-xl w-full max-w-md font-nastaliq text-5xl"
        >
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-px"></div>
            </div>
            <p className="text-zinc-700 text-center">{poem}</p>
            <div className="flex justify-center mt-3">
              <div className="w-12 h-px"></div>
            </div>
          </div>
        </motion.div>
        {/* Time */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-col items-center px-6 py-4 w-full max-w-md text-zinc-600 text-2xl"
        >
          <div>{dayOfWeek}</div>
          <div className="flex justify-center items-center space-x-3">
            <div className="text-zinc-600 border-y-2 border-black text-4xl flex-1 lg:max-w-32 max-w-24 py-2">
              <p>۱۴۰۴</p>
            </div>
            <div className="text-black text-8xl">
              <p>۵</p>
            </div>
            <div className="text-zinc-600 border-y-2 border-black text-4xl flex-1 lg:max-w-32 max-w-24 py-2">
              <p>آذر</p>
            </div>
          </div>
          <div className="text-zinc-600 text-2xl font-vazir">
            <p>
              {timeFrom} تا {timeTo}
            </p>
          </div>
        </motion.div>
        {/* Address */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="px-6 py-4 w-full max-w-md"
        >
          <div className="flex flex-row-reverse items-center justify-center gap-2">
            <p className="text-zinc-500 md:text-xl">{address}</p>
            <MapPin className="w-5 h-5 text-zinc-700" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
