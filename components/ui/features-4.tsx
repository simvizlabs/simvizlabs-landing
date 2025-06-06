import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        <section className="py-12 font-geist">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16 font-geist">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center  font-geist">
                    <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance font-geist">Our Training Management System</h2>
                    <p className="mt-6 text-lg/8 text-gray-600 font-geist">A streamlined process for effective training.</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3 font-geist">
                    <div className="space-y-3 font-geist">
                        <div className="flex items-center gap-2 font-geist w-[250px]">
                            <Zap className="size-4 font-geist" />
                            <h3 className="text-md font-bold font-geist">Learning Management System </h3>
                        </div>
                        <p className="text-sm font-geist">Organize, launch, and track eLearning content</p>
                    </div>
                    <div className="space-y-2 font-geist">
                        <div className="flex items-center gap-2 font-geist w-[250px]">
                            <Cpu className="size-4 font-geist" />
                            <h3 className="text-md font-bold font-geist">Mobile Solutions</h3>
                        </div>
                        <p className="text-sm font-geist">Deploy online/offline training on iPAD (FMS, ACARS Trainer)</p>
                    </div>
                    <div className="space-y-2 font-geist">
                        <div className="flex items-center gap-2 font-geist w-[250px]">
                            <Fingerprint className="size-4 font-geist" />

                            <h3 className="text-md font-bold font-geist">Quiz Generation System (QGS)</h3>
                        </div>
                        <p className="text-sm font-geist">Design and manage technical questions, exams, and quizzes</p>
                    </div>
                    <div className="space-y-2 font-geist">
                        <div className="flex items-center gap-2 font-geist w-[250px]">
                            <Pencil className="size-4 font-geist" />

                            <h3 className="text-md font-bold font-geist">Electronic Training Records System (ETR)</h3>
                        </div>
                        <p className="text-sm font-geist">Collect training and assessment data offline for EBT/ATQP/AQP</p>
                    </div>
                    <div className="space-y-2 font-geist">
                        <div className="flex items-center gap-2 font-geist w-[250px]">
                            <Settings2 className="size-4 font-geist" />

                            <h3 className="text-md font-bold font-geist">Advanced Analytics</h3>
                        </div>
                        <p className="text-sm font-geist">Develop and maintain company-specific analytics and reports</p>
                    </div>
                    <div className="space-y-2 font-geist">
                        <div className="flex items-center gap-2 font-geist w-[250px]">
                            <Sparkles className="size-4 font-geist" />

                            <h3 className="text-md font-bold font-geist">Curriculum Management</h3>
                        </div>
                        <p className="text-sm font-geist">Manage and maintain training curriculum</p>
                    </div>
                </div>
            </div>
        </section>
    )
}