import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import RetroGrid from "../ui/retro-grid";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-blue-700 blur-[10rem]"></div>
                    <div className="flex flex-col items-center justify-center w-full z-20">
                        <h2 className="text-4xl md:text-6xl font-nacelle font-bold !leading-[1.1] mt-6 text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900">
                            Transform Your <br className="hidden md:block" />Training Journey Today!
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6">
                        Ready to optimize your training? Download our app or schedule a call with our experts to elevate your aviation training experience.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6">
                            <Button asChild size="lg" className="w-full md:w-max">
                                <Link href="">
                                Schedule a Call
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="secondary" className="w-full md:w-max">
                                <Link href="">
                                Download the App
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <RetroGrid />
                    <Particles
                        refresh
                        ease={80}
                        color="#d4d4d8"
                        quantity={100}
                        className="size-full absolute inset-0"
                    />
                </div>
            </Container>
        </div>
    )
};

export default CTA
