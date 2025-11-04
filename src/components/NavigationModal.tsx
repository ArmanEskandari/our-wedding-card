"use client";

import { ImageWithFallback } from "./Image";
import { Button } from "./ui/Button";
import { useIsMobile } from "./ui/use-mobile";
import { Dialog } from "./ui/Dialog";
import { BottomSheet } from "./ui/BottomSheet";

import baladLogo from "../assets/images/balad.svg";
import neshanLogo from "../assets/images/neshan.svg";
import googleLogo from "../assets/images/google-map.svg";

interface NavigationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  address: string;
}

export function NavigationModal({
  open,
  onOpenChange,
  address,
}: NavigationModalProps) {
  const isMobile = useIsMobile();

  const encodedAddress = encodeURIComponent(address);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  // const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`;
  const neshanUrl = `https://nshn.ir/b5_bQmASQxF2vF`;
  const baladUrl = `https://balad.ir/p/7pJDaGT9bSnwKy`;

  const mapOptions = [
    {
      name: "گوگل مپ",
      description: "باز کردن در Google Maps",
      url: googleMapsUrl,
      icon: (
        <ImageWithFallback
          src={googleLogo}
          alt="Google Maps"
          className="w-14 h-14 rounded-md"
        />
      ),
      gradient:
        "from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    },
    {
      name: "نشان",
      description: "باز کردن در Neshan",
      url: neshanUrl,
      icon: (
        <ImageWithFallback
          src={neshanLogo}
          alt="Neshan"
          className="w-14 h-14 rounded-md"
        />
      ),
      gradient:
        "from-green-400 to-green-600 hover:from-green-600 hover:to-green-700",
    },
    {
      name: "بلد",
      description: "باز کردن در Balad",
      url: baladUrl,
      icon: (
        <ImageWithFallback
          src={baladLogo}
          alt="Balad"
          className="w-14 h-14 rounded-md"
        />
      ),
      gradient:
        "from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    },
  ];

  const content = (
    <div dir="rtl" className="space-y-4 pb-4 pt-2 text-right">
      <p className="text-muted-foreground">
        برنامه مسیریاب مورد نظر خود را انتخاب کنید:
      </p>

      <div className="space-y-3">
        {mapOptions.map((option) => (
          <Button
            key={option.name}
            className={`w-full justify-between gap-3 h-auto py-4 px-4 bg-gradient-to-r text-white ${option.gradient}`}
            onClick={() => {
              window.open(option.url, "_blank");
              onOpenChange(false);
            }}
          >
            <div className="flex items-center gap-3">
              {option.icon}
              <div className="text-right">
                <div className="font-semibold">{option.name}</div>
                <div className="text-xs opacity-90">{option.description}</div>
              </div>
            </div>
          </Button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-4">{address}</p>
    </div>
  );

  if (isMobile) {
    return (
      <BottomSheet open={open} onOpenChange={onOpenChange} title="مسیریابی">
        {content}
      </BottomSheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange} title="مسیریابی">
      {content}
    </Dialog>
  );
}

// "use client";
//
// import { Button } from "./ui/Button";
// import { MapIcon, MapPinned, Navigation } from "lucide-react";
// import { useIsMobile } from "./ui/use-mobile";
// import { Dialog } from "./ui/Dialog";
// import { BottomSheet } from "./ui/BottomSheet";
//
// interface NavigationModalProps {
//     open: boolean;
//     onOpenChange: (open: boolean) => void;
//     address: string;
// }
//
// export function NavigationModal({ open, onOpenChange, address }: NavigationModalProps) {
//     const isMobile = useIsMobile();
//
//
//     const encodedAddress = encodeURIComponent(address);
//
//
//     const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
//     const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`;
//     const neshanUrl = `https://neshan.org/maps?query=${encodedAddress}`;
//     const baladUrl = `https://balad.ir/search/${encodedAddress}`;
//
//     const mapOptions = [
//         {
//             name: "Google Maps",
//             description: "Navigate with Google Maps",
//             url: googleMapsUrl,
//             icon: <MapPinned className="w-5 h-5" />,
//             gradient: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
//         },
//         {
//             name: "Apple Maps",
//             description: "Navigate with Apple Maps",
//             url: appleMapsUrl,
//             icon: <Navigation className="w-5 h-5" />,
//             gradient: "from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900",
//         },
//         {
//             name: "Neshan",
//             description: "باز کردن در نشان",
//             url: neshanUrl,
//             icon: <MapIcon className="w-5 h-5" />,
//             gradient: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
//         },
//         {
//             name: "Balad",
//             description: "باز کردن در بلد",
//             url: baladUrl,
//             icon: <MapIcon className="w-5 h-5" />,
//             gradient: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
//         },
//     ];
//
//     const content = (
//         <div className="space-y-4 pb-4 pt-2">
//             <p className="text-muted-foreground text-right">
//                 برنامه مسیریاب موردنظر خود را انتخاب کنید:
//             </p>
//
//             <div className="space-y-3">
//                 {mapOptions.map((option) => (
//                     <Button
//                         key={option.name}
//                         className={`w-full justify-start gap-3 h-auto py-4 bg-gradient-to-r ${option.gradient}`}
//                         onClick={() => {
//                             window.open(option.url, "_blank");
//                             onOpenChange(false);
//                         }}
//                     >
//                         {option.icon}
//                         <div className="text-left">
//                             <div>{option.name}</div>
//                             <div className="text-xs opacity-90">{option.description}</div>
//                         </div>
//                     </Button>
//                 ))}
//             </div>
//
//             <p className="text-xs text-muted-foreground mt-4">{address}</p>
//         </div>
//     );
//
//     if (isMobile) {
//         return (
//             <BottomSheet open={open} onOpenChange={onOpenChange} title="مسیریابی">
//                 {content}
//             </BottomSheet>
//         );
//     }
//
//     return (
//         <Dialog open={open} onOpenChange={onOpenChange} title="Get Directions">
//             {content}
//         </Dialog>
//     );
// }
