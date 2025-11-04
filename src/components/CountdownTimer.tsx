import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Convert Western digits to Persian digits
  const toPersianDigits = (num: number) =>
    num
      .toString()
      .padStart(2, "0")
      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="text-center font-vazir"
    >
      <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6 tracking-wider">
        تاریخ را به خاطر بسپارید
      </p>

      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 tracking-tight">
            {toPersianDigits(timeLeft.days)}
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-2 tracking-widest">
            روز
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 tracking-tight">
            {toPersianDigits(timeLeft.hours)}
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-2 tracking-widest">
            ساعت
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 tracking-tight">
            {toPersianDigits(timeLeft.minutes)}
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-2 tracking-widest">
            دقیقه
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 tracking-tight">
            {toPersianDigits(timeLeft.seconds)}
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-2 tracking-widest">
            ثانیه
          </div>
        </div>
      </div>
    </motion.div>
  );
}
