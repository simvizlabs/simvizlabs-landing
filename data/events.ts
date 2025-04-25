import { Events } from "@/types/events";

export const events: Events = [
  {
    year: 2023,
    periodType: "Q",
    periodNumber: 1,
    isChecked: true,
    tag: " Intelligent Data Ingestion",
    events: [
      { title: "Project Kickoff", isChecked: true },
      { title: "Initial Design Phase", isChecked: true },
    ],
    description: `The system begins by collecting initial training signals from emulators, LMS modules, and de-identified instructor notes. The baseline includes pilot actions, flight events, & checklist behavior flagged by Training Instructors or Check Pilots. 
    
Using real-time and pilot program data, our platform builds a foundational view of performance—identifying areas needing improvement and setting the stage for adaptive scenario generation and targeted content development.`,
    image: '/images/timeline1.png',
  },
  {
    year: 2023,
    periodType: "Q",
    periodNumber: 2,
    isChecked: true,
    tag: "Smart Scenario Generation",
    events: [
      { title: "Frontend Development", isChecked: true },
      { title: "Backend Development", isChecked: true },
    ],
    description: `Using built-in filtering algorithms, the system evaluates tagged events and performance indicators to isolate weak spots. It selects the most relevant training gaps—such as automation mismanagement, procedure skips, or unstable approaches—and matches them with data-driven training requirements.

    AI then crafts custom scenarios and learning paths mapped to each pilot’s profile. This stage also creates performance dashboards to highlight systemic gaps and standardization requirements across teams or fleets.`,
    image: '/images/timeline2.png',
  },
  {
    year: 2023,
    periodType: "Q",
    periodNumber: 3,
    isChecked: false,
    tag: "Adaptive Deployment & Feedback",
    events: [
      { title: "Testing and QA", isChecked: false },
      { title: "Deployment", isChecked: false },
    ],
    description: `Generated scenarios are delivered to emulators or simulator tools, while personalized LMS modules are auto-assigned to the trainee. Recommendations are pushed to decision-makers and instructors via intuitive dashboards.
    
    The entire cycle is performance-linked, with scenario results feeding back into the system to continually refine each pilot’s training path. This creates a dynamic, closed-loop learning ecosystem—driven by real data, focused on real outcomes.`,
    image: '/images/timeline3.png',
  },
];
