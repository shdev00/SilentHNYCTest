import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Events from "./pages/Events";
import Story from "./pages/Story";
import "./index.css";
import FormTest from "./pages/FormTest.jsx";
import ExternalRedirect from "./pages/ExternalRedirect"
import "./styles/home.mobile.css";;
import "./styles/menu.mobile.css";
import "./styles/events.mobile.css";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import ScrollToTop from "./components/ScrollToTop";
import { OTProvider } from "./components/OTwidget.jsx";


// index.jsx or App.jsx (once, at boot)
if (typeof window !== "undefined") {
    const ua = navigator.userAgent;
    const isIOS =
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); // iPadOS

    const isMacSafari =
        /^((?!chrome|crios|android|edg|fxios).)*safari/i.test(ua) &&
        navigator.vendor === "Apple Computer, Inc.";

    const root = document.documentElement;
    if (isIOS) root.classList.add("is-ios");
    if (isMacSafari) root.classList.add("is-safari");
}


function App() {
    const location = useLocation();
    const hideNavbarOnRoutes = ["/profile"];
    const cld = new Cloudinary({ cloud: { cloudName: 'du7ybsrws' } });

    // Use this sample image or upload your own via the Media Explorer
    const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

    return (

        <>
            <OTProvider>
            {!hideNavbarOnRoutes.includes(location.pathname) && <Navbar />}
            <ScrollToTop /> {/*Makes user start at the top of page when navigating*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />

                <Route
                    path="/reservations"
                    element={<ExternalRedirect to="https://www.opentable.ca/r/silent-h-toronto" />}
                />
                <Route path="/events" element={<Events />} />
                {/* Redirects to silent aitch site */}

                {/* Redirects to our story site */}
                <Route
                    path="/story"
                    element={<Story />}
                />

                {/* Test route just for FormTest */}
                <Route path="/form" element={<FormTest />} />
            </Routes>
            </OTProvider>
        </>
    );
}

export default App;
