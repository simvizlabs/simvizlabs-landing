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
    href: "/dashboard/campaigns",
    label: "Campaigns",
    icon: MegaphoneIcon,
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: LineChartIcon,
  },
  {
    href: "/dashboard/posts",
    label: "Posts",
    icon: MessageSquareTextIcon,
  },
  {
    href: "/dashboard/engagement",
    label: "Engagement",
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
      { name: "PLAS", href: "/" },
      { name: "Distant Learning", href: "/" },
    ],
  },
  {
    title: "Aeronautical College Solutions",
    links: [
      { name: "LMS Course", href: "/" },
      { name: "iOS-Based Simulators", href: "/" },
    ],
  },
  {
    title: "Pilots",
    links: [
      { name: "B747", href: "/" },
      { name: "B737", href: "/" },
      { name: "B767", href: "/" },
      { name: "B757", href: "/" },
    ],
  },
  {
    title: "Developers",
    links: [{ name: "API Docs", href: "/" }],
  },
];
