import { Events } from "@/types/events";

export const events: Events = [
  {
    year: 2023,
    periodType: "Q",
    periodNumber: 1,
    isChecked: true,
    events: [
      { title: "Project Kickoff", isChecked: true },
      { title: "Initial Design Phase", isChecked: true },
    ],
    description: `Model receives initial data inputs to establish a baseline for Course development.
    
    De-identified data received from Training departments requiring focus.
    
    Flight Events and tasks requiring special focus, recommended by TI's and Check Pilots.
    
    Initial Set of Data Collected by running Pilot program utilizing Emulators and LMS initial scenarios.`,
  },
  {
    year: 2023,
    periodType: "Q",
    periodNumber: 2,
    isChecked: true,
    events: [
      { title: "Frontend Development", isChecked: true },
      { title: "Backend Development", isChecked: true },
    ],
    description: `Filtering algorithm creates set of initial scenarios consisting of tasks and events requiring focus.
    
    Filtering system selects specific events and tasks to create set of scenarios and recommendation for LMS course.
    
    Model identifies and pin points knowledge gaps and need for standardization implementation.
    
    Produces performance based dashboards.`,
  },
  {
    year: 2023,
    periodType: "Q",
    periodNumber: 3,
    isChecked: false,
    events: [
      { title: "Testing and QA", isChecked: false },
      { title: "Deployment", isChecked: false },
    ],
    description: `Model pushes and Runs the Scenarios to Emulators.
    
    Final Recommendations are made to Decision makers and Instructors.
    
    Final LMS courses are Pushed.`,
  },
];
