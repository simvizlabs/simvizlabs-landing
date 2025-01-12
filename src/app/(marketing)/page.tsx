import { Background, Companies, Connect, Container, CTA, Features, Hero, Perks, Reviews, Wrapper } from "@/components";
import { Spotlight } from "@/components/ui/spotlight";

import Workflows from "@/components/marketing/workflows";


const HomePage = () => {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative pb-24">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                    <Hero />
                </Container>
                <Workflows/>
                <Features />
                <Perks />
                <Reviews />
                <CTA />
            </Wrapper>
        </Background>
    )
};

export default HomePage
