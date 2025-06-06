import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Aircraft {
  name: string;
  imageUrl: string;
}

const aircraftData: Aircraft[] = [
  {
    name: "B737 CDU Trainer",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9a/8e/31/9a8e310f-0d42-2070-2006-127fa312d305/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/460x0w.webp",
  },
  {
    name: "B747 Simulator",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1f/c7/5a/1fc75a0e-10ca-4268-3de5-7fa6566c1ca2/AppIcon-0-0-1x_U007epad-0-1-0-85-220.jpeg/492x0w.webp",
  },
  {
    name: "A320 Simulator",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/12/f8/61/12f8616d-8e12-21d3-91a4-0eda47f12777/AppIcon-0-0-1x_U007epad-0-1-85-220.png/460x0w.webp7",
  },
];

const AircraftCardList = () => {
  return (
    <motion.div
      className="rounded-lg bg-white overflow-hidden font-geist border border-[#D9D9D9]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul>
        {aircraftData.map((aircraft, index) => (
          <motion.li
            key={index}
            className="border-b border-gray-200 last:border-none font-geist"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="#"
              className="flex items-center space-x-4 p-4 hover:bg-gray-100 transition-colors font-geist"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                <Image
                  src={aircraft.imageUrl}
                  alt={aircraft.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 font-geist">
                <h3 className="text-lg font-semibold text-gray-900 font-geist">{aircraft.name}</h3>
              </div>
              <motion.div
                className="text-gray-500 hover:text-gray-700 transition-colors font-geist"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Learn More →
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AircraftCardList;