"use client"; // Required for potential future client-side interactions like active link highlighting

import React from "react"; // Import React if not already present
import MuxPlayer from "@mux/mux-player-react"; // Import MuxPlayer
import Link from "next/link"; // Import Link for navigation
import { Button } from "@/components/ui/button"; // Import Button component
import { ArrowLeft } from "lucide-react"; // Import icon

const Demo = () => {
  // Original content sections from the demo page
  const contentSections = [
     {
      id: "introduction",
      title: "Introduction",
      description:
        "ACARS/FMC Preflight Trainer is the first free-play replica of a Boeing ACARS/FMC, offering fully customizable scenarios created by experienced SIM Instructors. This app is designed for pilots learning airline transport category aircraft or transitioning from Airbus to Boeing. Experience a comprehensive and realistic preflight training with ACARS/FMC Preflight Trainer, tailored to enhance your proficiency and confidence in managing airline transport category aircraft.",
    },
    {
      id: "acars-preflight-planning",
      title: "ACARS Pre-Flight Planning",
      description:
        "Initialize the ACARS and navigate through all initial required steps. Request ATC clearance, receive real-time ATIS, and practice filling out position reports pages. Plan your flight route and calculate fuel consumption.",
    },
    {
      id: "acars-performance-request",
      title: "ACARS Performance Request",
      description:
        "Request Take-Off and Landing Data for both normal and non-normal scenarios. Select different aircraft configurations and practice reviewing performance data. Understand how various runway and weight conditions affect required runway length, Autobrake settings, brake energy temperatures, and Bleed/Pack requirements.",
    },
    {
      id: "acars-messaging",
      title: "ACARS Messaging",
      description:
        "Stay connected with air traffic control through uplink and downlink messages. Receive weather updates and communicate with other pilots.",
    },
    {
      id: "fmc-preflight-planning",
      title: "FMC Preflight Planning",
      description:
        "Input flight plans, manage waypoints, and program preflight Vertical and Lateral Navigation (VNAV, LNAV). Practice building runways and standard departure procedures, connecting and closing route discontinuities. Perform Performance Preflight by inputting Perf-Init Data (ZFW), Take-off Data, and Noise Abatement procedures from the originating airport. The application simulates a training environment for ACARS/FMC preflight procedures for various Origin/Destination combinations.",
    },
    {
      id: "fmc-inflight-training",
      title: "FMC Inflight Training",
      description:
        "Practice inserting GPS waypoints, Nav Aids, and integrating route changes. Train for re-routes and airways intercepts. Build approach and arrival procedures by selecting runways and STARS from the database. Practice flight management in high workload environments.",
    },
    {
      id: "real-time-data",
      title: "Real-Time Data",
      description:
        "Stay updated with real-time aircraft data. Request ATIS, METAR, and TAF to ensure you have the latest information.",
    },
    {
      id: "features-coming-soon",
      title: "Features Coming Soon",
      description:
        "LNAV route intercepts, LNAV/VNAV approaches with the ability to capture VNAV PTH from different VNAV modes, expanded database, and ability to reposition aircraft in a terminal environment to recreate various scenarios.",
    },
    {
      id: "customization-for-airlines",
      title: "Customization for Airlines",
      description:
        "The application can be customized for your fleet, page layouts, flows, and performance database. This is a dynamic application with new features, screens, and data added on a regular basis. Please email us for additional information info@simvizlabs.com.",
    },
     // Note: Removed the 'general-content' section as it wasn't in the original sidebar list and seems less relevant to the core trainer features. Add back if needed.
  ];

  // Map original contentSections to labels needed for the sidebar
  const sidebarLinks = contentSections.map(section => ({
    id: section.id,
    label: section.title, // Use the original section title as the label
  }));

  const demoVideoPlaybackId = "NAlZBt01ISNRC4Imki02KptnBwe02K1eEFrhbZyoslqOgU"; // Provided playback ID

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
            ACARS/FMC Preflight Trainer Demo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the features of the ACARS/FMC Preflight Trainer. Use the sidebar to navigate between sections.
          </p>
        </div>
        {/* Removed the extra <p> tag here */}
      </div>

      {/* Main Layout: Sidebar + Content */}
      <div className="flex flex-col lg:flex-row gap-12">

        {/* Sidebar (Table of Contents) */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit"> {/* Sticky sidebar */}
          <h4 className="font-semibold text-lg mb-4 text-muted-foreground uppercase tracking-wider">
            Features Overview
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

        {/* Main Content Area */}
        <main className="w-full lg:w-3/4">
          {/* Add Mux Player at the top */}
           <div className="aspect-video w-full rounded-lg overflow-hidden mb-16"> {/* Container for player, added more bottom margin */}
                <MuxPlayer
                  playbackId={demoVideoPlaybackId}
                  metadata={{
                    video_title: "ACARS/FMC Preflight Trainer Demo", // Descriptive title
                    viewer_user_id: "user-id-main-demo", // Example user ID
                  }}
                  primaryColor="#FFFFFF"
                  secondaryColor="#000000"
                  accentColor="#A3E339" // Using original accent color from demo
                  streamType="on-demand"
                  className="w-full h-full"
                />
              </div>

          {/* Render content sections */}
          {contentSections.map((section) => (
            <section key={section.id} id={section.id} className="mb-16 scroll-mt-24"> {/* scroll-mt for sticky header offset */}
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {section.description}
              </p>
              {/* Add a divider */}
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

export default Demo;