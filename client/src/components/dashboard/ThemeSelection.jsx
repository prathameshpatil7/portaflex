// "use client";

// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Palette, Check } from "lucide-react";
// import Temp1 from "@/assets/images/temp1.png";
// import Temp2 from "@/assets/images/temp2.png";
// import Temp4 from "@/assets/images/temp4.png";

// const themes = [
//   { id: 1, src: Temp1, name: "Light Theme" },
//   { id: 2, src: Temp2, name: "Dark Theme" },
//   { id: 3, src: Temp4, name: "Blue Theme" },
// ];

// export default function ThemeSelection() {
//   const [selectedTheme, setSelectedTheme] = useState(themes[0]);
//   const [isSelected, setIsSelected] = useState(false);

//   const handleSelectTheme = (theme) => {
//     setSelectedTheme(theme);
//     setIsSelected(false);
//   };

//   const confirmSelection = () => {
//     setIsSelected(true);
//     // Here you would typically save the selection or update the app's theme
//     console.log(`Theme "${selectedTheme.name}" selected`);
//   };

//   return (
//     <Card className="mt-8 max-w-4xl mx-auto">
//       <CardHeader>
//         <CardTitle className="flex items-center">
//           <Palette className="mr-2" size={18} />
//           Theme Selection
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <div className="flex justify-center space-x-4">
//           {themes.map((theme) => (
//             <div
//               key={theme.id}
//               className={`cursor-pointer rounded-md transition-all duration-300 ${
//                 selectedTheme.id === theme.id
//                   ? "ring-2 ring-primary"
//                   : "hover:scale-105"
//               }`}
//               onClick={() => handleSelectTheme(theme)}
//             >
//               <img
//                 src={theme.src}
//                 alt={theme.name}
//                 className="w-24 h-24 object-cover rounded-md"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <div className="relative">
//             <img
//               src={selectedTheme.src}
//               alt={selectedTheme.name}
//               // height={200}
//               // width={400}
//               className="w-100 h-80  rounded-lg shadow-lg transition-all duration-300 ease-in-out"
//             />
//             {isSelected && (
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
//                 <Check className="text-white" size={48} />
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex justify-between items-center">
//           <span className="text-lg font-medium">{selectedTheme.name}</span>
//           <Button onClick={confirmSelection} disabled={isSelected}>
//             {isSelected ? "Theme Selected" : "Select This Theme"}
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Palette } from "lucide-react";
import Temp1 from "@/assets/images/temp1.png";
import Temp2 from "@/assets/images/temp2.png";
import Temp4 from "@/assets/images/temp4.png";
import { Button } from "../ui/button";
import { fetch } from "@/service/fetch";

const themes = [
  { id: "violetGlow", src: Temp1, name: "Violet Glow" },
  { id: "dynamicBlack", src: Temp2, name: "Dynamic Black" },
  { id: "azureBreeze", src: Temp4, name: "Azure Breeze" },
];

export default function ThemeSelection({ sections = [] }) {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const personalDetails = sections.find(
      (item) => item.id === "personal-details"
    );
    const template = personalDetails?.items?.[0]?.template;
    setSelectedTheme(template);
  }, [sections]);
  const handleSelectTheme = (theme) => {
    setSelectedTheme(theme.id);
    setIsSelected(false);
  };

  const confirmSelection = async () => {
    setIsSelected(true);
    await fetch(
      {
        url: `/api/personal-details/template/update`,
        body: { template: selectedTheme },
      },
      "PUT"
    );
    console.log(`Theme "${selectedTheme}" selected`);
  };
  return (
    <Card className="mt-8 max-w-full mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Palette className="mr-2" size={18} />
          Theme Selection
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <div key={theme.id} className="flex flex-col items-center">
              <Card
                className={`
        relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out
        ${
          selectedTheme === theme.id
            ? "shadow-lg"
            : "hover:shadow-lg hover:scale-105"
        }
        
      `}
                onClick={() => handleSelectTheme(theme)}
              >
                <CardContent className="p-0">
                  <img
                    src={theme.src}
                    alt={theme.name}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className={`
            absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
            transition-opacity duration-300 ease-in-out
            ${selectedTheme === theme.id ? "opacity-100" : "hover:opacity-100"}
          `}
                  />
                  {selectedTheme === theme.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-green-500/20">
                      <Check className="text-white" size={48} />
                    </div>
                  )}
                </CardContent>
              </Card>
              <p className="mt-2 text-sm font-medium">{theme.name}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">{selectedTheme?.name}</span>
          <Button onClick={confirmSelection} disabled={isSelected}>
            {isSelected ? "Theme Selected" : "Select This Theme"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
