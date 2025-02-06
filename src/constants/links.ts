import {
  ClockIcon,
  MessageSquare,
  BarChart2,
  FileTextIcon,
  UserPlusIcon,
  CreditCardIcon,
  SettingsIcon,
  LogOut,
  Headphones,
  ChartPieIcon,
  LucideIcon,
  MessagesSquareIcon,
  NewspaperIcon,
  MegaphoneIcon,
  LineChartIcon,
  MessageSquareTextIcon,
  UsersIcon,
} from "lucide-react";

type Link = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const SIDEBAR_LINKS: Link[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: ChartPieIcon,
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: LineChartIcon,
  },
  {
    href: "/dashboard/training",
    label: "Training",
    icon: MessageSquareTextIcon,
  },
  {
    href: "/dashboard/performance",
    label: "Performance",
    icon: UsersIcon,
  },
  {
    href: "/dashboard/billing",
    label: "Billing",
    icon: CreditCardIcon,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: SettingsIcon,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Airline Solutions",
    links: [
      { name: "ImmersiData", href: "/" },
      { name: "Distance Learning", href: "/" },
      { name: "FMS Trainer", href: "/" },
      { name: "ACARS Trainer", href: "/" },
    ],
  },
  {
    title: "Aeronautical College Solutions",
    links: [
      { name: "LMS Course", href: "/" },
      { name: "iOS-Based Simulators", href: "/" },
      { name: "Training Resources", href: "/" },
    ],
  },
  {
    title: "iOS Simulators",
    links: [
      { name: "B747", href: "https://apps.apple.com/us/app/fms-trainer-b747/id6464125512" },
      { name: "B737", href: "https://apps.apple.com/us/app/fms-trainer-b737/id6740346553" },
      { name: "B767", href: "/" },
      { name: "B757", href: "/" },
    ],
  },
  {
    title: "Developers",
    links: [
      { name: "API Documentation", href: "/" },
    
    ],
  },
];
