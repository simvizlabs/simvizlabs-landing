"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/functions";
import { useClickOutside } from "@/hooks";
import { motion } from "framer-motion";
import { Award, Box, CalendarClock, Captions, CircleHelp, CopyCheck, FileText, Gem, Layers3, LineChart, Newspaper, Plane, University, UserCog, Waypoints } from "lucide-react";
import Link from "next/link";
import React from 'react';

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
          "absolute top-12 inset-x-0 size-full p-4 z-20 bg-inherit flex flex-1",
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
                    Airlines
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-start gap-1 mt-1"
                >
                  <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                    <Link
                      href="/"
                      className="flex items-center w-full text-start"
                    >
                      <Newspaper className="w-4 h-4 mr-2" />
                      Interactive Web Apps
                    </Link>
                  </li>
                  <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                    <Link
                      href="/"
                      className="flex items-center w-full text-start"
                    >
                      <Newspaper className="w-4 h-4 mr-2" />
                      Distant Learning
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
                    Aeronautical Schools
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-start gap-1 mt-1"
                >
                  <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                    <Link
                      href="/"
                      className="flex items-center w-full text-start"
                    >
                      <Newspaper className="w-4 h-4 mr-2" />
                      LMS Course
                    </Link>
                  </li>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-transparent">
                <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                  <span className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Students & Professional Pilots
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-start gap-1 mt-1"
                >
                  <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                    <Link
                      href="/"
                      className="flex items-center w-full text-start"
                    >
                      <Newspaper className="w-4 h-4 mr-2" />
                      B747
                    </Link>
                  </li>{" "}
                  <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                    <Link
                      href="/"
                      className="flex items-center w-full text-start"
                    >
                      <Newspaper className="w-4 h-4 mr-2" />
                      B737
                    </Link>
                  </li>
                  <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                    <Link
                      href="/"
                      className="flex items-center w-full text-start"
                    >
                      <Newspaper className="w-4 h-4 mr-2" />
                      B767
                    </Link>
                  </li>
                  <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                    <Link
                      href="/"
                      className="flex items-center w-full text-start"
                    >
                      <Newspaper className="w-4 h-4 mr-2" />
                      B757
                    </Link>
                  </li>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
            >
              <Link href="/" className="flex items-center w-full text-start">
                <Waypoints className="w-4 h-4 mr-2" />
                API for Developers
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    );
};

export default MobileMenu
