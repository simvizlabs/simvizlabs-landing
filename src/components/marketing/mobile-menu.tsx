"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/functions";
import { useClickOutside } from "@/hooks";
import { motion } from "framer-motion";
import {
  Award,
  Box,
  CalendarClock,
  Captions,
  CircleHelp,
  CopyCheck,
  FileText,
  Gem,
  Layers3,
  LineChart,
  UserCog,
  Waypoints,
  AppWindow,
  BookOpen,
  Code2,
  Database,
  GraduationCap,
  MonitorSmartphone,
  Newspaper,
  Plane,
  Radio,
  Smartphone,
  University,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  const ref = useClickOutside(() => setIsOpen(false));

  const variants = {
    open: { opacity: 1, y: 20 },
    closed: { opacity: 0, y: 0 },
  };

  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-12 inset-x-0 size-full p-4 z-20 bg-white/70 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 flex flex-1 shadow-lg",
        isOpen ? "flex" : "hidden"
      )}
    >
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{
          type: "spring",
          bounce: 0.15,
          duration: 0.5,
        }}
        className="size-full flex flex-col justify-start"
      >
        <ul className="flex flex-col items-start flex-1 w-full space-y-3">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-transparent">
              <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                <span className="flex items-center">
                  <Plane className="w-4 h-4 mr-2" />
                  Airline Solutions
                </span>
              </AccordionTrigger>
              <AccordionContent
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-start gap-1 mt-1"
              >
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/" className="flex items-center w-full text-start">
                    <Database className="w-4 h-4 mr-2" />
                    ImmersiData
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/" className="flex items-center w-full text-start">
                    <MonitorSmartphone className="w-4 h-4 mr-2" />
                    FMS Trainer
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/" className="flex items-center w-full text-start">
                    <Radio className="w-4 h-4 mr-2" />
                    ACARS Trainer
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/" className="flex items-center w-full text-start">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    LMS
                  </Link>
                </li>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-transparent">
              <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                <span className="flex items-center">
                  <University className="w-4 h-4 mr-2" />
                  Aeronautical College Solutions
                </span>
              </AccordionTrigger>
              <AccordionContent
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-start gap-1 mt-1"
              >
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/" className="flex items-center w-full text-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    LMS Course
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/" className="flex items-center w-full text-start">
                    <Smartphone className="w-4 h-4 mr-2" />
                    iOS-Based Simulators
                  </Link>
                </li>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-transparent">
              <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                <span className="flex items-center">
                  <AppWindow className="w-4 h-4 mr-2" />
                  iOS Simulators
                </span>
              </AccordionTrigger>
              <AccordionContent
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-start gap-1 mt-1"
              >
                {/* B747 to B757 items with Plane icon */}
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="https://apps.apple.com/us/app/fms-trainer-b747/id6464125512" target="_blank" rel="noopener noreferrer" className="flex items-center w-full text-start">
                    <Plane className="w-4 h-4 mr-2" />
                    B747
                  </Link>
                </li>
                {/* Repeat for B737, B767, B757 with same structure */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <li onClick={() => setIsOpen(false)} className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
            <Link href="/" className="flex items-center w-full text-start">
              <Code2 className="w-4 h-4 mr-2" />
              API for Developers
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
