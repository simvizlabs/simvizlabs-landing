"use client";

import { RetroGrid } from "@/components/magicui/retro-grid";

import { Button } from "@/components/ui/button";

export function RetroGridDemo() {
  return (
    <div className="mx-auto max-w-2xl px-8 lg:max-w-7xl lg:px-8 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background pt-12">
      <span className="pointer-events-none z-10 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-center text-4xl sm:text-6xl font-bold leading-none tracking-tighter text-transparent">
        Transform Your Training Journey Today!
      </span>
      <p className="text-lg text-foreground/80 mt-4 text-center">
        Ready to optimize your training? Download our app or schedule a call
        with our experts to elevate your aviation training experience.
      </p>
      <div className="flex mt-4 space-x-2 z-10">
        <Button className="bg-blue-500 text-white">Schedule a Call</Button>
        <Button variant="outline">Download our Apps</Button>
      </div>

      <RetroGrid />
    </div>
  );
}
