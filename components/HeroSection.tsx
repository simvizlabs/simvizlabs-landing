import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { HovermeButtonDemo } from '@/components/eldoraui/hoverme';



interface HeroSectionProps {
  heroText: string;
  heroImage: string;
  heroDescription: string;
}

export default function HeroSection({ heroText, heroImage, heroDescription }: HeroSectionProps) {
    return (
        <section className="py-20">
            <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
                <div className="relative text-center">
                    <Link
                        href="/our-products"
                        className="inline-flex items-center gap-1 rounded-md bg-gray-50 px-3 mt-8 py-2 text-sm font-regular text-gray-800  dark:text-gray-400 hover:underline hover:underline-offset-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Products
                    </Link>
                    <h1 className="mx-auto mt-8 max-w-xl text-balance text-5xl font-bold">{heroText}</h1>

                    <p className="text-muted-foreground mx-auto mb-6 mt-4 text-balance text-xl">{heroDescription}</p>

                    <div className="flex flex-col items-center gap-4 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
                        
                        
                   
                    <HovermeButtonDemo text="Get Started" />
                    <Link href="#pricing">Check our pricing</Link>
                        <Button
                            asChild
                            variant="ghost">
                           
                        </Button>
                    </div>
                </div>

                <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
                    <Image
                        src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        fill // Use fill for absolute positioning and covering
                        className="absolute inset-0 object-cover"
                    />

                    <div className="rounded-(--radius) relative m-4 overflow-hidden   sm:m-8 md:m-12">
                        <Image
                            src={heroImage}
                            alt="app screen"
                            width={2880}
                            height={1842}
                            className="object-top-left size-full object-cover"
                        />
                    </div>
                </div>

                
            </div>
        </section>
    )
}
