import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Great Simulator",
    username: "@PA128",
    review: "Super helpful having a realistic Boeing/Honeywell FMS to practice real-world scenarios.",
    img: "https://randomuser.me/api/portraits/men/1.jpg"
},
{
    name: "Nice Training Aid",
    username: "@Vintage74ET",
    review: "Great reference tool for CDU operations and maintaining proficiency.",
    img: "https://randomuser.me/api/portraits/men/2.jpg"
},
{
    name: "Love This App!",
    username: "@Gator747",
    review: "Fantastic for type rating prep and recurrent training. Perfect for transitioning from smaller aircraft.",
    img: "https://randomuser.me/api/portraits/men/3.jpg"
},
{
    name: "Amazing Features",
    username: "@H118p",
    review: "Great reference tool to prepare for simulator sessions with ease.",
    img: "https://randomuser.me/api/portraits/men/4.jpg"
},
{
    name: "Perfect Training Tool",
    username: "@JetPilot123",
    review: "Helps refine skills and boost confidence for FMC/ACARS operations.",
    img: "https://randomuser.me/api/portraits/men/5.jpg"
},
{
    name: "Excellent Design",
    username: "@SkylinePro",
    review: "Very intuitive and easy to use. Makes training more engaging and efficient.",
    img: "https://randomuser.me/api/portraits/men/6.jpg"
},
{
    name: "Highly Recommended",
    username: "@ProPilot78",
    review: "Efficiently simulates real-time scenarios and provides accurate feedback.",
    img: "https://randomuser.me/api/portraits/men/7.jpg"
},
{
    name: "Best App for Pilots",
    username: "@AeroPro91",
    review: "Great training for all experience levels. A must-have for flight training.",
    img: "https://randomuser.me/api/portraits/men/8.jpg"
},
{
    name: "Helpful Tool",
    username: "@AviatorX",
    review: "Perfect for new pilots and those transitioning to Boeing from other aircraft types.",
    img: "https://randomuser.me/api/portraits/men/9.jpg"
},
{
    name: "Great for Recurrent",
    username: "@Flyer22",
    review: "Efficiently covers non-normal and CPDLC operations with detailed simulations.",
    img: "https://randomuser.me/api/portraits/men/10.jpg"
},
{
    name: "Well Designed",
    username: "@PilotAce74",
    review: "Customizable scenarios and great feedback make this app invaluable.",
    img: "https://randomuser.me/api/portraits/men/11.jpg"
},
{
    name: "Fantastic App!",
    username: "@SkyCaptain99",
    review: "Helps to simplify FMC/ACARS training while keeping it realistic.",
    img: "https://randomuser.me/api/portraits/men/12.jpg"
}
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative flex w-full flex-col items-center justify-center overflow-hidden pt-12 pb-12">
      <div className="px-4 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto mb-4">
        <div className="bg-[linear-gradient(110deg,#808080,45%,#D3D3D3,55%,#808080)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm font-geist">
          Advanced Aviation Solutions
        </div>
      </div>
      <p className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
        What our customers say
      </p>
      <p className="text-muted-foreground text-lg font-geist leading-relaxed text-center sm:text-center mx-auto mt-2 mb-16 px-4">
        We are proud to have helped thousands of customers across the globe. <br className="hidden sm:inline" />Here are some of their stories:
      </p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} img={review.img} name={review.name} username={review.username} body={review.review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username}  img={review.img} name={review.name} username={review.username} body={review.review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
