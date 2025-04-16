import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconZap,
  IconChartLine,
  IconHeadphones,
  IconPalette,
  IconShieldCheck,
  IconShare,
} from "lucide-react";

function FeaturesSectionDemo() {
  const features = [
    {
      title: "Streamlined and Effective",
      description:
        "Achieve seamless training workflows with optimized tools that save time, enhance precision, and deliver consistent results for operational success.",
      icon: <Zap />,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Utilize advanced analytics to monitor pilot performance, identify skill gaps, and enable data-driven decision-making for continuous improvement.",
      icon: <ChartLine />,
    },
    {
      title: "Round-the-Clock Support",
      description:
        "Benefit from expert support available 24/7, ensuring uninterrupted training sessions and confidence in operations.",
      icon: <Headphones />,
    },
    {
      title: "Adaptable Solutions",
      description:
        "Customize training scenarios to align with specific aircraft needs and operational goals, ensuring maximum adaptability and relevance.",
      icon: <Palette />,
    },
    {
      title: "Secure and Reliable",
      description:
        "Trust a secure, reliable platform that ensures uninterrupted, high-quality training sessions and safeguards sensitive data.",
      icon: <ShieldCheck />,
    },
    {
      title: "Seamless Integration",
      description:
        "Easily integrate training systems with existing workflows and developer-friendly APIs for a unified and efficient experience.",
      icon: <Share />,
    },
  ];
  return (
    <div className="container mx-auto max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSectionDemo;
