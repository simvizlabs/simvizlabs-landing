import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
       
        <p className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
          Empower Training with Event-Based Analytics
        </p>
        <p className="text-muted-foreground text-lg font-geist leading-relaxed text-center sm:text-center mx-auto mt-2 mb-16">
          Revolutionize Distance learning pilot training with LMS containing interactive playground,<br className="hidden sm:inline" /> Event-based analytics & Data-driven solutions.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <Image
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
                alt=""
                width={400}
                height={300}
                className="h-80 object-cover object-left"
                priority
              />
              <div className="pt-4 pl-10 pr-10">
                <h3 className="text-lg font-bold sm:text-xl text-indigo-600">EBAT System</h3>
                <p className="mt-2 text-muted-foreground font-medium">Understand your workforce, deploy targeted training programs, and optimize both time and costs with our Event-Based Analytics & Training platform.</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <Image
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
                alt=""
                width={400}
                height={300}
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="pt-4 pl-10 pr-10">
                  <h3 className="text-lg font-bold sm:text-xl text-indigo-600">Data‑Driven Scenarios</h3>
                  <p className="mt-2 text-muted-foreground font-medium">Identify performance gaps in your training data and generate customized, real-world scenarios that boost adaptability and sharpen operational decision-making.</p>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <Image
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                alt=""
                width={400}
                height={300}
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-lg font-bold sm:text-xl text-indigo-600">Predictive Learning & Analytics</h3>
                <p className="mt-2 text-muted-foreground font-medium max-w-xs max-w-[20ch]">Harness AI-driven predictive analytics to refine content, deliver real-time feedback, and surface actionable recommendations for skill development.</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <Image
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                alt=""
                width={400}
                height={300}
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-lg font-bold sm:text-xl text-indigo-600">Component Integration</h3>
                <p className="mt-2 text-muted-foreground font-medium max-w-xs max-w-[20ch]">Seamlessly embed dynamic modules—FMS, ACARS, EFB, and more—into your training ecosystem to streamline workflows and boost operational efficiency.</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <Image
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                alt=""
                width={400}
                height={300}
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-lg font-bold sm:text-xl text-indigo-600">Targeted Training Recommendations</h3>
                <p className="mt-2 text-muted-foreground font-medium max-w-xs">Implement precision training programs with data analytics—targeting key procedures to cut costs and elevate safety standards.</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}
