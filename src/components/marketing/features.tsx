"use client";

import Image from "next/image";
import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import MagicCard from "../ui/magic-card";
import { Ripple } from "../ui/ripple";
import { SectionBadge } from "../ui/section-bade";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Targeted Training Solutions" />
          <h2 className="text-4xl md:text-5xl font-bold text-transparent pb-4 bg-clip-text bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 pt-10 font-satoshi [&>br]:mb-4">
            Empower Training with <br />
            Event-Based Analytics
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-satoshi">
            Revolutionize Distance learning pilot training with LMS containing interactive playground, Event-based
            analytics & Data-driven solutions. 
          </p>
        </div>
      </Container>
      <div className="mt-16 w-full">
        <div className="flex flex-col items-center gap-5 lg:gap-5 w-full">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
              <MagicCard
                particles={false}
                className="flex flex-col items-start size-full bg-gray-white"
              >
                <div className="bento-card flex items-center justify-center min-h-72">
                  <span className="text-muted-foreground group-hover:text-foreground mx-auto relative">
                    <Image
                      src="/images/bento.png"
                      alt="dashboard"
                      width={1920}
                      height={1080}
                      className="rounded-lg lg:rounded-[20px]"
                    />
                  </span>
                  {/* <Ripple /> */}
                </div>
              </MagicCard>
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full bg-gray-300/60"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full h-40">
                    <Images.analytics className="w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-satoshi font-semibold heading">
                      EBAT System
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Leverage the Event-Based Analytics and Training system to
                      understand your workforce, implement targeted programs,
                      and save both time and costs.
                    </p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 lg:gap-5">
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full row-span-1 bg-gray-300/60"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full h-52 relative">
                    <Images.ideation className="w-full h-full" />
                    <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-satoshi font-semibold heading">
                      Data-Driven Insights
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Analyze data insights and data organization to monitor
                      trainee performance, identify gaps, and optimize training
                      programs for better skill development and safety.
                    </p>
                  </div>
                </div>
              </MagicCard>
              <div className="grid grid-rows gap-5 lg:gap-5">
                <MagicCard
                  particles={true}
                  className="flex flex-col items-start w-full row-span- row-start-[0.5] h-32 bg-gray-300/60"
                >
                  <div className="bento-card w-full relative items-center justify-center">
                    <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <p className="text-base text-muted-foreground text-justify [mask-image:radial-gradient(50%_50%_at_50%_50%,#BAB3FF_0%,rgba(186,179,255,0)_90.69%)]">
                      Harness the power of AI-driven predictive analytics to elevate your airline training programs. Our advanced tools are designed to optimize training content creation, engagement, and performance tracking like never before. Transform your pilot training strategy with cutting-edge features that deliver data-driven insights and actionable recommendations. Reach your trainees with the right training modules at the right time, ensuring enhanced skill development and operational readiness. Create customized, scenario-based training faster and smarter, tailored to replicate real-world challenges and improve decision-making.

With Event-Based Analytics and Training (EBAT), you can monitor trainee progress, identify performance gaps, and refine training programs for maximum efficiency. Our system integrates seamlessly with your existing workflows, providing dynamic and adaptable solutions that enhance operational efficiency. Leverage predictive learning analytics to implement targeted training programs, ensuring cost-effectiveness and improved safety standards.

                      </p>
                    </div>
                    <div className="w-full h-16 relative">
                      <Images.centeral className="w-full h-full" />
                      <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                </MagicCard>
                <MagicCard
                  particles={true}
                  className="flex flex-col items-start w-full row-start-2 !h-max bg-gray-300/60"
                >
                  <div className="bento-card w-full gap-6 relative">
                    <div className="w-full h-48 relative">
                      <Images.rings className="w-full h-full absolute inset-0" />
                      <Images.rings className="w-56 h-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <Icons.icon className="w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" />
                      <Images.circlePallete className="w-full h-full opacity-30" />
                    </div>
                    <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </MagicCard>
              </div>
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full row-span-1 bg-gray-300/60"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="flex flex-col mb-auto">
                    <h4 className="text-xl font-satoshi font-semibold heading">
                      Data-Driven Scenarios
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Create customized, data-driven scenarios tailored to
                      replicate real-world challenges, improving adaptability
                      and operational decision-making.
                    </p>
                  </div>
                  <div className="w-full h-28 relative">
                    <Images.integration className="w-full h-full" />
                    <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"></div>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[.40fr_1fr] w-full gap-5 lg:gap-5">
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full bg-gray-300/60"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full">
                    <Images.image className="w-full h-40 lg:h-auto" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-satoshi font-semibold heading">
                      Component Integration
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Integrate dynamic components into your aviation training
                      systems for seamless workflows, adaptability, and
                      operational efficiency.
                    </p>
                  </div>
                </div>
              </MagicCard>
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full bg-gray-300/60"
              >
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full">
                    <Images.hash className="w-full h-40 lg:h-52" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-satoshi font-semibold heading">
                      Targeted Training Recommendations
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Implement targeted training programs using data analytics
                      to meet specific operational needs, ensuring efficiency
                      and cost-effectiveness.
                    </p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Features;
