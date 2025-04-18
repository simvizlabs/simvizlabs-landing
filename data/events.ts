import { Events } from "@/types/events";

export const events: Events = [
  {
    year: 2023,
    periodType: "Q",
    periodNumber: 1,
    isChecked: true,
    tag: "Data Input and Collection",
    events: [
      { title: "Project Kickoff", isChecked: true },
      { title: "Initial Design Phase", isChecked: true },
    ],
    description: `Model receives initial data inputs to establish a baseline for Course development.

    De-identified data received from Training departments requiring focus.

    Flight Events and tasks requiring special focus, recommended by TI's and Check Pilots.

    Initial Set of Data Collected by running Pilot program utilizing Emulators and LMS initial scenarios.`,
    image: '/images/timeline1.png',
  },
  {
    year: 2023,
    periodType: "Q",
    periodNumber: 2,
    isChecked: true,
    tag: "Filtering and Selection",
    events: [
      { title: "Frontend Development", isChecked: true },
      { title: "Backend Development", isChecked: true },
    ],
    description: `Filtering algorithm creates set of initial scenarios consisting of tasks and events requiring focus.

    Filtering system selects specific events and tasks to create set of scenarios and recommendation for LMS course.

    Model identifies and pin points knowledge gaps and need for standardization implementation.

    Produces performance based dashboards.`,
    image: '/images/timeline2.png',
  },
  {
    year: 2023,
    periodType: "Q",
    periodNumber: 3,
    isChecked: false,
    tag: "Final Scenarios and Courseware",
    events: [
      { title: "Testing and QA", isChecked: false },
      { title: "Deployment", isChecked: false },
    ],
    description: `Model pushes and Runs the Scenarios to Emulators.

    Final Recommendations are made to Decision makers and Instructors.

    Final LMS courses are Pushed.`,
    image: '/images/timeline3.png',
  },
];
