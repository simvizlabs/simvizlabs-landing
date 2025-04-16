"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Events } from "@/types/events";
import { events } from "@/data/events";

export default function VerticalEventTimeline() {
  // Helper function to format period
  const formatPeriod = (item: Events[0]) => {
    if (item.periodType === "Q") {
      return `Q${item.periodNumber} ${item.year}`;
    } else if (item.periodType === "H") {
      return `H${item.periodNumber} ${item.year}`;
    }
    return `${item.year}`;
  };

  return (
    <div className="mx-auto px-4 py-12 max-w-5xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project Timeline
      </motion.h1>

      <motion.p
        className="text-muted-foreground text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our development journey and milestones
      </motion.p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20 z-0"></div>

        {events.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-12 relative z-10 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10"></div>

            {/* Date badge - visible on mobile and on appropriate side for desktop */}
            <div
              className={`md:w-1/2 flex ${
                index % 2 === 0
                  ? "md:justify-end md:pr-8"
                  : "md:justify-start md:pl-8"
              }`}
            >
              <motion.div className="mb-4 md:mb-0" whileHover={{ scale: 1.05 }}>
                <div className={`${item.periodType === "Q" && item.periodNumber === 2 ? "text-left" : "text-right"}`}>
                  <Badge
                    variant="outline"
                    className="text-sm py-1 px-3 bg-primary/5 border-primary/20"
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatPeriod(item)}
                  </Badge>
                  <p className="text-base mt-2 space-y-2">
                    {item.description?.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                        &nbsp;
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Card - takes full width on mobile, half width on desktop */}
            <div
              className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}
            >
              <motion.div
                layout
                className="w-full"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    {/* You can add content here if needed */}
                  </CardContent>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.events[0].title}
                      className="h-full w-full object-cover rounded-md"
                      width={500}
                      height={500}
                    />
                  )}
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
