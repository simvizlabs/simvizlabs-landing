import { cn } from "@/lib/utils";
import {
  Zap,
  ChartLine,
  Headphones,
  Palette,
  ShieldCheck,
  Share,
} from "lucide-react";

function FeaturesSectionDemo() {
  const features = [
    {
      title: "Streamlined Training Workflows",
      description:
        "Simplify operations with optimized tools that save time, boost precision, and ensure consistent results for pilots and instructors.",
      icon: <Zap />,
    },
    {
      title: "Advanced Data Insights",
      description:
        "Leverage real-time analytics to track pilot performance, identify knowledge gaps, and drive continuous training improvement.",
      icon: <ChartLine />,
    },
    {
      title: "24/7 Expert Support",
      description:
        "Access dedicated support around the clock, ensuring seamless training operations and immediate assistance whenever needed.",
      icon: <Headphones />,
    },
    {
      title: "Flexible Scenario Customization",
      description:
        "Tailor training modules to match aircraft types, procedural needs, and operational goals with maximum flexibility.",
      icon: <Palette />,
    },
    {
      title: "Robust Security & Reliability",
      description:
        "Train with confidence on a platform built for security, ensuring high-quality sessions and protection of sensitive aviation data.",
      icon: <ShieldCheck />,
    },
    {
      title: "Effortless System Integration",
      description:
        "Connect SimVizLabs seamlessly into your existing workflows and platforms using developer-friendly, aviation-grade APIs.",
      icon: <Share />,
    },
  ];
  return (
    <div id="features" className="container mx-auto max-w-screen-xl w-full relative z-10 pb-10">
      {/* <div className="px-4 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto mb-4">
        <div className="bg-[linear-gradient(110deg,#808080,45%,#D3D3D3,55%,#808080)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm font-geist">
        Optimized Training Workflows
        </div>
      </div> */}
      <p className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
        <span className="hidden sm:inline">Maximize Efficiency with Tailored Solutions</span>
        <span className="sm:hidden">
          Maximize Efficiency<br />
          with Tailored Solutions
        </span>
      </p>
      <p className="text-muted-foreground text-lg font-geist leading-relaxed text-center sm:text-center mx-auto mt-2 mb-16 px-4">
        Explore innovative tools and features designed to enhance efficiency, customize<br className="hidden sm:inline" /> training workflows, and elevate operational performance in aviation training.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
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
      <div className="text-xl font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-m text-neutral-600 dark:text-neutral-300 relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSectionDemo;
