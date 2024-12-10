import { Background, Companies, Connect, Container, CTA, Features, Hero, Perks, Pricing, Reviews, Wrapper } from "@/components";
import { Spotlight } from "@/components/ui/spotlight";

import Workflows from "@/components/marketing/workflows";


const HomePage = () => {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                    <Hero />
                </Container>
                <Container className="py-8 lg:py-8">
  <> </>
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
