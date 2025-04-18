import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Airline Solutions",
    links: [
      {
        title: "ImmersiData",
        href: "#",
      },
      {
        title: "Distance Learning",
        href: "#",
      },
        {
        title: "FMS Trainer",
        href: "#",
      },
      {
        title: "ACARS Trainer",
        href: "#",
      },
    ],
  },
  {
    title: "Aeronautical College Solutions",
    links: [
      {
        title: "LMS Course",
        href: "#",
      },
      {
        title: "iOS-Based Simulators",
        href: "#",
      },
      {
        title: "Training Resources",
        href: "#",
      },
    ],
  },
  {
    title: "iOS Simulators",
    links: [
      {
        title: "B747",
        href: "#",
      },
      {
        title: "B737",
        href: "#",
      },
      {
        title: "B767",
        href: "#",
      },
      {
        title: "B757",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms",
        href: "#",
      },
      {
        title: "Privacy",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-10 px-6">
        <div className="col-span-full xl:col-span-2">
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
            Empower your business with our FMS Solutions.
          </p>
        </div>

        {footerSections.map(({ title, links }) => (
          <div key={title} className="xl:justify-self-end">
            <h6 className="font-semibold text-foreground">{title}</h6>
            <ul className="mt-6 space-y-4">
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
          <Link href="https://shadcnui-blocks.com" target="_blank">
            Shadcn UI Blocks
          </Link>
          . All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="#" target="_blank">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <DribbbleIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <TwitchIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <GithubIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;