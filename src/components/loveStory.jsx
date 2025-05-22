import { useState } from "react";
import arrow1 from "../assets/image/arrow1.png";
import arrow2 from "../assets/image/arrow2.png";
import arrow3 from "../assets/image/arrow3.png";

const LoveStory = () => {
  const [started, setStarted] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  const startSequence = () => {
    // Reset semua state animasi ke false dulu
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);

    // Tunggu sebentar sebelum mulai ulang animasi
    setTimeout(() => {
      setStarted(true);
      setTimeout(() => setShow1(true), 500);
      setTimeout(() => setShow2(true), 1800);
      setTimeout(() => setShow3(true), 1300);
      setTimeout(() => setShow4(true), 2600);
      setTimeout(() => setShow5(true), 3500);
      setTimeout(() => setShow6(true), 4300);
    }, 100); // delay untuk reset animasi
  };

  return (
    <div className="p-4 py-12">
      <div className="bg-accent relative max-w-md overflow-hidden border-none rounded-tl-[80px]">
        <div
          data-aos="zoom-out"
          className="relative bg-[url(assets/image/bg-story.webp)] h-[300px] bg-cover bg-top flex justify-center items-end"
        >
          <h1
            data-aos="zoom-out"
            className="text-black/70 font-semibold grid place-items-center font-gavolinedemo text-2xl bg-accent/50 px-4 rounded-md mb-4"
          >
            Love Story
          </h1>
        </div>
      </div>

      <div className="h-[350px] w-full flex justify-start items-start text-primary gap-2 border-2 border-t-0 border-primary">
        <div className="h-full w-18 bg-primary flex items-center justify-center">
          <p
            data-aos="fade-right"
            className="text-accent text-xl font-bold -rotate-90 whitespace-nowrap"
          >
            T H E S T O R Y
          </p>
        </div>

        <div className="grid grid-cols-3 w-full p-2 pt-4 text-accent gap-2">
          <button
            data-aos="zoom-out"
            className="bg-secondary h-[30px] p-1 rounded-sm text-xs hover:bg-gray-600"
            onClick={startSequence}
          >
            Klik Mulai
          </button>

          {/* Arrow 1 */}
          <div className="col-span-2 items-start flex flex-col z-30">
            <img
              src={arrow1}
              alt="arrow1"
              className={`h-[50px] object-contain z-10 ${
                show1 ? "animate-fadeRight" : "opacity-0"
              }`}
            />
          </div>

          {/* Arrow 2 */}
          <div className="col-span-2 items-center flex flex-col z-30 -mr-5 -mb-3">
            <img
              src={arrow2}
              alt="arrow2"
              className={`h-[100px] object-contain z-10 ${
                show2 ? "animate-fadeLeft" : "opacity-0"
              }`}
            />
          </div>

          {/* Card 1 */}
          <div
            className={`justify-self-end content-end h-20 w-40 bg-secondary p-1 text-center rounded-md shadow-2xl border border-primary shadow-gray-500 ${
              show3 ? "animate-fadeDown" : "opacity-0"
            }`}
          >
            <h2 className="text-sm font-akaya-kanadaka font-semibold">
              Awal Bertemu
            </h2>
            <p className="text-[8px] font-akaya-kanadaka">
              Kami pertama kali bertemu di sebuah kafe kecil. Tanpa disangka,
              percakapan kecil saat itu menjadi awal dari cerita panjang yang
              indah.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`col-span-3 h-18 w-40 bg-secondary p-1 text-center rounded-md shadow-2xl border border-primary shadow-gray-500 ${
              show4 ? "animate-fadeDown" : "opacity-0"
            }`}
          >
            <h2 className="text-sm font-akaya-kanadaka font-semibold">
              Perjalanan Bersama
            </h2>
            <p className="text-[8px] font-akaya-kanadaka">
              Hari-hari bersama dipenuhi tawa, perjalanan, dan pembelajaran.
              Setiap momen membawa kita lebih dekat.
            </p>
          </div>

          {/* Arrow 3 */}
          <div
            className={`col-span-2 -mr-3 justify-self-center z-30 ${
              show5 ? "animate-fadeRight" : "opacity-0"
            }`}
          >
            <img
              src={arrow3}
              alt="arrow3"
              className="h-[70px] object-contain z-10"
            />
          </div>

          {/* Card 3 */}
          <div className="pt-3">
            <div
              className={`justify-self-end content-center h-18 w-40 bg-secondary p-1  text-center rounded-md shadow-2xl border border-primary shadow-gray-500 ${
                show6 ? "animate-fadeRight" : "opacity-0"
              }`}
            >
              <h2 className="text-sm font-akaya-kanadaka font-semibold">
                Komitmen
              </h2>
              <p className="text-[8px] font-akaya-kanadaka">
                Di titik ini, kami sadar bahwa ini bukan sekadar kisah, tapi
                awal dari kehidupan bersama yang kami impikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveStory;
