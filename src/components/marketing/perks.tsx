import { PERKS } from "@/constants";
import { cn } from "@/functions";
import { LucideIcon } from "lucide-react";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";

const Perks = () => {
    return (
      <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
        <Container>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <SectionBadge title="Benefits" />
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <h2 className="pt-10 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.gray.700),theme(colors.gray.700),theme(colors.gray.700),theme(colors.gray.500))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                Maximize Efficiency with Tailored Training Solutions
              </h2>
              <p className="text-lg text-gray-700">
                Explore innovative tools and features designed to enhance
                efficiency, customize training workflows, and elevate
                operational performance in aviation training.
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className="mt-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative">
              {PERKS.map((perk, index) => (
                <Perk key={index} index={index} {...perk} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
};

const Perk = ({
    title,
    description,
    icon: Icon,
    index,
}: {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800",
                (index === 0 || index === 3) && "lg:border-l",
                index < 3 && "lg:border-b"
            )}
        >
            {index < 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-80 from-blue-800/25 to-transparent pointer-events-none" />
            )}
            {index >= 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-80 from-blue-800/25 to-transparent pointer-events-none" />
            )}
            <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full">
                <div className="mb-4 relative z-10 px-10">
                    <Icon strokeWidth={1.3} className="w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-foreground" />
                </div>
                <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
                    <div className="absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-700 transition-all duration-500 origin-center" />
                    <span className="group-hover/feature:-translate-y- group-hover/feature:text- transition duration-500 inline-block heading">
                        {title}
                    </span>
                </div>
                <p className="text-sm text-gray-700 max-w-xs relative z-10 px-10">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Perks
