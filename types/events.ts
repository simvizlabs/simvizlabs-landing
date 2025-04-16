export interface Event {
  title: string;
  isChecked: boolean;
}

export interface EventsItem {
  year: number;
  periodType: "Q" | "H";
  periodNumber: number;
  isChecked: boolean;
  events: Event[];
  description?: string;
}

export type Events = EventsItem[];
