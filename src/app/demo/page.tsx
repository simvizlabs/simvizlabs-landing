import Head from "next/head";
import MuxPlayer from "@mux/mux-player-react";
const Demo = () => {
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
    {
      id: "general-content",
      title: "General Content",
      description:
        "The development process was marked by countless hours of research, prototyping, and iteration. We explored various machine learning algorithms and deep neural network architectures to ensure optimal performance and accuracy in content classification. Through rigorous testing and fine-tuning, we trained our AI model to recognize patterns, categorize assets, and recommend relevant collections with impressive precision.",
      subpoints: [
        {
          title: "Defining the Vision",
          description:
            "We begin by discussing the initial vision behind AI-Collections and the objectives we aimed to achieve. We highlight the need for a sophisticated content curation system that leverages AI capabilities to enhance user experiences and streamline information discovery.",
        },
        {
          title: "Team Collaboration",
          description:
            "Successful projects require effective teamwork. We emphasize the importance of collaboration and detail how our team of experts, including developers, data scientists, and designers, worked together to bring AI-Collections to life. We share insights on how we fostered a creative and innovative environment throughout the development process.",
        },
        {
          title: "Data Acquisition and Management",
          description:
            "Content demands a reliable and extensive dataset. We provide an overview of the strategies we employed to gather and manage the data required for AI-Collections. This includes sourcing relevant content, data cleaning, and ensuring data quality and diversity.",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>ACARS/FMC Preflight Trainer</title>
        <meta
          name="description"
          content="ACARS/FMC Preflight Trainer application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="relative py-12 md:py-24 bg-slate-100 dark:bg-gray-900 text-black">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/3 lg:pt-24 px-4">
                <h4 className="font-bold  mb-5">TABLE OF CONTENTS</h4>
                <ul className="mb-12">
                  {[
                    { id: "introduction", label: "Introduction" },
                    {
                      id: "acars-preflight-planning",
                      label: "ACARS Pre-Flight Planning",
                    },
                    {
                      id: "acars-performance-request",
                      label: "ACARS Performance Request",
                    },
                    { id: "acars-messaging", label: "ACARS Messaging" },
                    {
                      id: "fmc-preflight-planning",
                      label: "FMC Preflight Planning",
                    },
                    {
                      id: "fmc-inflight-training",
                      label: "FMC Inflight Training",
                    },
                    { id: "real-time-data", label: "Real-Time Data" },
                    {
                      id: "features-coming-soon",
                      label: "Features Coming Soon",
                    },
                    {
                      id: "customization-for-airlines",
                      label: "Customization for Airlines",
                    },
                  ].map((item) => (
                    <li className="mb-5" key={item.id}>
                      <a
                        className="inline-block px-6 text-lg font-medium text-black hover:text-yellowGreen-600"
                        href={`#${item.id}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-2/3 px-4">
                <a
                  className="inline-flex mb-12 items-center font-bold  hover:text-teal-600"
                  href="/"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4167 10H5M5 10L10 5M5 10L10 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="ml-2">Back to Home</span>
                </a>
                <MuxPlayer
                  playback-id="fmBHzKIt701spuwRwqmFCYWxhctLTMEFyUcpZTn2iKtg"
                  metadata={{
                    video_title: "App-demo",
                    viewer_user_id: "user-id-placeholder",
                  }}
                  accent-color="#A3E339"
                  className="block mb-12 w-full object-cover"
                  style={{ borderRadius: "1rem" }}
                ></MuxPlayer>

                <h2 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold  mb-12">
                  ACARS/FMC Preflight Trainer
                </h2>

                {contentSections.map((section) => (
                  <div className="mb-12" key={section.id}>
                    <h4
                      className="text-3xl  font-bold mb-6"
                      id={section.id}
                    >
                      {section.title}
                    </h4>
                    <p className="text-lg  mb-6">
                      {section.description}
                    </p>
                  </div>
                ))}

                {/* <div className="py-4 px-6 border border-gray-800 bg-gray-800 rounded-lg">
                  <span className="inline-block mr-2 text-lg text-gray-300">
                    Interested in building this for your business?
                  </span>
                  <a
                    className="group inline-flex items-center text-base font-bold text-yellowGreen-600 hover:text-yellowGreen-400 transition duration-100"
                    href="mailto:info@simvizlabs.com"
                  >
                    <span className="mr-2">Contact Us</span>
                    <span className="transform group-hover:translate-x-1 transition duration-100">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99984 10H15.4165M15.4165 10L10.4165 5M15.4165 10L10.4165 15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Demo;
