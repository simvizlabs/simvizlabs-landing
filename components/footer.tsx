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
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 py-12 flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
        <div className="flex-1 max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={"/logo.svg"}
              alt="SimvizLabs"
              width={48}
              height={48}
              className={cn("")}
            />
            <p className={cn("mt-2 font-bold", "text-black")}>SimvizLabs</p>
          </div>

          <p className="mt-4 text-black/70">
            Next Generation Aviation Solutions.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div>
              <p className="text-black font-semibold text-sm uppercase tracking-wider">Headquarters</p>
              <p className="text-black/70">Chandler, AZ, USA</p>
            </div>
            <div>
              <p className="text-black font-semibold text-sm uppercase tracking-wider">Technology Center</p>
              <p className="text-black/70">New Delhi, India</p>
            </div>
            <div>
              <p className="text-black font-semibold text-sm uppercase tracking-wider">Regional Office</p>
              <p className="text-black/70">Singapore</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
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

      <div className="px-6 sm:px-12 md:px-16 lg:px-24">
        <Separator className="bg-black/10" />
      </div>

      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5">
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