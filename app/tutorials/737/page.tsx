"use client"; // Required for potential future client-side interactions like active link highlighting

import React from "react"; // Import React if not already present
import MuxPlayer from "@mux/mux-player-react"; // Import MuxPlayer
import Link from "next/link"; // Import Link for navigation
import { Button } from "@/components/ui/button"; // Import Button component
import { ArrowLeft } from "lucide-react"; // Import icon

const SevenThreeSevenDemo = () => {
  // Updated content based on user feedback, including playback IDs
  const contentSections = [
    {
      id: "tutorial-1.0",
      number: "1.0",
      title: "IDENT PAGE Verification",
      description: "Compare IDENT page data with the OFP and verify current database in use. Accomplish position verification using GPS Coordinates.",
      playbackId: "kYXpLGuuUf9MuhvQGprBK8Ud83bv02VWGiKZvNRXI4Qc",
    },
    {
      id: "tutorial-1.5",
      number: "1.5",
      title: "Application Overview",
      description: "General overview of the Application.",
      playbackId: "GPi69501It8abxwA02MeUBkvmAeCnQYEglL01Rsc9Hbz0200",
    },
    {
      id: "tutorial-2.0",
      number: "2.0",
      title: "IRS Initialization",
      description: "Verify IRS position and Initial Route programming.",
      playbackId: "ci7GkN016XbWdRNK7UQK4WcrutRLEUlj9jQw4ysCLA01c",
    },
    {
      id: "tutorial-3.0",
      number: "3.0",
      title: "Route Programming",
      description: "Accomplish Route programming using Operational flight plan ATC strip, understand different components of Route page and valid entries.",
      playbackId: "fchLiqNRQknLA11JStv02pm28Am01Ko3NFrWzHcC5VBr4",
    },
    {
      id: "tutorial-4.0",
      number: "4.0",
      title: "Legs Page and Flight Plan Progress",
      description: "Accomplish verification for SID’s and enroute waypoints cross-check total distance between city pairs.",
      playbackId: "lvVGXiMUoSgNguyZ02Hm2sK6L3UmPdCBhlv8NKqf5lPw",
    },
    {
      id: "tutorial-5.0",
      number: "5.0",
      title: "SID and Transition",
      description: "Learn how to select departure runways with assigned SID’s and transitions and connect them with the filed or assigned route. Understand the scenarios which create the flight plan discontinuities.",
      playbackId: "00NCSxggNMGQzNz5wAlsIWrZzRiF4yfWFax5Fphx2Qig",
    },
    {
      id: "tutorial-6.0",
      number: "6.0",
      title: "Performance Initialization",
      description: "Get comprehensive understanding of the performance initialization page and how it enables the function of VNAV. Understand required entries for VNAV calculation and Auto throttle functions and where to locate appropriate data.",
      playbackId: "LzpMjjbI1rXeqpFu2Dfni5CKN9C5erYjsOM01JNHdAyo",
    },
  ];

  // Map contentSections to labels needed for the sidebar, using tutorial number
  const sidebarLinks = contentSections.map(section => ({
    id: section.id,
    label: `Tutorial ${section.number}`, // Use Tutorial Number for label
  }));


  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Page Header */}
      <div className="mb-12 md:mb-16">
         {/* Back Button - Centered */}
         <div className="mb-8 text-center"> {/* Centered container with more margin */}
          <Link href="/tutorials" legacyBehavior>
            {/* Apply background, padding, and rounding */}
            <Button className="bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground px-4 py-2 rounded-md">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tutorials
            </Button>
          </Link>
        </div>
         {/* Centered Heading and Subtitle */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            737 App Tutorials
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the tutorials for the Boeing 737 iPad App.
          </p>
        </div>
      </div>

      {/* Main Layout: Sidebar + Content */}
      <div className="flex flex-col lg:flex-row gap-12">

        {/* Sidebar (Table of Contents) */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit"> {/* Sticky sidebar */}
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
                    // Add active state styling later if needed
                  >
                    {item.label} {/* Label now shows "Tutorial X.Y" */}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="w-full lg:w-3/4">
          {contentSections.map((section) => (
            <section key={section.id} id={section.id} className="mb-16 scroll-mt-24"> {/* scroll-mt for sticky header offset */}
              {/* Display Tutorial Number before Title */}
              <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                Tutorial {section.number}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6"> {/* Added margin-bottom */}
                {section.description}
              </p>
              {/* Add Mux Player */}
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-12"> {/* Container for player */}
                <MuxPlayer
                  playbackId={section.playbackId}
                  metadata={{
                    video_title: `Tutorial ${section.number}: ${section.title}`, // Use descriptive title
                    viewer_user_id: "user-id-737-demo", // Example user ID
                  }}
                  primaryColor="#FFFFFF" // Correct attribute format
                  secondaryColor="#000000" // Correct attribute format
                  accentColor="#0042aa" // Correct attribute format
                  streamType="on-demand" // Assuming these are VODs
                  className="w-full h-full"
                />
              </div>
              {/* Add a divider like in the reference */}
              <hr className="my-12 border-border" />
            </section>
          ))}
          {/* Remove the last divider */}
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

export default SevenThreeSevenDemo;