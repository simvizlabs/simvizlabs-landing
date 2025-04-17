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
  image?: string;
  tag?: string;
}

export type Events = EventsItem[];
