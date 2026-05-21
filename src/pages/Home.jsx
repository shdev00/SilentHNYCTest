import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import MenuCarousel from "../components/MenuCarousel";
import {useOTWidget} from "../components/OTwidget.jsx";
import SEO from "../components/SEO";

{/* Change/add values here to change/add images to carousel
Carousel will dynamically produce another page every 3 items */}



export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Silent H",
        "url": "https://www.silenthnyc.com/",
        "telephone": "+14169003535",
        "servesCuisine": "Mexican",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "416 West 13th St",
            "addressLocality": "New York City",
            "addressRegion": "NY",
            "postalCode": "10014",
            "addressCountry": "USA"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "17:00",
                "closes": "00:00"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/silenth.to/",
            "https://www.tiktok.com/@silenth.to",
            "https://www.facebook.com/silenth.tor/"
        ],
        "menu": "https://www.silenthnyc.com/menu",
        "hasMap": "https://www.google.com/maps?q=Silent+H+Toronto",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "1251"
        }
    };
    const { setShowWidget } = useOTWidget();

    const [heroCollapsed, setHeroCollapsed] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setHeroCollapsed(window.scrollY > 150);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);

            if (el) {
                const yOffset = -100;
                const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                setTimeout(() => {
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 100); // small delay ensures DOM is ready
            }
        }
    }, [location]);

    return (
        <>
            <SEO
                title="Silent H NYC | Modern Mexican Cuisine"
                description="Authentic yet modern Mexican dining in the heart of NYC."
                url="https://www.silenthnyc.com/"
                jsonLd={jsonLd}
            />
            <main className="font-['Mondwest'] home">


                {/* Change font in above line */}
                <section
                    className="relative h-screen w-full bg-black aspect-[20/10] sm:aspect-[16/12] lg:aspect-[14.5/10] pt-[96px] hero"
                >
                    {/* Video participates in layout */}
                    <video
                        className="h-screen w-full object-cover object-[50%_135%]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="/shNEW-720p.webm" type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-black/50"/>

                    {/* Mobile Hero Content */}
                    <div
                        className="md:hidden absolute inset-0 z-10 flex flex-col items-start px-6 pt-[180px] text-white">

                        <div className="w-full ">

                            {/* Heading */}
                            <h1 className="text-5xl md:text-[4rem] font-['Mondwest'] leading-[100%] tracking-[4.48px] max-w-[90%] mt-5">
                                Mexican flavours, celebrated in NYC
                            </h1>
                            {/*<p className="font-['NeueBit'] text-xl py-5 max-w-[556px] ">
                                Upscale Mexican dining in NYC, where bold flavours meet a vibrant atmosphere. Guided
                                by Chef Gerardo, every dish honours authentic Mexican tradition.
                            </p>*/}
                            <button
                                onClick={() => setShowWidget(true)}
                                className="font-['NeueBit'] transition-all duration-500 tracking-[20%] text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] ease-in-out text-2xl mt-6 px-8.5 py-2.5 border border-white text-white font-medium hover:bg-[#ECE1D4] hover:text-black tracking-[0.16em] active:border-transparent active:bg-black active:text-[#EB4660]"
                            >
                                RESERVE NOW
                            </button>

                        </div>

                    </div>


                    {/* Desktop Hero Content */}
                    <div
                        className="hidden md:flex absolute inset-0 z-10 flex flex-col items-start justify-center px-20 xl:px-0 2xl:px-20 text-white">
                        <div className="max-w-screen md:scale-[0.9] md:2xl:scale-[1]">
                            <h1 className="text-5xl md:text-[4rem] font-['Mondwest'] leading-[100%] tracking-[4.48px] max-w-[60%] pt-[129px]">
                                Mexican flavours, celebrated in NYC
                            </h1>
                            {/*<p className="font-['NeueBit'] text-xl py-5 w-[556px] ">
                            Upscale Mexican dining in Toronto, where bold flavours meet a vibrant atmosphere. Guided by Chef Gerardo, every dish honours authentic Mexican tradition.
                        </p>*/}
                            <button
                                onClick={() => setShowWidget(true)}
                                className="font-['NeueBit'] transition-all duration-500 tracking-[20%] text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] ease-in-out text-2xl mt-6 px-8.5 py-2.5 border border-white text-white font-medium hover:bg-[#ECE1D4] hover:text-black tracking-[0.16em] active:border-transparent active:bg-black active:text-[#EB4660]"
                            >
                                RESERVE NOW
                            </button>

                        </div>

                    </div>

                </section>
                {/*<section className="md:hidden relative bg-black py-[370px]">  Mobile Hero Content
                    <div
                        className="md:hidden absolute inset-0 z-10 flex flex-col items-start mr-19 pt-[90px] text-white">

                        {/* Floating Banner (STACKED)/mobile
                        <div className="
                                    -mt-[100px]
                                    bg-[#ECE1D4]
                                    text-black
                                    w-[120%]
                                    flex flex-col
                                    shadow-xl
                                    scale-[0.85]


                                ">

                            {/* Image
                            <div className="w-[20%]">
                                <img
                                    src="/chefsimg.png"
                                    className="max-w-[380px] h-[380px] object-cover pt-9 px-5"
                                />
                            </div>

                            {/* Text
                            <div className="pb-6 px-5 flex flex-col">

                                <p className="text-[23px] tracking-[0.25em] mb-2 font-bold w-[110%]">
                                    SILENT H PRESENTS A
                                </p>

                                <h3 className="text-[40px] font-bold leading-[1.1] tracking-[2.8px] font-['Mondwest'] mb-3">
                                    Michelin Culinary Collaboration
                                </h3>

                                <p className="font-['Mondwest'] text-[22px] mb-2">
                                    Rodrigo Rivera x Gerardo Álvarez
                                </p>

                                <div className="flex items-center gap-3 mb-3">
                                    <img src="/koli.png" className="h-[15px] w-[47px]"/>
                                    <img src="/koli2.png" className="h-[15px] w-[25px]"/>
                                </div>

                                <p className="font-['NeueBit'] text-[24px] font-bold mb-4">
                                    MAY 6<sup className="text-[9px] relative -top-[2px]">TH</sup> & 7<sup
                                    className="text-[9px] relative -top-[2px]">TH</sup>
                                </p>

                                <button
                                    onClick={() => window.open(
                                        "https://www.opentable.com/booking/experiences-availability?rid=1285960&restref=1285960&experienceId=702187&utm_source=external&utm_medium=referral&utm_campaign=shared",
                                        "_blank"
                                    )}
                                    className="
                w-full
                border border-black
                py-3
                text-[12px]
                tracking-[0.25em]
                font-['NeueBit']
            ">
                                    RESERVE YOUR EXPERIENCE
                                </button>

                            </div>
                        </div>

                    </div>
                </section>*/}


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
                        className="test2 relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
                        {/* Left heading */}
                        <div className="test flex items-start">
                            <h2
                                className="
                                        text-3xl md:text-[1.8rem] lg:text-[2rem] 2xl:text-[2rem]
                                        font-['Mondwest'] font-bold text-black
                                        leading-[150%] tracking-[0.01em] pl-32
                                        pb-15
                                      "
                            >
                                Traditional Mexican cuisine <span className="hidden md:inline"><br/></span>
                                in NYC, respectfully crafted. <span className="hidden md:inline"><br/></span>
                                Colourful locale. <span className="hidden md:inline"><br/></span>

                            </h2>
                        </div>

                        {/* Right paragraph */}
                        <div className="test md:w-1/2 flex items-center">
                            <p
                                className="
                                        font-['NeueBit'] font-bold
                                        text-[1.1rem] sm:text-[1.15rem] lg:text-[22px] 2xl:text-[1.43rem]
                                        text-black
                                        tracking-[2.2px] leading-[1.25]
                                        max-w-[63rem]   /* keep wide paragraph wide */
                                        pl-6                 /* change this to adjust size */
                                        pb-16
                                      "
                            >
                                Our ambiance pulses with vibrant energy and a tasteful blend of
                                traditional and modern style, where magnetic personalities gather
                                in spaces as striking as they are inviting. Guided by Chef Gerardo,
                                our menu brings the bold flavours of Mexico’s streets to NYC,
                                elevating each bite while honouring authentic taste and inviting
                                you to return time and time again.
                            </p>
                        </div>
                    </div>


                </section>


                {/* Private Dining & Events Section */}
                <section
                    className="relative min-h-[568px] h-[71vh] lg:h-[80vh] w-full bg-cover bg-center bg-fixed private"
                    style={{
                        backgroundImage: "url('/dining.webp')",
                    }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/29"></div>

                    {/* Content */}
                    <div
                        className="h2outer relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-[167px] pb-[167px]">
                        <h2 className="font-bold text-white tracking-[0.16em]
                 text-[clamp(1.5rem,4vw,1.75rem)] 2xl:text-[clamp(1.8rem,4.8vw,2.1rem)]">
                            Private Dining &amp; Events in NYC
                        </h2>

                        <p className="font-['NeueBit'] mt-6 max-w-6xl text-gray-200 tracking-[0.16em] ml-10 md:ml-0
                text-[clamp(0.9rem,2vw,1.45rem)] leading-snug">
                            Plan your celebración auténtica in our vibrant space. <br/>
                            Book your holiday event before <span className="font-['NeueBit']">October 31st</span> and
                            receive a
                            <span className="hidden md:inline"> <br/> </span>
                            <span className="font-['NeueBit']"> $100 gift card.</span>
                            <span className="hidden md:inline"><br/></span> <span className="x1 md:hidden"> <br/></span>
                            <span className="font-['NeueBit'] text-[clamp(14px,19px,23px)] tracking-[0.16em]"> Terms Apply</span>
                        </p>

                        <Link
                            to={"/events"}
                            className="btn font-['NeueBit'] font-bold mt-5 px-12 ml-20.5 md:ml-0 py-3 border border-white text-white
               text-[clamp(0.9rem,1.8vw,1.25rem)] transition-all duration-500 ease-in-out
               tracking-[0.2em] hover:bg-[#ECE1D4] hover:text-black transition active:bg-black active:text-[#EB4660] active:border-transparent"
                        >
                            PLAN YOUR EVENT
                        </Link>
                    </div>

                </section>


                {/* Menu Section */}
                <section className="relative bg-[#ECE1D4] py-[24vh] px-10 md:px-16 overflow-hidden menu-ex">
                    {/* Decorative top border */}
                    <div
                        className="hidden md:block ec-border safari-fix pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                        {/* Top Decoration behind, spanning full width - most dynamic option */}
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
                        className="hidden md:block dec-border safari-fix pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
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

                    <div className="relative z-10 max-w-6xl mx-auto pt-[32px] pb-[32px]">
                        {/* Heading */}
                        <h2 className="menutitle text-2xl md:text-3xl font-bold text-black tracking-[0.16em] leading-[5vh] -translate-x-[2.2%]">
                            Menú excepcional
                        </h2>

                        {/* Subheading */}
                        <p className="caption font-['NeueBit'] font-bold mt-3 text-black-900  text-md md:text-xl leading-[200%] tracking-[0.16em] -translate-x-[2.2%]">
                            From expertly crafted artisanal cocktails to dishes that celebrate
                            authentic Mexican soul.
                        </p>

                        {/* Button that links to full Menu page */}
                        <Link
                            to="/menu"
                            className="
                                    viewmenu font-['NeueBit'] font-bold inline-block mt-6 px-6 py-2
                                    border border-black text-black text-sm md:text-base tracking-[0.25em]
                                    transition-all duration-500 ease-in-out
                                    hover:border-transparent hover:bg-transparent hover:text-black
                                    active:bg-black active:text-[#EB4660]
                                    -translate-x-[19%]
                                  "
                        >
                            VIEW MENU
                        </Link>


                        {/* Dynamic Image Grid */}
                        <MenuCarousel/>
                    </div>
                </section>

                {/* Chef's Selection Section */}
                <section className="relative min-h-[511px] h-[511px] w-full overflow-hidden chef">
                    {/* Background video */}
                    <video
                        className="absolute inset-0 h-full w-full object-cover object-cover object-[50%_30%]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="/chef-vid2.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full px-6">
                        <div
                            className="
                                    mx-auto                      /* center the block on the page */
                                    max-w-[58ch]                 /* readable line length */
                                    h-full flex flex-col justify-center items-start gap-6
                                    text-white
                                    "
                        >
                            <h2 className="hidden md:flex text-lg md:text-[30px] font-bold text-start w-[100vh] max-w-[556px] tracking-wider [text-wrap:balance]">
                                The Story Behind Silent H</h2>

                            <h2 className="md:hidden text-lg md:text-[30px] font-bold text-start w-[100vh] max-w-[400px] tracking-wider [text-wrap:balance]">
                                The Story Behind Silent H</h2>

                            {/* Quote */}
                            <h3 className="text-lg md:text-2xl w-[100vh] max-w-[556px] tracking-wider [text-wrap:balance]">
                                “I believe the best ingredient is nostalgia, which is reflected in every
                                dish on this menu. It is a tribute to my family, to México and to my
                                culture.”
                            </h3>

                            {/* Chef name */}
                            <p className="font-['NeueBit'] text-base md:text-xl text-white/85 tracking-[0.20em]">
                                Chef Gerardo Alvarez
                            </p>

                            {/* Button (left-aligned with text) */}
                            <Link
                                to="/story"
                                className="font-['NeueBit'] self-start mt-2 px-8 py-3 border border-white/80
             tracking-[0.31em] text-sm md:text-lg
             hover:bg-[#ECE1D4] hover:text-black
             transition-all duration-600 ease-in-out"
                            >
                                OUR STORY
                            </Link>
                        </div>
                    </div>
                </section>


                <section id="happy-hour"
                         className="relative bg-[#ECE1D4] py-[12vh] px-10 md:px-16 overflow-hidden specials">
                    {/* Decorative top border */}
                    <div
                        className="hidden md:block dec-border safari-fix pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                        <img
                            src="/dec2.png"
                            alt=""
                            className="
                                  absolute
                                  top-1/2 translate-y-[calc(-52.2%)]
                                  left-1/2 translate-x-[calc(-52%)]
                                  rotate-90
                                  w-[20%]
                                  max-w-[90vw]
                                  h-auto
                                  opacity-40
                                  pointer-events-none
                                  z-0
                                "
                            style={{transformOrigin: "center"}}
                        />
                    </div>
                    <div className="safarifix md:hidden">
                        <img
                            src="/dec2.png"
                            alt=""
                            className="decoration-img"
                            style={{transformOrigin: "center"}}
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto my-5 md:my-[98px]">
                        {/* Happy Hour Header */}
                        <div className="flex flex-col gap-[24px] items-center justify-center text-center mb-[40px]">
                            <h2 className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[32px] md:text-[40px] tracking-[2.8px] leading-none">
                                Best Happy Hour In NYC
                            </h2>
                            <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[24px] md:text-[28px] tracking-[1.96px] leading-[1.2]">
                                Everyday - 5pm - 7pm
                            </p>
                        </div>

                        {/* Price Overview */}
                        <div
                            className="flex flex-col gap-[32px] items-center justify-center max-w-[365px] mx-auto mb-[60px]">
                            <div className="flex flex-col gap-[16px] items-center text-center">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Individual Bites
                                </p>
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    $4
                                </p>
                            </div>
                            <div className="flex flex-col gap-[16px] items-center text-center">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Margaritas
                                </p>
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    $10
                                </p>
                            </div>
                        </div>

                        {/* Happy Hour Image */}
                        <div className="w-full max-w-[1140px] mx-auto mb-[60px]">
                            <img
                                src="/HH1-1.png"
                                alt="Happy Hour"
                                className="w-full h-[300px] md:h-[432px] object-cover"
                            />
                        </div>

                        {/* Detailed Menu Items */}
                        <div
                            className="flex flex-col gap-[40px] items-center text-center max-w-[1140px] mx-auto mb-[80px]">
                            <div className="flex flex-col gap-[20px] max-w-[342px]">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Margarita
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[16px] md:text-[18px] tracking-[1.8px] leading-[1.2]">
                                    House flavours
                                </p>
                            </div>

                            <div className="flex flex-col gap-[20px] w-full">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Taco de chicharrón
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[16px] md:text-[18px] tracking-[1.8px] leading-[1.2]">
                                    Crispy pork belly chicharrón taco, avocado mousse, fermented habanero salsa, onion, avocado, cilantro, lime.
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[14px] md:text-[16px] tracking-[3.2px] leading-[1.2] uppercase">
                                    vegan option available
                                </p>
                            </div>

                            <div className="flex flex-col gap-[20px] w-full">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Flauta carnita
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[16px] md:text-[18px] tracking-[1.8px] leading-[1.2]">
                                    Rolled tacos filled with carnita, avocado mousse, sour cream, queso fresco,
                                    Siberia-style guacamole, pickled red onions, flowers
                                </p>
                            </div>

                            <div className="flex flex-col gap-[20px] w-full max-w-[623px]">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Taco olvidado
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[16px] md:text-[18px] tracking-[1.8px] leading-[1.2]">
                                    Black tiger shrimp, bacon, mozzarella, shrimp consommé, served over hot river stones
                                </p>
                            </div>

                            <div className="flex flex-col gap-[20px] w-full max-w-[554px]">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Empanada de barbacoa
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[16px] md:text-[18px] tracking-[1.8px] leading-[1.2]">
                                    AAA rib eye barbacoa empanadas, salsa verde, salsa roja, onion and cilantro
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[14px] md:text-[16px] tracking-[3.2px] leading-[1.2] uppercase">
                                    vegetarian option available
                                </p>
                            </div>

                            <div className="flex flex-col gap-[20px] w-full max-w-[650px]">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Tostada de atún
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[16px] md:text-[18px] tracking-[1.8px] leading-[1.2]">
                                    Fire-charred corn tostada, guacamole, chipotle dressed tuna, fried red onions, Tajín
                                    mayo
                                </p>
                            </div>
                        </div>

                        {/* Tuesdays Section */}
                        <div
                            className="flex flex-col gap-[24px] items-center justify-center text-center mb-[40px] mt-[80px]">
                            <h2 className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[32px] md:text-[40px] tracking-[2.8px] leading-none">
                                Tuesdays
                            </h2>
                            <div className="flex flex-col gap-[16px]">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    All day
                                </p>
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    $20
                                </p>
                            </div>
                        </div>

                        {/* Tuesday Image */}
                        <div className="w-full max-w-[1140px] mx-auto mb-[60px]">
                            <img
                                src="/HH2-1.png"
                                alt="Tuesdays Special"
                                className="w-full h-[300px] md:h-[432px] object-cover"
                            />
                        </div>

                        {/* Tuesday Menu Items */}
                        <div className="flex flex-col gap-[40px] items-center text-center max-w-[631px] mx-auto">
                            <div className="flex flex-col gap-[20px] w-full">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Cachetada de Rib eye
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[16px] md:text-[18px] tracking-[1.8px] leading-[1.2]">
                                    Cheese-crusted rib eye slices, avocado, grilled onions, chives, served on corn
                                    tortillas
                                </p>
                                <p className="font-['Mondwest'] mt-5 font-bold text-[#0b0b0b] text-[20px] md:text-[16px] tracking-[1.54px] leading-[1.2]">
                                    +
                                </p>
                            </div>

                            <div className="flex flex-col gap-[20px] w-full max-w-[557px]">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Side of Esquite
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[16px] md:text-[18px] tracking-[1.8px] leading-[1.2]">
                                    Andean corn, serrano cream, guajillo and ancho powder, cotija cheese, butter
                                </p>
                                <p className="font-['Mondwest'] mt-5 font-bold text-[#0b0b0b] text-[20px] md:text-[16px] tracking-[1.54px] leading-[1.2]">
                                    +
                                </p>
                            </div>

                            <div className="flex flex-col gap-[20px] w-full max-w-[342px]">
                                <p className="font-['Mondwest'] font-bold text-[#0b0b0b] text-[20px] md:text-[22px] tracking-[1.54px] leading-[1.2]">
                                    Margarita
                                </p>
                                <p className="font-['NeueBit'] font-bold text-[#0b0b0b] text-[16px] md:text-[18px] tracking-[1.8px] leading-[1.2]">
                                    House flavours
                                </p>
                            </div>
                        </div>
                        {/* Centered CTA below the grid */}
                        <div className="flex justify-center">
                            <button
                                onClick={() => setShowWidget(true)}
                                className="
                                      specbtn font-['NeueBit'] text-[clamp(14px,18px,22px)] font-bold text-black tracking-[4px] leading-[1] font-bold mt-10 px-16 py-[20px]
                                      border border-black text-black tracking-[0.30em]
                                      transition-all duration-300 ease-in-out
                                      hover:border-transparent hover:bg-[#ECE1D4] hover:text-black
                                      active:bg-black active:text-[#EB4660]
                                        "
                            >
                                RESERVE YOUR TABLE AT SILENT H NYC
                            </button>
                        </div>
                    </div>

                    {/* Decorative bottom border */}
                    <div
                        className="hidden md:block dec-border safari-fix pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                        <img
                            src="/dec2.png"
                            alt=""
                            className="
                                  absolute
                                  top-1/2 translate-y-[calc(-47.8%)]
                                  left-1/2 translate-x-[calc(-52%)]
                                  rotate-90
                                  w-[20%]
                                  h-auto
                                  opacity-40
                                  pointer-events-none
                                  z-0
                                "
                            style={{transformOrigin: "center"}}
                        />
                    </div>

                    {/* (Safari only) Decorative bottom border */}
                    <div className="safarifixbtm md:hidden">
                        <img
                            src="/dec2.png"
                            alt=""
                            className="bttm-dec"
                            style={{transformOrigin: "center"}}
                        />
                    </div>
                </section>


                <Footer/>

            </main>
        </>
    );
}
