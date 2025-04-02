"use client";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../global/container";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/carousel-imgs/1.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/carousel-imgs/2.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm so impressed. This is the best thing I've ever seen.",
    img: "/images/carousel-imgs/3.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "This is a game changer. I'm so excited to use this.",
    img: "/images/carousel-imgs/4.png",
  },
  {
    name: "Doe",
    username: "@doe",
    body: "Absolutely fantastic. Highly recommend to everyone.",
    img: "/images/carousel-imgs/5.png",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "Incredible experience. This is the future of learning.",
    img: "/images/carousel-imgs/6.png",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "I'm blown away by the quality and effectiveness.",
    img: "/images/carousel-imgs/7.png",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This has exceeded all my expectations. Brilliant!",
    img: "/images/carousel-imgs/8.png",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "A revolutionary tool for aviation training.",
    img: "/images/carousel-imgs/9.png",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "Simply outstanding. A must-have for all pilots.",
    img: "/images/carousel-imgs/10.png",
  },
  {
    name: "Frank",
    username: "@frank",
    body: "Top-notch training tool. Highly effective.",
    img: "/images/carousel-imgs/11.png",
  },

  {
    name: "John",
    username: "@john",
    body: "Top-notch training tool. Highly effective.",
    img: "/images/carousel-imgs/12.png",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <div className="relative w-48 md:w-72 px-2 md:px-3">
      <div className="flex flex-row items-center">
        <div className="flex flex-col w-full">
          <Image
            src={img}
            alt={`Screenshot related to review by ${name}`} // More descriptive alt text
            width={1080}
            height={1080}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000); // This makes it slower

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="flex flex-col items-center w-full my-20 z-40 relative">
      <Container delay={0.0}>
        <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-[200%_auto] bg-clip-text text-sm text-transparent">
            Disrupting Distant Learning
            <span className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border border-blue-200/30 dark:border-blue-700/30 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center group">
              Learn More
              <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-blue-500 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </span>
        </div>
      </Container>
      <div className="mx-auto max-w-5xl pb-2 text-center ">
        {/* Changed h2 to h1 for SEO */}
        <h1 className="pt-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-4 font-nacelle text-4xl font-bold md:text-6xl md:leading-tight tracking-[-0.015em] mx-auto max-w-7xl">
          Next-Gen Aviation Training <br />
          <span className="text-2xl md:text-4xl font-bold">
          SAFER OPERATIONS WITH BETTER TRAINED PILOTS
          </span>
        </h1>
        <p className="text-lg text-gray-900">
        Experience aviation distance learning powered by interactive data-driven training. Our solutions identify knowledge gaps, provide actionable insights and deliver real-time feedback to enhance safety and standards.
        </p>
      </div>
      <Container delay={0.2}>
        <div className="flex items-center justify-center  ">
          {/* <Button asChild size="lg">
            <Link href="https://calendly.com/simvizlabs_demo/30min">
              Schedule a Call
            </Link>
          </Button> */}
          {/* <Button
            asChild
            size="lg"
            variant="outline"
            className="hidden md:flex"
          >
            <Link href="https://apps.apple.com/us/app/fms-trainer-b747/id6464125512">
              Download our App
            </Link>
          </Button> */}
        </div>
      </Container>
      {/* <Container delay={0.3}>
        <div className="w-full py-4 lg:py-4">
          <div className="w-full px-0">
            <div className="flex flex-col">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {Array.from({ length: 11 }).map((_, index) => (
                    <CarouselItem
                      className="basis-1/3 md:basis-1/4 lg:basis-1/6"
                      key={index}
                    >
                      <div className="flex rounded-md aspect-square bg-muted items-center justify-center ">
                        <Image src={`/images/carousel-imgs/${index+1}.png`} alt="logo" width={1920} height={1080} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </Container> */}
      <div className="w-screen overflow-hidden relative mt-8 h-48 md:h-64 left-0">
        <div className="w-full absolute z-50 left-0">
          <Marquee pauseOnHover className="[--duration:30s] !p-0 !m-0">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
      {/* <Container delay={0.3}>
        <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12">
          <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

          <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black">
            <Image
              src="/images/newDashboard.png"
              alt="dashboard"
              width={1920}
              height={1080}
              className="rounded-lg lg:rounded-[20px]"
            />
          </div>
        </div>
      </Container> */}
      {/* <TimelineDemo /> */}
    </div>
  );
};

export default Hero;
