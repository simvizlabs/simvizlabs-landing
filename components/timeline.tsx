"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/events";

export default function VerticalEventTimeline() {

  return (
    <div className="mx-auto px-4 py-12 max-w-5xl">
      <motion.h1
        className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How our Platform works!
      </motion.h1>

      <motion.p
        className="text-muted-foreground text-lg font-geist leading-relaxed text-center xs:text-left sm:text-center mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our platform is designed to transform training — combining emulators, interactive LMS,<br />
        and a seamless data pipeline to craft dynamic scenarios that evolve with your training needs.
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
                <div className={`text-left pt-12 pl-4 ${item.periodType === "Q" && item.periodNumber === 2 ? "md:text-left" : "md:text-right"}`}>
                  <Badge
                    variant="outline"
                    className="text-sm py-1 px-3 bg-primary/5 border-primary/20"
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.tag}
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
              className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8 pl-4" : "md:pr-8 pl-4"}`}
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
