"use client";

import { HovermeButton } from "@/components/eldoraui/hoverme-button";

import * as React from "react";

interface HovermeButtonDemoProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function HovermeButtonDemo({ text, className, ...props }: HovermeButtonDemoProps) {
  return <HovermeButton text={text} className={className} {...props} />;
}