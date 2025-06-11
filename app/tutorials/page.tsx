import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'Boeing 737',
    href: '/tutorials/737',
    description:
      'The Boeing 737 is a narrow-body airliner produced by Boeing since 1967. Originally developed as a short-range, lower-cost twin-engine airliner derived from Boeing\'s 707 and 727, the 737 has developed into a family of ten passenger models with capacities ranging from 85 to 215 passengers, making it the best-selling jet airliner in the history of aviation.',
    imageUrl: '/placeholder.svg',
    date: 'Apr 17, 2025',
    datetime: '2025-04-17',
    category: { title: 'Aviation', href: '#' },
  },
  {
    id: 2,
    title: 'Boeing 747',
    href: '/tutorials/747',
    description:
      'The Boeing 747 is a wide-body commercial jet airliner and cargo aircraft, often referred to by its original nickname, Jumbo Jet. Its distinctive hump upper deck along a portion of the fuselage has made it one of the world\'s most recognizable aircraft, and it was the first wide-body airliner produced.',
    imageUrl: '/placeholder.svg',
    date: 'Apr 17, 2025',
    datetime: '2025-04-17',
    category: { title: 'Aviation', href: '#' },
  },
  {
    id: 3,
    title: 'Airbus A380',
    href: '#',
    description:
      'The Airbus A380 is a wide-body airliner manufactured by Airbus. It is the world\'s largest passenger airliner, and only full-length double-deck jet airliner ever produced. Airbus studies started in 1988, and the project was announced in 1990 to challenge the dominance of the Boeing 747 in the long-haul market.',
    imageUrl: '/placeholder.svg',
    date: 'Apr 17, 2025',
    datetime: '2025-04-17',
    category: { title: 'Aviation', href: '#' },
    comingSoon: true,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center pb-4">
          <Link href="/products" className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-3 py-2 mb-4 text-sm font-semibold text-gray-600 hover:bg-gray-200">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Tutorials
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to use our apps.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className={`flex flex-col items-start justify-between ${post.comingSoon ? 'opacity-50 pointer-events-none' : ''}`}>
              <Link href={post.href} className="relative w-full">
                <Image
                  alt=""
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                {post.comingSoon && (
                  <div className="absolute top-2 right-2">
                    <Badge>Coming Soon</Badge>
                  </div>
                )}
              </Link>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <div
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}