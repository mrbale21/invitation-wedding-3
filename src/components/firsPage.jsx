import { useEffect, useState, lazy, Suspense } from "react";
import Bride from "./bride";
import Footer from "./footer";
import BottomNavbar from "./bottomNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedPage from "./animatedPage";
import { motion } from "framer-motion";
import SpecialDay from "./specialDay";
import LoveStory from "./loveStory";
import bg1 from "../assets/image/bg-first-1.webp";
import bg2 from "../assets/image/bg-first.webp";
import bg3 from "../assets/image/bg-first-2.webp";
import bg4 from "../assets/image/bg-first-3.webp";
import MusicPlayer from "./musicPlayer";
import Gallery from "./gallery";
import EventAkad from "./eventAkad";
import EventResepsi from "./eventResepsi";
const Gift = lazy(() => import("./gift"));
const WishPage = lazy(() => import("./wish/wishPage"));

const bgImages = [bg1, bg2, bg3, bg4];

function FirstPage() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen w-full overflow-hidden bg-[url(assets/image/bg.png)] bg-contain text-accent  p-0 m-0 border-none">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md min-h-screen mx-auto bg-accent bg-opacity-90 flex flex-col items-center"
        >
          {/* Gambar Header dengan Carousel */}

          <div className="relative w-full h-[420px] overflow-hidden flex items-end justify-center">
            <img
              src={bgImages[currentBg]}
              alt="Background"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b z-10" />
          </div>
          <div className="relative w-full h-[400px] overflow-hidden z-10 -mt-65 ">
            <svg
              className="absolute top-0 left-0 w-full h-full translate-y-6 opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#52677d"
                fillOpacity="1"
                d="M0,96L30,133.3C60,171,120,245,180,234.7C240,224,300,128,360,117.3C420,107,480,181,540,202.7C600,224,660,192,720,202.7C780,213,840,267,900,282.7C960,299,1020,277,1080,240C1140,203,1200,149,1260,106.7C1320,64,1380,32,1410,16L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
            <svg
              className="absolute top-0 left-0 w-full h-full translate-y-6 opacity-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#1c2e4a"
                fillOpacity="1"
                d="M0,64L60,53.3C120,43,240,21,360,42.7C480,64,600,128,720,170.7C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
            <svg
              className="absolute top-0 left-0 w-full h-full translate-y-6 opacity-50 mt-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#f4f6f7"
                fillOpacity="1"
                d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
            <svg
              className="absolute top-0 left-0 w-full h-full translate-y-6 opacity-100 mt-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#f4f6f7"
                fillOpacity="1"
                d="M0,192L60,165.3C120,139,240,85,360,64C480,43,600,53,720,90.7C840,128,960,192,1080,202.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className=" w-full h-full p-4  -mt-35 z-30">
            <div className="flex flex-col justify-start items-start text-start mb-10 px-4 text-primary">
              <h1
                data-aos="fade-up"
                data-aos-delay="80"
                className="text-lg font-cal-sans text-primary"
              >
                The Wedding Of
              </h1>
              <h3
                data-aos="fade-up"
                data-aos-delay="80"
                className="font-gavolinedemo text-3xl font-semibold text-primary"
              >
                Ahmad & Navisa
              </h3>
              <h5
                data-aos="fade-up"
                data-aos-delay="80"
                className="text-sm font-raleway"
              >
                Sabtu, 14 Juni 2025
              </h5>
              {/* <Day targetDate="2025-06-15T00:00:00" /> */}
            </div>
          </div>

          {/* Sections */}
          <div className="w-full">
            <SpecialDay targetDate="2025-06-15T00:00:00" />
          </div>

          <div id="bride" className="w-full">
            <Bride />
          </div>

          <div id="story" className="w-full">
            <LoveStory />
          </div>

          <div id="wedding" className="w-full">
            <EventAkad />
          </div>

          <div id="wedding" className="w-full">
            <EventResepsi />
          </div>

          <div id="gallery" className="w-full">
            <Gallery />
          </div>

          <div className="w-full">
            <Gift />
          </div>

          <div id="wish" className="w-full">
            <WishPage />
          </div>

          <div className="w-full">
            <Footer />
          </div>

          <MusicPlayer />
        </motion.div>

        <BottomNavbar onNavigate={scrollToSection} />
      </div>
    </AnimatedPage>
  );
}

export default FirstPage;
