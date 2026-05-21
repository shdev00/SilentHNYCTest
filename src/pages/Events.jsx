import { useState } from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm.jsx";
import SpacesCarousel from "../components/SpacesCarousel";
import { eventSpaces } from "../data/MenuData";
import SEO from "../components/SEO.jsx";

export default function Events() {
    const [showForm, setShowForm] = useState(false);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.silenthnyc.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Events",
                "item": "https://www.silenthnyc.com/events"
            }
        ]
    };

    const eventSchema = [
        {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Wine Wednesday",
            "startDate": "2024-01-01T17:00",
            "endDate": "2024-12-31T23:59",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
                "@type": "Place",
                "name": "Silent H NYC",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "416 West 13th St",
                    "addressLocality": "New York City",
                    "addressRegion": "NY",
                    "postalCode": "10014",
                    "addressCountry": "USA"
                }
            },
            "description": "House wine bottles $20 every Wednesday.",
            "offers": {
                "@type": "Offer",
                "price": "20",
                "priceCurrency": "CAD",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Espresso Martini Thursday",
            "startDate": "2024-01-01T17:00",
            "endDate": "2024-12-31T23:59",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
                "@type": "Place",
                "name": "Silent H NYC",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "416 West 13th St",
                    "addressLocality": "New York City",
                    "addressRegion": "NY",
                    "postalCode": "10014",
                    "addressCountry": "USA"
                }
            },
            "description": "Espresso martinis $10 every Thursday.",
            "offers": {
                "@type": "Offer",
                "price": "10",
                "priceCurrency": "CAD",
                "availability": "https://schema.org/InStock"
            }
        }
    ];

    return (
        <>
            <SEO
            title="Silent H NYC | Modern Mexican Cuisine Events"
            description="Host private events and dining experiences at Silent H in NYC."
            url="https://www.silenthnyc.com/events"
            jsonLd={[breadcrumbSchema, ...eventSchema]}
        />
        <main className="events font-['Mondwest']">
            {/* Change font in above line */}
            <section
                className="relative h-screen w-full bg-black aspect-[20/10] sm:aspect-[16/12] lg:aspect-[14.5/10] hero pt-[96px]"
            >
                {/* Video participates in layout */}
                <video
                    className="h-screen w-full object-cover object-[50%_47%]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src="/dinparty.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/50"/>

                {/* Hero Content */}
                <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-20 text-white hero-content">
                    <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-['Mondwest'] font-[700] leading-[100%] tracking-[4.48px] pt-25">
                        Plan your <br/> auténtica <br/> celebración <br/>
                    </h1>

                    <a
                        href="https://silenth.tripleseat.com/party_request/32814"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['NeueBit'] text-xl mt-6 px-8.5 py-2.5 border border-white text-white font-extralight hover:bg-[#ECE1D4] hover:text-black transition tracking-[0.16em] transition-all duration-500 ease-in-out"
                    >
                        START PLANNING
                    </a>
                </div>
            </section>


            {/* About Section */}
            <section
                className="relative bg-[#ECE1D4] pt-[11.8em] md:pt-45 px-8 md:px-10 min-h-[500px] h-[70vh] overflow-hidden about">
                {/* Decorative top border */}
                <div
                    className="hidden md:block pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
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
                                  dec-border2
                                "
                        style={{transformOrigin: "center"}}
                    />
                </div>
                {/* Iphone Decorative top border */}
                <div
                    className="md:hidden pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                    {/* Decoration behind, spanning full width - most dynamic option */}
                    <img
                        src="/dec2.png"
                        alt=""
                        className="
                                  absolute
                                  top-1/2 translate-y-[calc(-52.2%)]   /* vertically centers with the switch */
                                  left-1/2 translate-x-[calc(-50%)]  /* centers horizontally */
                                  rotate-90
                                  w-[20%]                 /* change this to adjust size */
                                  max-w-[90vw]               /* shrink on smaller screens */
                                  h-auto
                                  opacity-40
                                  pointer-events-none
                                  z-0
                                  dec-border2
                                "
                        style={{transformOrigin: "center"}}
                    />
                </div>
                {/* Decorative bottom border */}
                <div
                    className="hidden md:block pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
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
                                  dec-border2
                                "
                        style={{transformOrigin: "center"}}
                    />
                </div>
                {/* Iphone bottom border */}
                <div
                    className="md:hidden pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                    {/* Decoration behind, spanning full width - most dynamic option */}
                    <img
                        src="/dec2.png"
                        alt=""
                        className="
                                  absolute
                                  top-1/2 translate-y-[calc(-47.8%)]   /* vertically centers with the switch */
                                  left-1/2 translate-x-[calc(-50%)]  /* centers horizontally */
                                  rotate-90
                                  w-[20%]                 /* change this to adjust size */
                                                /* shrink on smaller screens */
                                  h-auto
                                  opacity-40
                                  pointer-events-none
                                  z-0
                                  dec-border2
                                "
                        style={{transformOrigin: "center"}}
                    />
                </div>


                <div
                    className="relative z-10 max-w-7xl 2xl:max-w-500 mx-auto flex flex-col md:flex-row 2xs:gap-6 xs:gap-8 sm:gap-8 md:gap-10 xl:gap-8 2xl:gap-8 justify-center w-[63%]">
                    {/* Paragraph -- CHANGE OR ADD 2xl:pt-15 (or whatever number you like) to below "classname" to adjust position.*/}

                    <p className="pg2 font-['NeueBit'] text-[1.374rem] sm:text-[0.974rem] md:text-[1.074rem] lg:text-[1.174rem] 2xl:pt-15
                    xl:text-[1.375rem] 2xl:text-[2.1rem] font-bold text-black-900 tracking-[0.112em]
                    leading-normal w-[116vw] max-w-[100vw]
                    lg:max-w-[95ch] xl:max-w-[95ch] 2xl:max-w-[95ch]">
                        At Silent H, every gathering becomes a celebration of flavour and culture. Whether you're
                        planning an intimate dinner, a corporate event, or a grand celebration, our vibrant spaces
                        and elevated Mexican cuisine provide the perfect setting. From curated group dining
                        experiences to full restaurant buyouts, we bring your vision to life with warm hospitality,
                        handcrafted cocktails, and dishes inspired by the heart of Mexico.
                    </p>
                </div>

            </section>


            {/* Our Spaces Section */}
            <section className="relative bg-[#DFA867] py-20 px-8 md:px-14 spaces">
                <div className="max-w-7xl mx-auto flex flex-col">
                    {/* Title */}
                    <h1 className="text-[clamp(1.7rem,2.5vw,2.5rem)] md:px-[0%] lg:px-[0%] font-['Mondwest'] font-bold text-black mb-12 tracking-[0.1165em] spaces-title -translate-x-[3px] translate-y-[19px]">
                        Our spaces
                    </h1>

                    {/* Wrapper for images */}
                    <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-center mb-12">
                        {/* Silent H */}
                        <div className="flex flex-col items-start w-full md:w-1/2">
                            <div className="w-full">
                                <SpacesCarousel images={eventSpaces.silentH} />
                            </div>
                            <h3 className="mt-6 text-2xl md:text-3xl font-['Mondwest'] font-bold text-black tracking-[0.1135em]">
                                Silent H
                            </h3>
                        </div>

                        {/* Aitch */}
                        <div className="flex flex-col items-start w-full md:w-1/2">
                            <div className="w-full">
                                <SpacesCarousel images={eventSpaces.aitch} />
                            </div>
                            <h3 className="mt-6 text-2xl md:text-3xl font-['Mondwest'] font-bold text-black tracking-[0.1135em]">
                                Aitch
                            </h3>
                        </div>
                    </div>

                    {/* Button aligned with the title */}
                    <div className="flex justify-center ml-10 md:ml-0 md:px-[8.9%] lg:px-32 2xl:px-49 cta lg:px-[17.8%] pb-[32px] pr-[50px]">
                        <a
                            href="https://my.matterport.com/show/?m=Rs9KDtdhnm6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <button
                                className="font-['NeueBit'] font-bold px-8 py-2 md:px-32 md:py-4 border-[1.5px] border-black text-black
                                  text-sm md:text-lg tracking-[0.25em] hover:bg-[#ECE1D4] hover:border-transparent hover:text-black
                                  transition transition-all duration-450 ease-in-out"
                                                    >
                                TAKE VIRTUAL TOUR
                            </button>
                        </a>
                    </div>
                </div>
            </section>



            {/* Why Choose Silent H section */}
                 <section className="relative bg-[#F4E7D4] px-0 py-0 min-h-screen why">
                    {/* full-bleed two-column grid */}
                    <div
                        className="grid w-full grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 lg:gap-x-[clamp(2rem,4vw,5rem)]">
                        {/* LEFT: image fills its half */}
                    <div className="w-full min-h-[100%] h-[50vh] sm:h-[60vh] lg:h-[100vh] 2xl:h-[100vh]">
                        <video
                            src="/newvid-small.mp4"
                            alt="Silent H dining experience"
                            className="w-full h-full object-cover md:object-contain md:ml-10"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    {/* RIGHT: content */}
                    <div className="topboy flex flex-col justify-center px-8 sm:px-12 lg:px-[17%] lg:py-[13%]">
                        <h1 className="whycontent font-['Mondwest'] text-[clamp(2.5rem,2.5vw,3rem)] 2xl:text-[clamp(3rem,3vw,3.6rem)] font-semibold tracking-[0.11em] leading-[1] text-black mb-[32px] pr-1">
                            Why host your event at Silent H?
                        </h1>

                        <p className=" whycontent font-['NeueBit'] font-bold text-[clamp(22px,1.4vw,14px)] 2xl:text-[clamp(26.4px,1.68vw,16.8px)] text-[#0B0B0B] leading-snug mb-6 w-full max-w-[400px] tracking-[0.11em]">
                            Elevate your occasion with bold, authentic flavours, artisan cocktails,
                            and thoughtfully designed spaces that capture the spirit of modern Mexico.
                        </p>

                        <ul className="whycontent font-['NeueBit'] text-[clamp(20px,1.4vw,14px)] 2xl:text-[clamp(24px,1.68vw,16.8px)] text-black/90 space-y-2 mb-8 pl-[4%] tracking-[0.11em]">
                            <li>▪ Gracious, personalized hospitality</li>
                            <li>▪ Chef-curated seasonal menus</li>
                            <li>▪ Semi-private &amp; private options</li>
                            <li>▪ Dedicated event planning support</li>
                            <li>▪ Seamless, instant booking options</li>
                        </ul>

                        <h3 className="whycontent font-['Mondwest'] text-[clamp(1.25rem,1.6vw,1.5rem)] 2xl:text-[clamp(1.5rem,1.92vw,1.8rem)] font-semibold text-black mb-8 max-w-[70%] tracking-[0.09em]">
                            Let us transform your event into an unforgettable culinary experience.
                        </h3>

                        <span className="whycontent pb-[80px]">
                            <a
                                href="https://silenth.tripleseat.com/party_request/32814"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['NeueBit'] self-start px-6 py-4 border-[1.4px] border-black text-black text-sm md:text-base lg:text-[18px] tracking-[3.6px] transition-all duration-500 ease-in-out
                                    hover:border-transparent hover:bg-transparent hover:text-black
                                    active:bg-black active:text-[#EB4660] font-bold">
                                START PLANNING
                            </a>
                        </span>
                    </div>
                    </div>
                 </section>
            <Footer/>

            {showForm && <ContactForm onClose={() => setShowForm(false)}/>}
        </main>
        </>
    );
}
