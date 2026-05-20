import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MenuCarousel from "../components/MenuCarousel";
import {useOTWidget} from "../components/OTwidget.jsx";
import SEO from "../components/SEO.jsx";

{/* Change/add values here to change/add images to carousel
Carousel will dynamically produce another page every 3 items */}



export default function Story() {
    const { setShowWidget } = useOTWidget();

    const [heroCollapsed, setHeroCollapsed] = useState(false);

    useEffect(() => {
        const onScroll = () => setHeroCollapsed(window.scrollY > 150);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.silenth.ca"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Our Story",
                "item": "https://www.silenth.ca/story"
            }
        ]
    };


    return (
        <>
            <SEO
            title="Silent H Stories | Our Story"
            description="Learn the story behind Silent H, a modern Mexican restaurant in Toronto."
            url="https://www.silenth.ca/story"
            jsonLd={breadcrumbSchema}
        />
        <main className="font-['Mondwest'] home">
            {/* Change font in above line */}
            <section
                className="relative md:h-screen md:w-full bg-black aspect-[20/10] sm:aspect-[16/12] lg:aspect-[14.5/10] hero pt-[96px]"
            >
                {/* Video participates in layout */}
                <img
                    src="/ourstory1.png"
                    alt="Our Story"
                    className="h-full w-full object-cover object-[85%_34%]"
                />

                {/* Dark overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/50"/>

                {/* Hero Content */}
                <div className="absolute inset-0 z-10 flex flex-col items-start justify-center md:px-20 text-white">
                    <h1 className="text-5xl md:text-[4rem] font-['Mondwest'] leading-[100%] tracking-[4.48px] md:pl-[36px] pt-25">
                        The soul of <br/> México, <br/> reimagined
                    </h1>
                </div>
            </section>


            {/* About Section */}
            <section
                className="relative bg-[#ECE1D4] min-h-[500px] h-[70vh] px-6 md:px-16 flex flex-col justify-center overflow-hidden pt-20 md:pt-16 about">
                {/* Decorative top border */}
                <div
                    className="hidden md:block dec-border pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                    {/* Decoration behind, spanning full width - most dynamic option */}
                    <img
                        src="/dec2.png"
                        alt=""
                        className="
                                  absolute
                                  top-1/2 translate-y-[calc(-52.2%)]   /* vertically centers with the switch */
                                  left-1/2 translate-x-[calc(-52%)]  /* centers horizontally */
                                  rotate-90
                                  w-[20%]                 /* change this to adjust size */
                                  max-w-[90vw]               /* shrink on smaller screens */
                                  h-auto
                                  opacity-40
                                  pointer-events-none
                                  z-0
                                "
                        style={{transformOrigin: "center"}}
                    />
                </div>

                <div
                    className="safarifix md:hidden">
                    {/* Safari only uses vertically oriented image and vanilla css */}
                    <img
                        src="/dec2.png"
                        alt=""
                        className="
                                  decoration-img
                                "
                        style={{transformOrigin: "center",}}
                    />
                </div>

                {/* (Safari only) Decorative bottom border */}
                <div
                    className="safarifixbtm md:hidden">
                    {/* Decoration behind, spanning full width - most dynamic option */}
                    <img
                        src="/dec2.png"
                        alt=""
                        className="
                                  bttm-dec
                                "
                        style={{transformOrigin: "center"}}
                    />
                </div>

                {/* Decorative bottom border */}
                <div
                    className="hidden md:block dec-border pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                    {/* Decoration behind, spanning full width - most dynamic option */}
                    <img
                        src="/dec2.png"
                        alt=""
                        className="
                                  absolute
                                  top-1/2 translate-y-[calc(-47.8%)]   /* vertically centers with the switch */
                                  left-1/2 translate-x-[calc(-52%)]  /* centers horizontally */
                                  rotate-90
                                  w-[20%]                 /* change this to adjust size */
                                                /* shrink on smaller screens */
                                  h-auto
                                  opacity-40
                                  pointer-events-none
                                  z-0
                                "
                        style={{transformOrigin: "center"}}
                    />
                </div>

                {/* Content */}
                <div
                    className="test2 relative z-10 max-w-7xl 2xl:max-w-[100%] mx-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 2xl:gap-[32px]">
                    {/* Left heading */}
                    <div className="test flex items-start">
                        <h2
                            className="
                                        text-3xl md:text-[1.8rem] lg:text-[2rem] 2xl:text-[2rem] 2xl:w-[75%]
                                        font-['Mondwest'] font-bold text-black
                                        leading-[150%] tracking-[2.2px] pl-32
                                        pb-15 2xl:pt-2 2xl:ml-25
                                      "
                        >
                            Cuisine that is <span className="hidden md:inline"><br/></span>
                            rooted in tradition, <span className="hidden md:inline"><br/></span>
                            elevated by innovation, <span className="hidden md:inline"><br/></span>
                            and undeniably memorable. <span className="hidden md:inline"><br/></span>

                        </h2>
                    </div>

                    {/* Right paragraph */}
                    <div className="test md:w-1/2 flex items-center">
                        <p
                            className="
                                        font-['NeueBit'] font-bold
                                        text-[1.1rem] sm:text-[1.15rem] lg:text-[22px] 2xl:text-[1.7rem]
                                        text-black
                                        tracking-[2.2px] leading-[1.25]
                                        max-w-[63rem] 2xl:max-w-[95vw]  /* keep wide paragraph wide */
                                        pl-6 2xl:pl-[0px]                /* change this to adjust size */
                                        pb-20
                                      "
                        >
                            Our culinary philosophy blends bold creativity with deep respect for Mexico’s rich gastronomic
                            heritage. Guided by Chef Gerardo Saucedo, our kitchen reimagines long standing family
                            recipe's bringing familiar flavours with refined technique, creating dishes that honour
                            their origins while inviting new discovery. Every plate is inspired by the streets of
                            Mexico, shaped by obsession for quality, and driven by an uncompromising pursuit of flavour.
                        </p>
                    </div>
                </div>


            </section>


            {/* PInspiracion Section */}
            <section
                className="relative min-h-[568px] h-screen w-full bg-cover bg-center bg-fixed private"
                style={{
                    backgroundImage: "url('/inspiracion.jpeg')",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/29"></div>

                {/* Content */}
                <div
                    className="hidden md:flex h2outer relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-[167px] pb-[167px]">
                    <h2 className="font-bold text-white tracking-[0.16em]
                 text-[clamp(4rem,4vw,5rem)]">
                        La inspiración
                    </h2>
                </div>

                {/* Mobile Content ! tag means important, overrides existing h2 styling */}
                <div
                    className="md:hidden relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <h2 className="font-bold text-white tracking-[0.16em] !text-[clamp(2.56rem,4vw,4rem)]">
                        La inspiración
                    </h2>
                </div>

            </section>


            {/* Heart of Kitchen section */}
            <section className="relative bg-[#F4E7D4] px-0 py-0 min-h-screen why pt-10 md:pt-0">
                {/* full-bleed two-column grid */}
                <div
                    className="grid w-full grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 lg:gap-x-[clamp(2rem,4vw,5rem)]">
                    {/* DESKTOP IMG LEFT: image fills its half */}
                    <div className="hidden md:block w-full min-h-[100%] h-[50vh] sm:h-[60vh] lg:h-[115vh] 2xl:h-[100vh] py-25 pl-[167px]">
                        <img
                            src="/story2.png"
                            alt="Silent H dining experience"
                            className="h-[92%] object-cover"
                        />
                    </div>

                    {/* MOBILE RIGHT: content */}
                    <div className="md:hidden topboy flex flex-col justify-center px-8 sm:px-12 lg:py-[13%]">
                        <h1 className="whycontent font-['Mondwest'] text-[clamp(2.5rem,2.5vw,3rem)] font-semibold tracking-[0.11em] leading-[1] text-black mb-22 pr-1 w-full">
                            The heart of our kitchen is a story rooted in love, memory, and tradition.
                        </h1>

                        <p className=" whycontent font-['NeueBit'] font-bold text-[clamp(22px,1.4vw,14px)] text-[#0B0B0B] leading-snug mb-13 w-full max-w-[400px] tracking-[0.11em]">
                            Chef Saucedo draws inspiration from his late grandmother, whose warmth and passion for
                            cooking shaped his earliest memories. Her honoured recipes, once shared around a family
                            table, now come to life on our menu—reimagined with elegance and respect for their origins.
                            Each dish is a tribute to her legacy, blending the rich flavours of traditional Mexican
                            cuisine with the artistry of fine dining. Through every bite, we invite you to experience
                            the soul of his childhood and the enduring spirit of the woman who started it all.
                        </p>
                    </div>

                    {/* MOBILE IMG LEFT: image fills its half */}
                    <div className="md:hidden w-full">
                        <img
                            src="/story2.png"
                            alt="Silent H dining experience"
                            className="h-full object-cover"
                        />
                    </div>

                    {/* RIGHT: content */}
                    <div className="hidden md:block topboy flex flex-col justify-center px-8 sm:px-12 lg:px-[] lg:py-[13%]">
                        <h1 className="whycontent font-['Mondwest'] text-[clamp(2.5rem,2.5vw,3rem)] font-semibold tracking-[2.8px] leading-[120%] text-black mb-[32px] pr-1 w-[75%] 2xl:w-[100%] 2xl:pr-[167px]">
                            The heart of our kitchen is a story rooted in love, memory, and tradition.
                        </h1>

                        <p className=" whycontent font-['NeueBit'] font-bold text-[clamp(22px,1.4vw,28px)] 2xl:text-[31.5px] text-[#0B0B0B] leading-snug mb-13 w-full max-w-[400px] 2xl:max-w-[85%] 2xl:pr-[167px] 2xl:leading-[160%] 2xl:tracking-[2.2px] tracking-[2.2px]">
                            Chef Saucedo draws inspiration from his late grandmother, whose warmth and passion for
                            cooking shaped his earliest memories. Her honoured recipes, once shared around a family
                            table, now come to life on our menu—reimagined with elegance and respect for their origins.
                            Each dish is a tribute to her legacy, blending the rich flavours of traditional Mexican
                            cuisine with the artistry of fine dining. Through every bite, we invite you to experience
                            the soul of his childhood and the enduring spirit of the woman who started it all.
                        </p>
                    </div>
                </div>
            </section>

            {/* Setting a tone Desktop and mobile section */}
            <section className="relative bg-[#F4E7D4] px-0 py-0 min-h-screen why">
                {/* full-bleed two-column grid */}
                <div
                    className="grid w-full grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 lg:gap-x-[clamp(2rem,4vw,5rem)] pt-10 md: pt-0">

                    {/* Right: content */}
                    <div className="hidden md:block topboy flex flex-col justify-center px-8 sm:px-12 lg:px-[] lg:py-[15%] 2xl:py-[12%] 2xl:mt-0">
                        <h1 className="whycontent font-['Mondwest'] text-[clamp(2.5rem,2.5vw,3rem)] font-semibold tracking-[2.8px] leading-[1] text-black mb-8 pr-1 w-[100%] pl-[167px] 2xl:pr-[117px] 2xl:w-[100%] 2xl:max-w-[100%] 2xl:leading-[120%] 2xl:tracking-[2.8px]">
                            Setting a tone that is both vibrant and refined.
                        </h1>

                        <p className=" whycontent font-['NeueBit'] font-bold text-[clamp(22px,1.4vw,28px)] 2xl:text-[31.5px] text-[#0B0B0B] leading-snug mb-13 w-full tracking-[2.2px] pl-[167px] 2xl:max-w-[100%] 2xl:pr-[117px] 2xl:leading-[160%] 2xl:tracking-[2.2px] ">
                            Our service is intuitive and heartfelt — attentive without ever intruding.
                            Whether you're joining us for an impromptu cocktail after a long day or gathering with
                            friends for a celebratory dinner, we craft each moment with care. The experience feels
                            effortless, elevated, and always memorable — a true taste of contemporary Mexico.
                        </p>
                    </div>

                    {/*mobile version*/}
                    <div className="md:hidden topboy flex flex-col justify-center px-8 sm:px-12 lg:px-[] lg:py-[13%] ">
                        <h1 className="whycontent font-['Mondwest'] text-[clamp(2.5rem,2.5vw,3rem)] font-semibold tracking-[0.11em] leading-[1] text-black mb-8 pr-1 w-[100%]">
                            Setting a tone that is both vibrant and refined.
                        </h1>

                        <p className=" whycontent font-['NeueBit'] font-bold text-[clamp(22px,1.4vw,14px)] text-[#0B0B0B] leading-snug mb-13 w-full tracking-[0.11em]">
                            Our service is intuitive and heartfelt — attentive without ever intruding.
                            Whether you're joining us for an impromptu cocktail after a long day or gathering with
                            friends for a celebratory dinner, we craft each moment with care. The experience feels
                            effortless, elevated, and always memorable — a true taste of contemporary Mexico.
                        </p>
                    </div>

                    {/* Desktop Right: image fills its half */}
                    <div
                        className="hidden md:block w-full min-h-[100%] h-[50vh] sm:h-[60vh] lg:h-[115vh] 2xl:h-[100vh] py-25 pr-[167px]">
                        <img
                            src="/story3.webp"
                            alt="Silent H dining experience"
                            className="h-[92%] object-cover"
                        />
                    </div>

                    {/* Mobile Right: image fills its half */}
                    <div
                        className="md:hidden w-full max-h-[481px]">
                        <img
                            src="/story3.webp"
                            alt="Silent H dining experience"
                            className="h-[100%] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Dishes tell stories*/}
            <section className="relative bg-[#F4E7D4] px-0 py-0 min-h-screen why">
                {/* full-bleed two-column grid */}
                <div
                    className="grid w-full grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 lg:gap-x-[clamp(2rem,4vw,5rem)]">
                    {/* LEFT: image fills its half */}
                    <div
                        className="hidden md:block w-full min-h-[100%] h-[50vh] sm:h-[60vh] lg:h-[115vh] 2xl:h-[100vh] py-25 pl-[167px]">
                        <img
                            src="/story3.png"
                            alt="Silent H dining experience"
                            className="h-[92%] object-cover"
                        />
                    </div>

                    {/* RIGHT: content */}
                    <div className="topboy flex flex-col justify-center px-8 sm:px-12 lg:px-[] lg:py-[13%] pt-10 md:pt-0">
                        <h1 className="whycontent font-['Mondwest'] text-[clamp(2.5rem,2.5vw,3rem)] font-semibold tracking-[0.11em] leading-[1] text-black mb-8 pr-1 w-[75%] 2xl:w-[100%] 2xl:pr-[167px]">
                            Every dish tells a story.
                        </h1>

                        <p className=" whycontent font-['NeueBit'] font-bold text-[clamp(22px,1.4vw,14px)] 2xl:text-[31.5px] text-[#0B0B0B] leading-snug mb-13 w-full max-w-[400px] tracking-[0.11em] md:tracking-[2.2px] 2xl:max-w-[93%] 2xl:pr-[167px] 2xl:leading-[160%] 2xl:tracking-[2.2px]">
                            At Silent H every visit becomes a cherished memory. From the sizzle of Espadas de rib
                            eye asadas arriving at your table to the laughter shared over handcrafted regional inspired
                            cocktails, we’re more than just a place to eat — we’re a place where moments are made.
                            Whether it’s a lively family gathering, a date with a special someone, or a spontaneous
                            night out with friends, our vibrant flavours and warm hospitality create an atmosphere that
                            brings people together. Here, the experience goes beyond the plate, turning every visit into
                            lasting memories.
                        </p>
                    </div>

                    {/* Mobile IMG */}
                    <div
                        className="md:hidden w-full min-h-[481px]">
                        <img
                            src="/story3.png"
                            alt="Silent H dining experience"
                            className="h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <Footer/>

        </main>
        </>
    );
}
