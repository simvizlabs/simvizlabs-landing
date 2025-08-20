"use client"; // Required for potential future client-side interactions like active link highlighting

import React from "react"; // Import React if not already present
import Link from "next/link"; // Import Link for navigation
import { Button } from "@/components/ui/button"; // Import Button component
import { ArrowLeft } from "lucide-react"; // Import icon

const A320Tutorials = () => {
  const contentSections = [
    {
      id: "tutorial-1",
      number: "1",
      title: "Introduction",
      description: "An introduction to the A320.",
      iframe: (
        <iframe
          src="https://player.mux.com/zQVWw0001fjJsUPup00TN2fraQuupAWhMZDM02HoQhoDkAk?metadata-video-title=A320-tutorial-1&video-title=A320-tutorial-1"
          style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: "tutorial-2.1",
      number: "2.1",
      title: "FMGC Initialisation (DIFRIPPS)",
      description: "A detailed guide on FMGC initialisation.",
      iframe: (
        <iframe
          src="https://player.mux.com/cA5BKk6vIXYoyLBImvO02rKLmm2vEH00z5inKW00vcuTI8?metadata-video-title=A320-tutorial-2&video-title=A320-tutorial-2"
          style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: "tutorial-2.2",
      number: "2.2",
      title: "FMGC Initialisation (DIFRIPPS)",
      description: "Continuing the guide on FMGC initialisation.",
      iframe: (
        <iframe
          src="https://player.mux.com/adCvZ4SafBe00lyI7uBwdYx4LzhSUPnDKQbozSuywY00g?metadata-video-title=A320-tutorial-3&video-title=A320-tutorial-3"
          style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: "tutorial-2.3",
      number: "2.3",
      title: "FMGC Initialisation (DIFRIPPS)",
      description: "Final steps of FMGC initialisation.",
      iframe: (
        <iframe
          src="https://player.mux.com/FnOYlqoo00qFx00PcCkKGL494UufGb7hiwPmFJXE22WaQ?metadata-video-title=A320-tutorial-4&video-title=A320-tutorial-4"
          style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        ></iframe>
      ),
    },
  ];

  const sidebarLinks = contentSections.map(section => ({
    id: section.id,
    label: `Tutorial ${section.number}`,
  }));

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mb-12 md:mb-16">
        <div className="mb-8 text-center">
          <Link href="/tutorials" legacyBehavior>
            <Button className="bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground px-4 py-2 rounded-md">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tutorials
            </Button>
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            A320 App Tutorials
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the tutorials for the Airbus A320 iPad App.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit">
          <h4 className="font-semibold text-lg mb-4 text-muted-foreground uppercase tracking-wider">
            Tutorial Sections
          </h4>
          <nav>
            <ul>
              {sidebarLinks.map((item) => (
                <li key={item.id} className="mb-2">
                  <a
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="w-full lg:w-3/4">
          {contentSections.map((section) => (
            <section key={section.id} id={section.id} className="mb-16 scroll-mt-24">
              <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                Tutorial {section.number}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {section.title}
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-12">
                {section.iframe}
              </div>
              <hr className="my-12 border-border" />
            </section>
          ))}
          <style jsx>{`
            section:last-of-type hr {
              display: none;
            }
          `}</style>
        </main>
      </div>
    </div>
  );
};

export default A320Tutorials;