import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Linkedin,
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
        title: "B747",
        href: "/products/747-bundle",
      },
      {
        title: "B737",
        href: "/products/737-bundle",
      },
      {
        title: "A320",
        href: "/products/a320-bundle",
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
  theme = "dark"
}: {
  className?: string;
  theme?: "dark" | "light";
}) => {
  const isDark = theme === "dark";

  return (
    <footer className={cn(
      "border-t font-geist",
      isDark ? "dark bg-black border-white/10" : "bg-white",
      className
    )}>
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-6">
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo-dark.png"
              alt="SimvizLabs"
              width={48}
              height={48}
              className={cn(isDark ? "" : "invert")}
            />
          </div>
          <p className={cn("mt-2 font-bold", isDark ? "text-white" : "text-black")}>SimvizLabs</p>

          <p className="mt-4 text-muted-foreground">
            Next Generation Aviation Solutions.
          </p>
        </div>

        {footerSections.map(({ title, links }) => (
          <div key={title} className="xl:justify-self-end">
            <h6 className="font-semibold text-foreground">{title}</h6>
            <ul className="mt-6 space-y-2">
              {links.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator className={isDark ? "bg-white/10" : "bg-black/10"} />
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          SimvizLabs LLC. All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="https://www.instagram.com/simvizlabs/" target="_blank" className="hover:text-foreground transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/company/simvizlabs/" target="_blank" className="hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61571811252329" target="_blank" className="hover:text-foreground transition-colors">
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;