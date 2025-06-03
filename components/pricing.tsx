import React from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
    return (
        <section id="pricing" className="py-8 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                    <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                    <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-medium">App Only</h2>
                               <span className="my-3 block text-2xl font-semibold">$199 / year</span>
                               <p className="text-muted-foreground text-sm">Per user</p>
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="">Get Started</Link>
                            </Button>

                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['ACARS Preflight Planning', 'Real-Time ATIS Updates', 'CPDLC Training'].map((item, index) => (
                                   <li
                                       key={index}
                                       className="flex items-center gap-2">
                                       <Check className="size-3" />
                                       {item}
                                   </li>
                               ))}
                            </ul>
                        </div>
                    </div>

                    <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="font-medium">App Bundle</h2>
                                   <span className="my-3 block text-2xl font-semibold">$249 / year</span>
                                   <p className="text-muted-foreground text-sm">Per user</p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="">Get Started</Link>
                                </Button>
                            </div>

                            <div>
                                <div className="text-sm font-medium">Everything in free plus :</div>

                                <ul className="mt-4 list-outside space-y-3 text-sm">
                                    {['Everything in Basic plus:', 'Access to Tutorials', 'New Features', 'Exclusive Courses', 'Hands-on Training Modules', 'Thriving Community', 'Live Support', 'Latest Navigation Databases', 'In-House LMS Dashboard'].map((item, index) => (
                                       <li
                                           key={index}
                                           className="flex items-center gap-2">
                                           <Check className="size-3" />
                                           {item}
                                       </li>
                                   ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
