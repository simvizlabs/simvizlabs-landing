"use client";

import { HovermeButton } from "@/components/eldoraui/hoverme-button";

import * as React from "react";

interface HovermeButtonDemoProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
}

export function HovermeButtonDemo({ text, className, onClick, icon, ...props }: HovermeButtonDemoProps) {
  return <HovermeButton text={text} className={className} onClick={onClick} icon={icon} {...props} />;
}