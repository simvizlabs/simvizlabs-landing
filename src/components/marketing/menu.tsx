"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { CalendarRangeIcon, CircleHelp, HashIcon, Plane, Database, GraduationCap, Radio, MonitorSmartphone, AppWindow, Code2, BookOpen, Smartphone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Icons from "../global/icons";

// Update the Props interface to include target and rel
interface Props {
    title: string;
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
    target?: string;
    rel?: string;
}

const Menu = () => {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          {/* <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            How it works
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
              Airline Solutions
            </NavigationMenuTrigger>
           <NavigationMenuContent>
              <ul className="grid rounded-3xl p-2 md:w-[300px] lg:w-[300px] xl:w-[300px] ">
                <Item
                  title="ImmersiData"
                  href="/features/content-calendar"
                  icon={<Database className="w-5 h-5" />}
                >
                  Interactive data driven training tools.
                </Item>
                <Item
                  title="FMS Trainer"
                  href="/features/content-calendar"
                  icon={<MonitorSmartphone className="w-5 h-5" />}
                >
                  FreePlay Replica of FMC
                </Item>
                <Item
                  title="ACARS Trainer"
                  href="/features/content-calendar"
                  icon={<Radio className="w-5 h-5" />}
                >
                  Sub-systems customized to AOC menu and Aircraft type
                </Item>
                <Item
                  title="LMS"
                  href="/features/content-calendar"
                  icon={<GraduationCap className="w-5 h-5" />}
                >
                  Interactive Learning Management Systems.
                </Item>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
              Aeronautical College Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid rounded-3xl p-2 md:w-[300px] lg:w-[300px] xl:w-[300px] ">
                <Item
                  title="LMS Course"
                  href="/features/content-calendar"
                  icon={<BookOpen className="w-5 h-5" />}
                >
                  Comprehensive Learning Management System.
                </Item>
                <Item
                  title="iOS-Based Simulators"
                  href="/features/content-calendar"
                  icon={<Smartphone className="w-5 h-5" />}
                >
                  Immersive flight training tools.
                </Item>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
              iOS Simulators
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[500px]">
                <Item
                  title="B747"
                  href="https://apps.apple.com/us/app/fms-trainer-b747/id6464125512"
                  icon={<Plane className="w-5 h-5" />}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Master FMC and ACARS systems.
                </Item>
                <Item
                  title="B737"
                  href="https://apps.apple.com/us/app/fms-trainer-b737/id6740346553"
                  icon={<Plane className="w-5 h-5" />}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Practice preflight of FMS and ACARS.
                </Item>
                <Item
                  title="B767"
                  href="/resources/support"
                  icon={<Plane className="w-5 h-5" />}
                >
                  Enhance skills with dynamic FMS training.
                </Item>
                <Item
                  title="B757"
                  href="/resources/support"
                  icon={<Plane className="w-5 h-5" />}
                >
                  Develop proficiency in FMS features.
                </Item>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Business Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href=""
                                        className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                                    >
                                        <Icons.icon className="w-6 h-6" />
                                        <div className="my-2 text-lg font-normal">
                                            PRO FMS Simulators
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                        Comprehensive transition course for Boeing
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Item title="LMS Course" href="/features/content-calendar" icon={<CalendarRangeIcon className="w-5 h-5" />}>
                            Introduction to FMS
                            </Item>
                            <Item title="Interactive Web Apps" href="/features/hashtag-manager" icon={<HashIcon className="w-5 h-5" />}>
                            Practice VNAV and LNAV Excercises
                            </Item>
                            <Item title="Competitor Analysis" href="/features/competitor-analysis" icon={<UsersIcon className="w-5 h-5" />}>
                                Monitor and analyze competitor performance.
                            </Item> 
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem> */}

          {/* <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}
          <NavigationMenuItem>
            <Link href="/integrations" legacyBehavior passHref>
              <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                APIs for Developers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
};

// Update the Item component to pass target and rel to Link
const Item = ({ title, href, children, icon, target, rel, ...props }: Props) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    passHref
                    href={href}
                    target={target}
                    rel={rel}
                    {...props}
                    className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                >
                    <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
                        {icon}
                    </div>
                    <div className="text-start ml-3">
                        <span className="text-sm group-hover:text-foreground font-normal leading-none">
                            {title}
                        </span>
                        <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
};

Item.displayName = "Item";

export default Menu
