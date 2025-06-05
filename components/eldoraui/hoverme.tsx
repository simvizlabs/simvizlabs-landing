"use client";

import { HovermeButton } from "@/components/eldoraui/hoverme-button";

import * as React from "react";

interface HovermeButtonDemoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon?: React.ReactNode;
  href?: string; // Add href prop
}

export function HovermeButtonDemo({ text, className, onClick, icon, href, ...props }: HovermeButtonDemoProps) {
  return <HovermeButton text={text} className={className} onClick={onClick} icon={icon} href={href} {...props} />;
}