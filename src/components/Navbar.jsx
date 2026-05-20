import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useOTWidget } from "./OTwidget";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { setShowWidget } = useOTWidget();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = (e) => {
        setIsOpen(false);

        if (location.pathname === "/") {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    };

    const links = [
        { to: "/menu", label: "Menu" },
        { to: "/reservations", label: "Reservations" },
        { to: "/events", label: "Plan an Event" },
        { to: "/story", label: "Our Story" },
        { label: "Happy Hour", scrollId: "happy-hour" },

        { to: "/aitch", label: "Enter Aitch", external: true },
        //removed, remove comment to manifest in navbar aga in
        //{ to: "/aitch", label: "Enter Aitch" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // threshold for fade-in
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 font-['NeueBit'] transition-colors duration-0 ${
                scrolled ? "bg-[#EB4660]/100 shadow-md" : "bg-[#EB4660]/100"
            }`}
        >
            <div className="md:mx-0 lg:mx-[-6px] xl:mx-1 2xl:mx-19 max-w-[1280px] flex items-center justify-between h-[96px] px-[8px] xs:px-[1vw] sm:px-[1vw] md:px-[75.5px] lg:px-[78.5px] xl:px-[69px] 2xl:px-[0px]">
                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={handleLogoClick}
                    className="flex items-center shrink-0"
                    aria-label="SilentH home"
                >
                    <img
                        src="/Layer_1.svg"
                        alt="SilentH"
                        className="h-[66%] aspect-[25/32] shrink-0 block pl-1 transform "
                        loading="eager"
                        decoding="async"
                    />
                </NavLink>

                {/* Desktop Nav change href=/aitch if it shows index.html suffix*/}
                <ul className="hidden md:flex md:flex-nowrap whitespace-nowrap md:pl-10 lg:pl-15 md:gap-26 lg:gap-25 2xl:gap-35 2xl:ml-32 text-[20px] md:text-sm lg:text-[20px] 2xl:text-[1.4em] font-bold uppercase tracking-[0.224em]">
                    {links.map(({ to, label, external, scrollId }, idx) => (
                        <li key={label}>
                            {scrollId ? (
                                <button
                                    onClick={() => {
                                        if (location.pathname !== "/") {
                                            navigate("/", { state: { scrollTo: scrollId } });
                                        } else {
                                            const el = document.getElementById(scrollId);
                                            if (el) {
                                                const yOffset = -100;
                                                const y =
                                                    el.getBoundingClientRect().top +
                                                    window.pageYOffset +
                                                    yOffset;

                                                window.scrollTo({ top: y, behavior: "smooth" });
                                            }
                                        }
                                    }}
                                    className={`uppercase relative inline-flex justify-center items-center py-2 
                ${idx === 0 ? "font-['NeueBit'] w-[225%] after:w-[100%]" : "w-[140%] after:w-[100%]"}
                after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] 
                after:bottom-0 after:h-[1px]
                after:bg-black after:opacity-0 after:transition-opacity after:duration-500 after:ease-in-out
                hover:after:opacity-100
                text-black`}
                                >
                                    {label}
                                </button>

                            ) : external ? (
                                <a
                                    href="/aitch/"
                                    className={`relative inline-flex justify-center items-center py-2 
                ${idx === 0 ? "font-['NeueBit'] w-[225%] after:w-[100%]" : "w-[140%] after:w-[100%]"}
                after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%]
                after:bottom-0 after:h-[1px]
                after:bg-black after:opacity-0 after:transition-opacity after:duration-500 after:ease-in-out
                hover:after:opacity-100
                text-black`}
                                >
                                    {label}
                                </a>

                            ) : label === "Reservations" ? (
                                <NavLink
                                    onClick={() => setShowWidget(true)}
                                    className={`relative inline-flex justify-center items-center py-2 
                ${idx === 0 ? "font-['NeueBit'] w-[225%] after:w-[100%]" : "w-[140%] after:w-[100%]"}
                after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] 
                after:bottom-0 after:h-[1px]
                after:bg-black after:opacity-0 after:transition-opacity after:duration-500 after:ease-in-out
                hover:after:opacity-100
                text-black`}
                                >
                                    {label}
                                </NavLink>

                            ) : (
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `relative inline-flex justify-center items-center py-2
                    ${idx === 0 ? "font-['NeueBit'] w-[225%] after:w-[100%]" : "w-[140%] after:w-[100%]"}
                    after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%]
                    after:bottom-0 after:h-[1px] 
                    after:bg-black after:opacity-0 after:transition-opacity after:duration-500 after:ease-in-out
                    hover:after:opacity-100
                    ${isActive ? "text-black after:opacity-100" : "text-black"}`
                                    }
                                >
                                    {label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className={`md:hidden transition-colors duration-500 pr-5 ${
                    scrolled ? "text-black" : "text-black"
                }`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Overlay Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#EB4660] flex flex-col items-center justify-center space-y-10 z-40">
                    <NavLink
                        to="/"
                        onClick={handleLogoClick}
                        className="absolute top-6 left-6 flex items-center shrink-0"
                        aria-label="SilentH home"
                    >
                        <img src="/Layer_1.svg" alt="SilentH" className="h-10" />
                    </NavLink>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 text-black"
                        aria-label="Close Menu"
                    >
                        <X size={28} />
                    </button>

                    {links.map(({ to, label , scrollId}) =>
                        label === "Reservations" ? (
                            <button
                                key={label}
                                onClick={() => {
                                    setIsOpen(false);
                                    setShowWidget(true);
                                }}
                                className="text-[18px] uppercase tracking-[3.6px] text-center text-black font-bold hover:text-white transition"
                            >
                                {label}
                            </button>

                        ) : scrollId ? (
                            <button
                                key={label}
                                onClick={() => {
                                    setIsOpen(false);

                                    if (location.pathname !== "/") {
                                        navigate("/", { state: { scrollTo: scrollId } });
                                    } else {
                                        const el = document.getElementById(scrollId);
                                        if (el) {
                                            const yOffset = -100;
                                            const y =
                                                el.getBoundingClientRect().top +
                                                window.pageYOffset +
                                                yOffset;

                                            window.scrollTo({ top: y, behavior: "smooth" });
                                        }
                                    }
                                }}
                                className="text-[18px] uppercase tracking-[3.6px] text-center text-black font-bold hover:text-white transition"
                            >
                                {label}
                            </button>

                        ) : (
                            <NavLink
                                key={label}
                                to={to}
                                onClick={() => setIsOpen(false)}
                                className="text-[18px] uppercase tracking-[3.6px] text-center text-black font-bold hover:text-white transition"
                            >
                                {label}
                            </NavLink>
                        )
                    )}

                    <div className="flex gap-[32px] mt-[80px]">
                        <a href="https://www.tiktok.com/@silenth.to?lang=en" aria-label="TikTok"><FaTiktok/></a>
                        <a href="https://www.instagram.com/silenth.to/?hl=en" aria-label="Instagram"><FaInstagram/></a>
                        <a href="https://www.facebook.com/silenth.tor/" aria-label="Facebook"><FaFacebookF/></a>
                    </div>
                    <button className="mt-0 uppercase font-size[16px] tracking-[3.2px] pl-1 font-bold text-black hover:text-white transition">
                        Contact Us
                    </button>
                    {/* Decorative bottom border */}
                    <div
                        className="dec-border safari-fix pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                        {/* Decoration behind, spanning full width - most dynamic option */}
                        <img
                            src="/dark-dec.png"
                            alt=""
                            className="
                                  absolute
                                  top-1/2 translate-y-[calc(-100.8%)]   /* vertically centers with the switch */
                                  left-1/2 translate-x-[calc(-50%+6px)]  /* centers horizontally */

                                  w-[100%]                 /* change this to adjust size */
                                  mix-blend-multiply
                                  h-auto
                                  opacity-[1]
                                  pointer-events-none
                                  z-0
                                "
                            style={{transformOrigin: "center"}}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
}
