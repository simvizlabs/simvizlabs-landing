import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'Airbus A320 FMS Trainer',
    href: '/tutorials/a320',
    description:
      "Master the A320 Flight Management System with PLAN mode, global navigation database, and touch-optimized controls. Practice real airline workflows, route validation, and performance initialization to build confidence and proficiency.",
    imageUrl: '/images/a320-tut.jpg',
    lastUpdated: 'Aug 16, 2025',
  },
  {
    id: 2,
    title: 'B737 FMS Trainer',
    href: '/tutorials/737',
    description:
      "A free-play replica of Boeing’s FMC and ACARS with customizable scenarios, covering preflight setup, performance requests, inflight training, and CPDLC. Includes real-time ATIS integration and flexible membership options.",
    imageUrl: '/images/737-tut.jpg',
    lastUpdated: 'Aug 16, 2025',
  },
  {
    id: 3,
    title: 'B747 ACARS/FMC Preflight Trainer',
    href: '/tutorials/747',
    description:
      "Train on Boeing ACARS and FMC with realistic preflight planning, performance data, and messaging. Practice inflight reroutes, VNAV/LNAV procedures, and STARs, with real-time weather updates and upcoming advanced features.",
    imageUrl: '/images/747-tut.jpg',
    lastUpdated: 'Aug 16, 2025',
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
            <Link key={post.id} href={post.href} className="group flex flex-col items-start justify-between">
              <article className="w-full">
                <div className="relative w-full">
                  <Image
                    alt={post.title}
                    src={post.imageUrl}
                    width={600}
                    height={400}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <Badge className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                      Last Updated On {post.lastUpdated}
                    </Badge>
                  </div>
                  <div className="relative">
                    <h3 className="mt-4 text-xl/7 font-semibold text-gray-900 group-hover:text-gray-600">
                      {post.title}
                    </h3>
                    <p className="mt-5 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}