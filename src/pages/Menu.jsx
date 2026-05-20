import { useState, useEffect } from "react";
import { menuData } from "../data/MenuData";
import { Camera, CameraOff } from "lucide-react";
import Footer from "../components/Footer.jsx";
import SEO from "../components/SEO.jsx";
import { useOTWidget } from "../components/OTwidget.jsx";

export default function Menu() {
    const [activeMenu, setActiveMenu] = useState("food");
    const [expandedItems, setExpandedItems] = useState({});
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // same threshold as navbar
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleExpand = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const toggleAll = (expand) => {
        const updates = {};
        // go through all sections in the current active menu
        items.forEach((section) => {
            section.items.forEach((item) => {
                if (item.image) {
                    updates[item.name] = expand;
                }
            });
        });

        setExpandedItems(updates); // overwrite globally
    };

    const items = menuData[activeMenu];


    const { setShowWidget } = useOTWidget();

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
                "name": "Menu",
                "item": "https://www.silenth.ca/menu"
            }
        ]
    };

    return (
        <>
        <SEO
            title="Silent H Toronto Menu | Modern Mexican Cuisine (Menu)"
            description="Explore the food and drink menu at Silent H in Toronto."
            url="https://www.silenth.ca/menu"
            jsonLd={breadcrumbSchema}
        />
            <main className="menu font-['NeueBit']">
                {/* Menu wrapper with beige background - Change pt for spacing from navbar, h for height */}

                <section className="relative bg-[#ECE1D4] min-h-screen px-6 md:px-16 py-12 pt-24">

                    {/* Decoration (scrolls normally) | original y-calc value is translate-y-[calc(-43.9%)], changed to 64.9 due to implementing fade-in */}
                    <div className="dec-border2 relative mt-0 z-0">
                        <div
                            className="hidden md:block dec-border pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
                            <img
                                src="/dec2.png"
                                alt=""
                                className="absolute
                             top-1/2 translate-y-[calc(-43.9%)]
                             left-1/2 translate-x-[calc(-53.9%)]

                             rotate-90
                             w-[20%] max-w-[90vw] h-auto opacity-40
                            pointer-events-none z-0 dec-border2"
                                style={{transformOrigin: "center"}}
                            />
                        </div>
                        <div
                            className="md:hidden dec-border pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
                            <img
                                src="/dec2.png"
                                alt=""
                                className="absolute
                             top-1/2 translate-y-[calc(-44%)]
                             left-1/2 translate-x-[calc(-50%)]

                             rotate-90
                             w-[20%] max-w-[90vw] h-auto opacity-40
                            pointer-events-none z-0 dec-border2"
                                style={{transformOrigin: "center"}}
                            />
                        </div>
                    </div>

                    {/* Switch bar (sticks under navbar, fades in) */}
                    <div
                        className={`switx sticky top-[96px] z-20 flex w-[91vw] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] h-[8.294vh] overflow-hidden bg-[#ECE1D4] 
                    transition-opacity duration-900 ease-in-out
                    `}
                    >
                        <button
                            onClick={() => {
                                setActiveMenu("food");
                                window.scrollTo({top: 0, behavior: "smooth"});
                            }}
                            className={`flex-1 py-3 text-[105%] 2xl:text-[150%] text-center text-sm tracking-[0.18em] transition-colors
                            ${
                                activeMenu === "food"
                                    ? "food-card bg-[#8B6B3E] text-black font-bold"
                                    : "bg-[#A9824F] text-black/40 font-bold"
                            }`}
                        >
                            FOOD
                        </button>
                        <button
                            onClick={() => {
                                setActiveMenu("drinks");
                                window.scrollTo({top: 0, behavior: "smooth"});
                            }}
                            className={`flex-1 py-3 text-[105%] 2xl:text-[150%] text-center text-sm tracking-[0.18em] transition-colors
                            ${
                                activeMenu === "drinks"
                                    ? "bg-[#8B6B3E] text-black font-bold"
                                    : "bg-[#A9824F] text-black/40 font-bold"
                            }`}
                        >
                            DRINKS
                        </button>
                    </div>

                    <div
                        className="relative h-[140px] top-23 md:top-15 lg:top-20 xl:top-35 2xl:top-45 flex flex-col items-center justify-center text-center">
                        <h1
                            className="font-['Mondwest'] text-[clamp(1.75rem,3vw,2.5rem)] tracking-[clamp(0.04em,0.3vw,0.055em)] leading-[1] font-bold pointer-events-none"
                        >
                            Authentic Mexican Cuisine & Elevated Cocktails in Toronto
                        </h1>

                        <p
                            className="mt-3 max-w-[520px] font-['NeueBit'] text-[clamp(0.85rem,1.1vw,1rem)] tracking-[0.08em] leading-[1.4] text-black/70"
                        >
                            A celebration of authentic Mexican culinary heritage, reimagined for the modern palate. At
                            Silent H, every dish is a story.
                        </p>
                    </div>


                    {/* Categorized Menu */}
                    {items.map((section, sectionIdx) => {
                        // SPECIAL CASE: Electric Daisy (custom full-width layout)
                        if (section.category === "Electric Daisy") {
                            const ed = section.items?.[0] || {};
                            const edKey = ed.name || "Electric Daisy";
                            const isEdOpen = expandedItems[edKey] ?? true; // default OPEN

                            return (
                                <div
                                    key={section.category}
                                    className={`ed-block ${isEdOpen ? "is-open" : "is-closed"} md:is-open mb-16 pt-[12%]`}
                                >
                                    <h2 className="ed-cName font-['Mondwest'] text-[clamp(1.75rem,3vw,2.5rem)] tracking-[clamp(0.04em,0.3vw,0.055em)] leading-[1] mb-8 font-bold">
                                        {section.category}
                                    </h2>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                                        {/* LEFT: Illustration / Image */}
                                        {/* Mobile: collapsible with height animation */}
                                        <div
                                            className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out w-full justify-center mix-blend-multiply ${
                                                isEdOpen ? "max-h-[420px] h-[400px] mt-2 flex" : "max-h-0 h-0 flex"
                                            }`}
                                        >
                                            <img
                                                src={ed.image || "/edaisysmall.png"}
                                                alt={ed.name || "Electric Daisy"}
                                                className="w-full max-w-[500px] h-auto max-h-[399px] -translate-y-[12%] object-contain"
                                            />
                                        </div>

                                        {/* Desktop: always visible */}
                                        <div
                                            className="hidden md:flex w-full justify-center mix-blend-multiply h-[400px]">
                                            <img
                                                src={ed.image || "/edaisysmall.png"}
                                                alt={ed.name || "Electric Daisy"}
                                                className="w-full max-w-[328px] h-auto max-h-[328px]  object-contain"
                                            />
                                        </div>

                                        {/* RIGHT column stays the same except the camera btn uses  toggle */}
                                        <div className="w-full flex flex-col justify-center space-y-6">
                                            <p className="ingredients md:hidden font-['NeueBit'] font-bold text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.2] tracking-[1.8px] text-black/80 max-w-[39ch]">
                                                Saffron-Infused Patrón El Alto | Mezcal | Galliano | Santomé | Maracuyá
                                                |
                                                Orange Bitters | Acids | Mango Boba | Electric Daisy | Gold <br/>
                                                <span className="ecdprice">70</span>
                                            </p>

                                            <p className="hidden md:block font-['NeueBit'] font-bold text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.2] tracking-[1.8px] text-black/80 max-w-[65ch]">
                                                Electric Daisies, known for their tingling, flavour-enhancing effect,
                                                star
                                                in Canada’s first cocktail of its kind—only at Silent H. Crafted with
                                                Patrón El
                                                Alto, passionfruit, smoked vanilla, and saffron, it’s bold, luxurious,
                                                and served
                                                in a hand-painted glass from Guadalajara.
                                            </p>

                                            {/* Divider line (desktop/tablet) */}
                                            <div className="hidden md:block border-t border-black w-[90%]"/>

                                            {/* Camera toggle (mobile only) */}
                                            <button
                                                onClick={() => toggleExpand(edKey)}
                                                className="md:hidden cam-btn2"
                                            >
                                                {isEdOpen ? (
                                                    <CameraOff size={24} className="text-gray-600 hover:text-black"/>
                                                ) : (
                                                    <Camera size={24} className="text-gray-600 hover:text-black"/>
                                                )}
                                            </button>

                                            {/* MOBILE description */}
                                            <p className="daisycntnt md:hidden font-['NeueBit'] font-bold text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.2] tracking-[1.8px] text-black/80 max-w-[65ch]">
                                                Electric Daisies, known for their tingling, flavour-enhancing effect,
                                                star
                                                in Canada’s first cocktail of its kind—only at Silent H. Crafted with
                                                Patrón El
                                                Alto, passionfruit, smoked vanilla, and saffron, it’s bold, luxurious,
                                                and served
                                                in a hand-painted glass from Guadalajara.
                                            </p>

                                            {/* DESKTOP ingredients */}
                                            <p className="hidden md:block font-['NeueBit'] font-bold text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.2] tracking-[1.8px] text-black/80 max-w-[39ch]">
                                                Saffron-Infused Patrón El Alto | Mezcal | Galliano | Santomé | Maracuyá
                                                |
                                                Orange Bitters | Acids | Mango Boba | Electric Daisy | Gold
                                            </p>

                                            {/* MOBILE brand logo */}
                                            <div className="md:hidden mt-2 flex items-center justify-between pr-[20%]">
                                                <div
                                                    className="plogo flex-shrink-0 font-['Mondwest'] text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold tracking-[0.02em] text-black">
                                                    <img src="patron.png" alt="Patrón El Alto"
                                                         className="h-[54px] w-auto object-contain"/>
                                                </div>
                                            </div>

                                            {/* DESKTOP price + brand */}
                                            <div className="max-sm:hidden mt-2 items-center justify-between pr-[20%]">
                                            <span
                                                className="font-['Mondwest'] text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold tracking-[0.02em] text-black">
                                              {ed.price}
                                            </span>
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src="patron.png"
                                                        alt="Patrón El Alto"
                                                        className="h-[54px] w-auto object-contain translate-x-[50vh] md:-translate-y-[18vh] 2xl:-translate-y-30 large-pos"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*CHANGES HEADING OF SECTION BELOW IT IE VINOS ROJOS*/}
                                    {/* Desktop divider block  below */}
                                    {sectionIdx < items.length - 1 && (
                                        <div
                                            className="relative mt-20 -mb-30 overflow-clip h-[125px] 2xl:h-[245px] 2xl:mt-40 2xl:-mb-50 divider-full border-control">
                                            <div className="border-t border-black/20 w-full"></div>
                                            <div
                                                className="hidden md:block pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full flex justify-center">
                                                <img
                                                    src="/dec2.png"
                                                    alt=""
                                                    className="absolute dec-border top-1/2 translate-y-[calc(-52.2%)] left-1/2 -translate-x-[53.9%] rotate-90 w-[20%] max-w-[90vw] h-auto opacity-40 z-0"
                                                    style={{transformOrigin: "center"}}
                                                />
                                            </div>
                                            {/*CHANGES HEADING OF SECTION BELOW IT IE VINOS ROJOS*/}
                                            <div
                                                className="md:hidden pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full flex justify-center">
                                                <img
                                                    src="/dec2.png"
                                                    alt=""
                                                    className="absolute dec-border top-1/2 translate-y-[calc(-52.2%)] left-1/2 -translate-x-1/2 rotate-90 w-[20%] max-w-[90vw] h-auto opacity-40 z-0"
                                                    style={{transformOrigin: "center"}}
                                                />
                                            </div>
                                        </div>

                                    )}
                                </div>
                            );
                        }

                        // SPECIAL CASE: Margarita Tree (custom full-width layout)
                        if (section.category === "Margarita Tree") {
                            return (
                                <div key={section.category} className="mb-16 pt-[12%]">
                                    {/* Title + subtitle */}
                                    <div className="flex justify-between items-baseline mb-8">
                                        <h2 className="mt-cName font-['Mondwest'] text-[clamp(1.75rem,3vw,2.5rem)] tracking-[clamp(0.04em,0.3vw,0.055em)] leading-[1] mb-2 mr-3 font-bold">
                                            {section.category}
                                        </h2>
                                        <p className="caption font-['NeueBit'] pl-[54%] uppercase text-[clamp(10px,16px,18px)] leading-[1.2] tracking-[0.12em] text-black">
                                            Four Margaritas served in a cocktail tree
                                        </p>
                                    </div>
                                    <br></br>
                                    {/*<p className="uppercase text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.2em] mb-8">
                                    Four Margaritas served in a cocktail tree
                                </p>*/}

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                        {/* LEFT: Permanent image */}
                                        <div className="flex justify-center w-full">
                                            <img
                                                src="/dmenu/margtree.webp"
                                                alt="Margarita Tree"
                                                className="w-full max-w-[367px] max-h-[588px] object-cover"
                                            />
                                        </div>

                                        {/* RIGHT: Margarita cards (static, styled same as other menu items) */}
                                        <div className="grid sm:grid-cols-2 gap-6 w-full">
                                            {/* Card 1 */}
                                            <div
                                                className="cardback bg-white p-4 flex flex-col relative transition-all">
                                                <div className="flex flex-col h-full relative cntnt">
                                                    <h3 className="font-['Mondwest'] font-bold pb-3 text-[clamp(1.25rem,2vw,1.75rem)] text-black w-[90%] tracking-[clamp(0.04em,0.2vw,0.08em)] leading-[1.2]">
                                                        Strawberry & Basil Margarita
                                                    </h3>
                                                    <p className="desc font-['NeueBit'] max-w-[100%] font-bold text-[clamp(0.95rem,1.5vw,1.125rem)] text-[#0B0B0B] opacity-[71%] mb-6 leading-[1.2] tracking-[clamp(0.08em,0.25vw,0.10em)]">
                                                        Patrón Silver, Cointreau, strawberry, basil
                                                    </p>
                                                    <span
                                                        className="simpleprice font-['NeueBit'] md:font-['Mondwest'] font-bold text-[22px] tracking-[1.54px] leading-[1.2] text-black">
                                                        120
                                                </span>
                                                </div>
                                            </div>

                                            {/* Card 2 */}
                                            <div
                                                className="cardback bg-white p-4 flex flex-col relative transition-all">
                                                <div className="flex flex-col h-full relative cntnt">
                                                    <h3 className="font-['Mondwest'] font-bold pb-3 text-[clamp(1.25rem,2vw,1.75rem)] text-black w-[90%] tracking-[clamp(0.04em,0.2vw,0.08em)] leading-[1.2]">
                                                        Cucumber & Cilantro Margarita
                                                    </h3>
                                                    <p className="desc font-['NeueBit'] max-w-[100%] font-bold text-[clamp(0.95rem,1.5vw,1.125rem)] text-[#0B0B0B] opacity-[71%] mb-6 leading-[1.2] tracking-[clamp(0.08em,0.25vw,0.10em)]">
                                                        Patrón Silver, Cointreau, agave, jalapeño, cucumber, cilantro
                                                    </p>
                                                    <span
                                                        className="simpleprice font-['NeueBit'] md:font-['Mondwest'] font-bold text-[22px] tracking-[1.54px] leading-[1.2] text-black">
                                                        120
                                                </span>
                                                </div>
                                            </div>

                                            {/* Card 3 */}
                                            <div
                                                className="cardback bg-white p-4 flex flex-col relative transition-all">
                                                <div className="flex flex-col h-full relative cntnt">
                                                    <h3 className="font-['Mondwest'] font-bold pb-3 text-[clamp(1.25rem,2vw,1.75rem)] text-black w-[90%] tracking-[clamp(0.04em,0.2vw,0.08em)] leading-[1.2]">
                                                        Blueberry & Lemon Margarita
                                                    </h3>
                                                    <p className="desc font-['NeueBit'] max-w-[100%] font-bold text-[clamp(0.95rem,1.5vw,1.125rem)] text-[#0B0B0B] opacity-[71%] mb-6 leading-[1.2] tracking-[clamp(0.08em,0.25vw,0.10em)]">
                                                        Patrón Silver, Blue Curaçao, blueberry, lemon
                                                    </p>
                                                    <span
                                                        className="simpleprice font-['NeueBit'] md:font-['Mondwest'] font-bold text-[22px] tracking-[1.54px] leading-[1.2] text-black">
                                                        120
                                                </span>
                                                </div>
                                            </div>

                                            {/* Card 4 */}
                                            <div
                                                className="cardback bg-white p-4 flex flex-col relative transition-all">
                                                <div className="flex flex-col h-full relative cntnt">
                                                    <h3 className="font-['Mondwest'] font-bold pb-3 text-[clamp(1.25rem,2vw,1.75rem)] text-black w-[90%] tracking-[clamp(0.04em,0.2vw,0.08em)] leading-[1.2]">
                                                        Coconut & Thai Chili Margarita
                                                    </h3>
                                                    <p className="desc font-['NeueBit'] max-w-[100%] font-bold text-[clamp(0.95rem,1.5vw,1.125rem)] text-[#0B0B0B] opacity-[71%] mb-6 leading-[1.2] tracking-[clamp(0.08em,0.25vw,0.10em)]">
                                                        Patrón Silver, Cointreau, coconut milk, Thai chili
                                                    </p>
                                                    <span
                                                        className="simpleprice font-['NeueBit'] md:font-['Mondwest'] font-bold text-[22px] tracking-[1.54px] leading-[1.2] text-black">
                                                        120
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider decoration */}
                                    {sectionIdx < items.length - 1 && (
                                        <div
                                            className="relative mt-20 -mb-30 2xl:-mb-50 overflow-clip h-[125px] 2xl:h-[245px] 2xl:mt-40 2xl:-mb-50 divider-full border-control">
                                            <div className="border-t border-black/20 w-full"></div>
                                            <div
                                                className="hidden md:block pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full flex justify-center">
                                                <img
                                                    src="/dec2.png"
                                                    alt=""
                                                    className="absolute dec-border top-1/2 translate-y-[calc(-52.2%)] left-1/2 -translate-x-[53.9%] rotate-90 w-[20%] max-w-[90vw] h-auto opacity-40 z-0"
                                                    style={{transformOrigin: "center"}}
                                                />
                                            </div>
                                            {/*controls section header BELOW marg tree.*/}
                                            <div
                                                className="md:hidden pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full flex justify-center">
                                                <img
                                                    src="/dec2.png"
                                                    alt=""
                                                    className="absolute dec-border top-1/2 translate-y-[calc(-52.2%)] left-1/2 -translate-x-1/2 rotate-90 w-[20%] max-w-[90vw] h-auto opacity-40 z-0"
                                                    style={{transformOrigin: "center"}}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        }


                        // DEFAULT: existing header + grid for all non multi-price sections
                        return (
                            <div key={section.category} className="cName mb-16 pt-[13%]">
                                {/* Category header + Expand/Collapse switch */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="flex items-baseline space-x-2">
                                        <h2
                                            className={`ctgry text-[clamp(1.75rem,3vw,2.5rem)] tracking-[clamp(0.04em,0.3vw,0.055em)] leading-[1] font-['Mondwest'] font-bold ${
                                                section.category.includes("/") ? "ctgry-slash" : ""
                                            }`}
                                        >
                                            {section.category}
                                        </h2>

                                        {section.category === "Cocteles Regionales" && (
                                            <span
                                                className="text-[clamp(0.75rem,1.2vw,0.9rem)] font-['NeueBit'] leading-[1.2] tracking-[3.2px] text-black">
                                          2oz
                                        </span>
                                        )}
                                    </div>

                                    {/* Only show expand/collapse if at least one item has an image */}
                                    {section.items.some(item => !!item.image) && (
                                        <div className="flex space-x-4 text-sm">
                                            {/* Expand All */}
                                            <button
                                                onClick={() => toggleAll(true)}
                                                className="expnd px-4 py-[44px] md:px-4 md:py-2 font-['NeueBit'] font-bold uppercase leading-1 tracking-[3.6px] text-black
                                             hover:bg-black hover:text-[#EB4660] active:bg-[#A93226] active:text-[#EB4660]
                                             transition-colors duration-200"
                                            >
                                                Show All Photos
                                            </button>

                                            {/* Collapse All */}
                                            <button
                                                onClick={() => toggleAll(false)}
                                                className="clps px-4 py-2 font-['NeueBit'] font-bold uppercase tracking-[0.15em] border border-none text-black
                                             hover:bg-black hover:text-[#EB4660] active:bg-[#A93226] active:text-[#EB4660]
                                             transition-colors duration-200"
                                            >
                                                Close All Photos
                                            </button>
                                        </div>
                                    )}

                                </div>

                                {/* Grid layout */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[1fr]">
                                    {section.items.map((item, idx) => {
                                        const isExpanded = expandedItems[item.name];
                                        const isRegionalCocktail =
                                            activeMenu === "drinks" && section.category === "Cocteles Regionales";

                                        return (
                                            <div
                                                key={idx}
                                                className={`cardback bg-white p-4 flex flex-col relative transition-all ${
                                                    isExpanded ? "row-span-2" : ""
                                                }`}
                                            >
                                                {/* Expanded Image */}
                                                {isExpanded && (
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        /* add below to classname if u want 2 round corner of imgs rounded-md*/
                                                        className="mb-4 object-cover w-full aspect-[1/1]"
                                                    />
                                                )}

                                                {/* Card Content */}
                                                <div className="flex flex-col h-full relative cntnt">
                                                    {/* Title */}
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h3 className="font-['Mondwest'] font-bold pb-3 text-[clamp(1.25rem,2vw,1.75rem)] text-black w-[71%] tracking-[clamp(0.04em,0.2vw,0.08em)] leading-[1.2]">
                                                            {item.name}
                                                        </h3>
                                                    </div>

                                                    {/* Region Name (only for Cocteles Regionales) */}
                                                    {isRegionalCocktail && (
                                                        <span
                                                            className="uppercase text-[clamp(0.875rem,1.2vw,1rem)] tracking-[clamp(0.08em,0.3vw,0.2em)] leading-[1.2] text-gray-700 mb-2">
                                                        {item.region}
                                                      </span>
                                                    )}

                                                    {/* Description */}
                                                    <p className="desc font-['NeueBit'] max-w-[100%] md:max-w-[90%] lg:max-w-[89%] 2xl:max-w-[75%] font-bold text-[clamp(0.95rem,1.5vw,1.125rem)] text-[#0B0B0B] opacity-[71%] mb-6 leading-[1.2] tracking-[clamp(0.08em,0.25vw,0.10em)] pr-[0%] sm:pr-[1%] xs:pr-[18%] md:pr-[1%] lg:pr-[1%] xl:pr-[1%]">
                                                        {item.description}
                                                    </p>

                                                    {item.subtext && (
                                                        <p className="
                                                                font-['NeueBit']
                                                                text-[16px]
                                                                font-bold
                                                                leading-[120%]
                                                                tracking-[3.2px]
                                                                uppercase
                                                                text-[#0B0B0B]
                                                                self-stretch
                                                                mb-2
                                                              ">
                                                            {item.subtext}
                                                        </p>
                                                    )}

                                                    {/* Price(s) */}
                                                    <div className="trebek mt-auto">
                                                        {item.price8oz || item.btl ? (
                                                            <div className="flex space-x-6">
                                                                {/* 5oz */}
                                                                {item.price && (
                                                                    <div className="flex flex-col items-center">
                                                                      <span
                                                                          className="font-['Mondwest'] font-bold text-[clamp(1rem,1.8vw,1.25rem)] tracking-[1.54px] leading-[1.2] text-black">
                                                                        {item.price}
                                                                      </span>
                                                                        <span
                                                                            className="uppercase text-[clamp(0.8rem,1.8vw,1rem)] leading-[1.2] tracking-[3.2px] text-gray-900 font-bold">
                                                                        5oz
                                                                      </span>
                                                                    </div>
                                                                )}

                                                                {/* 8oz */}
                                                                {item.price8oz && (
                                                                    <div className="flex flex-col items-center">
                                                                  <span
                                                                      className="font-['Mondwest'] font-bold text-[clamp(1rem,1.8vw,1.25rem)] tracking-[1.54px] leading-[1.2] text-black">
                                                                    {item.price8oz}
                                                                  </span>
                                                                        <span
                                                                            className="uppercase text-[clamp(0.8rem,1.8vw,1rem)] tracking-[3.2px] leading-[1.2] text-gray-700 font-bold">
                                                                    8oz
                                                                    </span>
                                                                    </div>
                                                                )}

                                                                {/* Bottle */}
                                                                {item.btl && (
                                                                    <div className="flex flex-col items-center">
                                                                  <span
                                                                      className="font-['Mondwest'] font-bold text-[clamp(1rem,1.8vw,1.25rem)] tracking-[1.54px] leading-[1.2] text-black">
                                                                    {item.btl}
                                                                  </span>
                                                                        <span
                                                                            className="uppercase text-[clamp(0.8rem,1.8vw,1rem)] tracking-[3.2px] leading-[1.2] text-gray-700 font-bold">
                                                                        BTL
                                                                    </span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <span
                                                                className="simpleprice font-['NeueBit'] md:font-['Mondwest'] font-bold text-[22px] tracking-[1.54px] pl-[0px] md:pl-0 leading-[1.2] text-black">
                                                          {item.price}
                                                        </span>
                                                        )}
                                                    </div>

                                                    {/* Region Map */}
                                                    {isRegionalCocktail && item.regionImage && (
                                                        <img
                                                            src={`/${item.regionImage}`}
                                                            alt={item.region}
                                                            className="absolute top-2 right-2 w-[30%] max-w-[90px] 2xl:max-w-[121px] sm:w-[30%] sm:max-w-[88px] xs:w-[1%] xs:max-w-[86px] h-auto opacity-100 pl-3 pointer-events-none"
                                                        />
                                                    )}

                                                    {/* Camera icon (only if image exists) */}
                                                    {item.image && (
                                                        <button
                                                            onClick={() => toggleExpand(item.name)}
                                                            className="cam-btn absolute bottom-2 right-2"
                                                        >
                                                            {isExpanded ? (
                                                                <CameraOff size={24}
                                                                           className="text-gray-600 hover:text-black"/>
                                                            ) : (
                                                                <Camera size={24}
                                                                        className="text-gray-600 hover:text-black"/>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Divider line with decorative element */}
                                {sectionIdx < items.length - 1 && (
                                    <div
                                        className="border-control relative mt-20 -mb-50 2xl:-mb-55 overflow-clip h-[125px] 2xl:h-[245px] 2xl:mt-40 2xl:-mb-50 ">
                                        <div className="border-t border-black/20 w-full"></div>
                                        <div
                                            className="hidden md:block pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full flex justify-center">
                                            <img
                                                src="/dec2.png"
                                                alt=""
                                                className="absolute dec-border top-1/2 translate-y-[calc(-52.2%)] left-1/2 -translate-x-[53.9%] rotate-90 w-[20%] max-w-[90vw] h-auto opacity-40 z-0"
                                                style={{transformOrigin: "center"}}
                                            />
                                        </div>
                                        <div
                                            className="md:hidden pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full flex justify-center">
                                            <img
                                                src="/dec2.png"
                                                alt=""
                                                className="absolute dec-border top-1/2 translate-y-[calc(-52.2%)] left-1/2 -translate-x-1/2 rotate-90 w-[20%] max-w-[90vw] h-auto opacity-40 z-0"
                                                style={{transformOrigin: "center"}}
                                            />
                                        </div>
                                    </div>
                                )}
                                {/* (Safari only) Decorative bottom border */}
                                <div
                                    className="md:hidden pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-full flex justify-center opacity-30">
                                    <img
                                        src="/dec2.png"
                                        alt=""
                                        className="absolute dec-border translate-y-[calc(-47.6%)] left-1/2 -translate-x-1/2 rotate-90 w-[20%] max-w-[95vw] h-auto opacity-40 z-0"
                                        style={{transformOrigin: "center"}}
                                    />
                                </div>
                            </div>
                        );
                    })}


                    {/* Final bottom divider decoration */}
                    <div className="mb-[13%]">
                        {/* Final bottom divider decoration */}
                        <div
                            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                            <img
                                src="/dec2.png"
                                alt=""
                                className="
                                      absolute
                                      top-1/2 translate-y-[calc(-47.8%)]
                                      left-1/2 -translate-x-[53%]
                                      rotate-90
                                      w-[20%]
                                      max-w-[90vw]
                                      h-auto
                                      opacity-40
                                      z-0
                                      dec-border2
                                    "
                                style={{transformOrigin: "center"}}
                            />
                        </div>
                    </div>
                </section>
                {/* Closes menu wrapper  */}

                {/* Footer  outside */}
                <Footer/>

                <button
                    onClick={() => setShowWidget(true)}
                    className="fixed bottom-6 right-6 z-[9999] bg-[#EB4660] hover:bg-black text-white px-6 py-3 rounded-full shadow-xl tracking-[0.2em] uppercase text-sm transition-all"
                >
                    Reserve
                </button>
            </main>
        </>
    )
        ;

}