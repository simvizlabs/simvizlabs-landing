import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Our Solutions",
    links: [
      
      {
        title: "Airlines",
        href: "/airlines",
      },
    
      {
        title: "Aeronautical Schools",
        href: "/aeronautical-schools",
      },
      {
        title: "Type Rating Organizations",
        href: "/type-rating-schools",
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

const Footer = () => {
  return (
    <footer className=" dark bg-black">
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-6">
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
          {/* Logo */}
          <Image
            src="/logo-dark.png"
            alt="SimvizLabs"
            width={48}
            height={48}
            className="fill-foreground"
          />
          <p className="mt-2 font-bold text-white">SimvizLabs</p>

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
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          SimvizLabs LLC. All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="https://www.instagram.com/simvizlabs/" target="_blank">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/company/simvizlabs/" target="_blank">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61571811252329" target="_blank">
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;