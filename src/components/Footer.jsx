import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";
import MailingForm from "./MailingForm.jsx";
import {useEffect, useState} from "react";
import { useOTWidget } from "../components/OTwidget.jsx";

export default function Footer() {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src*="jscache.com/wejs"]'
        );

        if (!existingScript) {
            const script = document.createElement("script");
            script.src =
                "https://www.jscache.com/wejs?wtype=rated&uniq=777&locationId=26168456&lang=en_US&display_version=2";
            script.async = true;

            script.onload = () => {
                console.log("TripAdvisor script loaded");
            };

            document.body.appendChild(script);
        } else {
            // 🔥 Force re-init if already loaded
            if (window.TA && window.TA.init) {
                window.TA.init();
            }
        }
    }, []);

    const { setShowWidget } = useOTWidget();
    return (
        <footer className="bg-[#DFA867] py-[13vh] px-8 md:px-16">
            <div className="max-w-7xl mx-auto flex items-center gap-8 pb-10">

                {/* LEFT — Logo (true far left, independent) */}

                {/* RIGHT — Existing grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-center md:text-left">

                    {/* Mailing List */}
                    <div className="font-['NeueBit'] font-bold flex justify-center md:justify-start z-10">
                        <button
                            onClick={() => setShowForm(true)}
                            className="px-8 py-3 border-1 border-black text-black text-lg tracking-[0.3em] uppercase
                transition-colors duration-500 ease-in-out
                hover:bg-[#ECE1D4] hover:border-transparent
                active:bg-black active:text-[#EB4660]"
                        >
                            Join Our Mailing List
                        </button>

                    </div>


                    {/* Social */}
                    <div className="text-center">
                        <p className="font-bold text-lg mb-4 tracking-[0.16em]">Let's get social</p>
                        <div className="flex justify-center space-x-6 text-2xl">
                            <a href="https://www.tiktok.com/@silenth.to?lang=en" aria-label="TikTok"
                               className="hover:text-gray-700">
                                <FaTiktok/>
                            </a>
                            <a href="https://www.instagram.com/silenth.to/?hl=en" aria-label="Instagram"
                               className="hover:text-gray-700">
                                <FaInstagram/>
                            </a>
                            <a href="https://www.facebook.com/silenth.tor/" aria-label="Facebook"
                               className="hover:text-gray-700">
                                <FaFacebookF/>
                            </a>
                        </div>

                        {/*<img
                            src="/Layer_1.svg"
                            alt="SilentH"
                            className="justify-center items-center ml-[45.5%] mt-6 h-[50px] w-auto"
                        />*/}
                    </div>


                    {/* Contact */}
                    <div className="font-['NeueBit'] text-center md:text-right text-sm md:text-base tracking-[0.20em]">
                        <p className="font-bold">
                            <a
                                href="https://www.google.com/maps/place/?q=place_id:ChIJg4KPc3Y1K4gR91c0-HfMgsI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70"
                            >
                                461 KING ST. W
                            </a>
                        </p>
                        <p className="mt-2 font-bold">
                            <a href="tel:+14169003535" className="hover:opacity-70">
                                416 900 3535
                            </a>
                            {" | "}
                            <a href="mailto:info@silenth.ca" className="hover:opacity-70">
                                INFO@SILENTH.CA
                            </a>
                        </p>
                        <p className="mt-2 font-bold">
                            Open 7 days a week, <span className="text-lg">5 p.m. - 12 a.m</span>
                        </p>
                    </div>

                </div>
            </div>

            <div id="TA_rated777" className="flex justify-center mt-5" />



            {/* SECOND ROW aligned with columns */}
            <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 text-center md:text-left">

                {/* Empty (under Mailing List) */}
                <div className="flex justify-center md:block pb-5 md:pb-0">
                    <img
                        src="/Layer_1.svg"
                        alt="SilentH"
                        className="mt-5 h-[120px] w-auto"
                    />
                </div>

                {/* Embed */}
                <div className="my-10 md:my-0 flex ml-5 justify-center md:justify-start">
                    <iframe
                        src="https://www.google.com/maps?q=Silent+H+Toronto&output=embed"
                        width="100%"
                        height="200"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-md max-w-[400px]"
                    ></iframe>
                </div>

                {/* Quick Links (under Contact) */}
                <div className="mt-5 md:mt-0 font-['NeueBit'] text-center md:text-right tracking-[0.20em]">
                    <p className="font-bold mb-3">Quick Links</p>
                    <div className="flex flex-col items-center md:items-end space-y-2 text-sm">
                        <a href="/menu" className="hover:opacity-70">Menu</a>
                        <a href="/events" className="hover:opacity-70">Events</a>
                        <a href="/our-story" className="hover:opacity-70">Our Story</a>
                        <button
                            onClick={() => setShowWidget(true)}
                            className="hover:opacity-70"
                        >
                            Reserve a Table
                        </button>
                    </div>
                </div>

            </div>

            {/* Render Modal if triggered */}
            {showForm && <MailingForm onClose={() => setShowForm(false)}/>}
        </footer>
    );
}
