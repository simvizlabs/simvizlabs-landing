import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Linkedin,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerSections = [
  {
    title: "Our Solutions",
    links: [

      {
        title: "Airlines",
        href: "/airlines",
      },

      {
        title: "Flying Schools",
        href: "/flying-schools",
      },
      {
        title: "Approved Training Organisations",
        href: "/approved-training-organisations",
      },

    ],
  },
  {
    title: "Our Products",
    links: [
      {
        title: "A320",
        href: "/our-products?product=a320",
      },
      {
        title: "B737NG",
        href: "/our-products?product=b737",
      },
      {
        title: "B747-400",
        href: "/our-products?product=b747",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms",
        href: "/terms",
      },
      {
        title: "Privacy",
        href: "/privacy",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },
];

const Footer = ({
  className,
  bgColor = "bg-white",
  // theme = "dark",

}: {
  className?: string;
  bgColor?: string;
  // theme?: "dark" | "light";
}) => {
  // const isDark = theme === "dark";

  return (
    <footer className={cn(
      "",
      // isDark ? "dark bg-black border-white/10" : "bg-white",
      bgColor,
      className
    )}>
      <div className="w-full pl-4 sm:pl-8 pr-8 sm:pr-16 lg:pr-24 py-12">
        {/* Mobile: Column layout with first 2 sections in row, then single column */}
        <div className="flex flex-col md:hidden gap-8">
          {/* Logo section - full width on mobile */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={"/logo.svg"}
                alt="SimvizLabs"
                width={48}
                height={48}
                className={cn("")}
              />
              <p className={cn("mt-2 font-bold", "text-black")}>SimViz Labs</p>
            </div>
            <p className="mt-4 text-black/70">
              Next Generation Aviation Solutions.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-6 w-full">
              <div className="w-full">
                <p className="text-black text-sm uppercase tracking-wider">Headquarters</p>
                <p className="text-black/70">Chandler, AZ, USA</p>
              </div>
              <div className="w-full">
                <p className="text-black text-sm uppercase tracking-wider">Technology Center</p>
                <p className="text-black/70">New Delhi, India</p>
              </div>
              <div className="w-full">
                <p className="text-black text-sm uppercase tracking-wider">Regional Office</p>
                <p className="text-black/70">Singapore</p>
              </div>
            </div>
          </div>
          
          {/* First 2 sections in a row */}
          <div className="grid grid-cols-2 gap-8">
            {footerSections.slice(0, 2).map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold text-black mb-4">{title}</h6>
                <ul className="space-y-3">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-black/70 hover:text-black transition-colors text-sm"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Third section in single column */}
          <div>
            {footerSections.slice(2, 3).map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold text-black mb-4">{title}</h6>
                <ul className="space-y-3">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-black/70 hover:text-black transition-colors text-sm"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and Desktop: All in same row */}
        <div className="hidden md:flex flex-row items-start justify-between gap-8 lg:gap-12 xl:gap-16">
          <div className="flex-1 min-w-0">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={"/logo.svg"}
                alt="SimvizLabs"
                width={48}
                height={48}
                className={cn("")}
              />
              <p className={cn("font-bold text-black", "text-black")}>SimViz Labs</p>
            </div>

            <p className="text-black/70">
              Next Generation Aviation Solutions.
            </p>

            <div className="mt-6 flex flex-col gap-6">
              <div>
                <p className="text-black text-sm uppercase tracking-wider">Headquarters</p>
                <p className="text-black/70">Chandler, AZ, USA</p>
              </div>
              <div>
                <p className="text-black text-sm uppercase tracking-wider">Technology Center</p>
                <p className="text-black/70">New Delhi, India</p>
              </div>
              <div>
                <p className="text-black text-sm uppercase tracking-wider">Regional Office</p>
                <p className="text-black/70">Singapore</p>
              </div>
            </div>
          </div>

          {footerSections.map(({ title, links }) => (
            <div key={title} className="min-w-fit">
              <h6 className="font-semibold text-black mb-4">{title}</h6>
              <ul className="space-y-3">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-black/70 hover:text-black transition-colors text-sm"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="pl-4 sm:pl-8 pr-8 sm:pr-16 lg:pr-24">
        <Separator className="bg-black/10" />
      </div>

      <div className="w-full pl-4 sm:pl-8 pr-8 sm:pr-16 lg:pr-24 py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5">
        {/* Copyright */}
        <span className="text-black/70 text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()}{" "}
          SimViz Labs LLC. All rights reserved.
        </span>

        <div className="flex items-center gap-6 text-black/70">
          <Link href="https://www.instagram.com/simvizlabs/" target="_blank" className="hover:text-black transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/company/simvizlabs/" target="_blank" className="hover:text-black transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61571811252329" target="_blank" className="hover:text-black transition-colors">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="https://www.youtube.com/@simvizlabs" target="_blank" className="hover:text-black transition-colors">
            <YoutubeIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;