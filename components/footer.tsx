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
        title: "B737",
        href: "/our-products?product=b737",
      },
      {
        title: "B747",
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
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-6">
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={"/logo.svg"}
              alt="SimViz Labs"
              width={48}
              height={48}
              className={cn("")}
            />
          <p className={cn("mt-2 font-bold", "text-black")}>SimViz Labs</p>
          </div>

          <p className="mt-4 text-black/70">
            Next Generation Aviation Solutions.
          </p>
          {/* <p className="mt-4 text-muted-foreground">
            HeadQuaters
          </p>
          <p className="mt-4 text-muted-foreground">
            USA
          </p>
          <p className="mt-4 text-muted-foreground">
            Next Generation Aviation Solutions.
          </p>
          <p className="mt-4 text-muted-foreground">
            Next Generation Aviation Solutions.
          </p> */}
        </div>

        {footerSections.map(({ title, links }) => (
          <div key={title} className="xl:justify-self-end">
            <h6 className="font-semibold text-black">{title}</h6>
            <ul className="mt-6 space-y-2">
              {links.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
        <Separator className={"bg-black/10"} />
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-black/70 text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          SimViz Labs LLC. All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-black/70">
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
    </footer >
  );
};

export default Footer;