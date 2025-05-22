import { useNavigate, useSearchParams } from "react-router-dom";
import AnimatedPage from "./animatedPage";
import { motion } from "framer-motion";
import CircleType from "circletype";
import { useEffect, useRef, useState } from "react";
import { IoMdMailOpen } from "react-icons/io";

function Introduction() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("to");
  const textRef = useRef(null);

  const handleOpenInvitation = () => {
    // Tunggu animasi selesai, lalu navigate
    setTimeout(() => {
      navigate("/open");
    }, 600); // harus sama/lebih dari durasi exit animation
  };

  // Mengatur teks melingkar menggunakan CircleType
  useEffect(() => {
    let circleType;

    if (textRef.current) {
      circleType = new CircleType(textRef.current);
      circleType.radius(120);
    }

    return () => {
      if (circleType) {
        circleType.destroy();
      }
    };
  }, []);

  return (
    <>
      <AnimatedPage>
        <div className="h-screen w-screen flex justify-center items-center bg-accent bg-contain text-accent">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col gap-20 py-20 justify-center items-center h-full w-96 bg-[url(assets/image/bg-first.webp)] bg-cover bg-bottom"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-0" />
            <div className="z-10 py-2 flex flex-col justify-end items-center">
              <h1
                ref={textRef}
                className="mt-20 text-accent text-sm font-extrabold font-cal-sans transform"
              >
                The Wedding Of
              </h1>
              <div>
                <h2 className="font-gavolinedemo text-3xl">Ahmad & Navisa</h2>
              </div>
            </div>
            <div className="z-10 grid place-items-center font-cal-sans gap-2 mt-5">
              <h4 className="text-sm">Dear,</h4>
              <h3 className="font-semibold mb-4 text-accent">
                {name ? name : "Tamu Undangan"}
              </h3>
              <button
                onClick={handleOpenInvitation}
                className="flex items-center  gap-1 bg-transparent text-accent text-xs hover:bg-accent/20 p-1 px-2 rounded-md shadow shadow-accent border border-accent/30"
              >
                <IoMdMailOpen />
                Buka Undangan
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Introduction;
