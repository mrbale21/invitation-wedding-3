import { FaInstagram } from "react-icons/fa6";

function Bride() {
  return (
    <>
      <div className="w-full pt-8 pb-4 bg-neutral overflow-hidden">
        {/* Header / Pengantar */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="grid place-items-center"
        >
          <h2 className="font-adelio-darmanto text-2xl text-primary">
            Assalamualaikum Wr. Wb
          </h2>
          <p className="text-xs max-w-prose text-primary z-10 text-center mt-2 pb-8">
            Dengan memohon Rahmat dan Ridho Allah SWT yang telah <br />
            menciptakan makhluk-Nya secara berpasang-pasangan <br />
            Kami bermaksud menyelenggarakan pernikahan kami
          </p>
        </div>

        <div className="grid-rows-2 grid w-full relative">
          {/* Box Background Tengah */}
          <div
            data-aos="zoom-in"
            data-aos-delay="20"
            className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-full z-0 bg-accent flex items-center justify-center rounded-tr-[100px] rounded-bl-[100px]"
          >
            <h1 className="font-cal-sans text-4xl text-primary font-semibold z-20"></h1>
          </div>

          {/* Box Mempelai Pria */}
          <div className="-mb-4 z-10 flex flex-col items-start w-full">
            <div
              data-aos="fade-right"
              data-aos-delay="20"
              className="bg-[url(assets/image/mempelai-pria.webp)] h-[230px] w-[200px] bg-contain bg-top flex justify-start items-end rounded-tr-[70px] rounded-br-[70px]"
            />
            <div className="p-4 pl-6 flex flex-col items-start w-full">
              <h1
                data-aos="fade-right"
                data-aos-delay="30"
                className=" font-sacramento font-semibold text-3xl text-primary "
              >
                Ahmad Laelatulloh
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="40"
                className="text-start text-black text-[12px]"
              >
                Putra bungsu dari Bapak Deden & <br />
                Ibu Eneng
              </p>
              <button
                data-aos="fade-right"
                data-aos-delay="45"
                className="text-xs font-semibold p-1 px-2 text-center bg-primary/90 hover:bg-primary/80 text-accent rounded-sm flex items-center gap-1 mt-4"
              >
                <FaInstagram />
              </button>
            </div>
          </div>

          {/* Box Mempelai Wanita */}
          <div className="-mt-8 z-10 flex flex-col items-end justify-self-end w-full">
            <div
              data-aos="fade-left"
              data-aos-delay="20"
              className="bg-[url(assets/image/mempelai-wanita.webp)] h-[230px] w-[200px] bg-contain bg-center flex items-end rounded-tl-[70px] rounded-bl-[70px]"
            />
            <div className="p-4 pr-6 flex flex-col items-end ml-10">
              <h1
                data-aos="fade-left"
                data-aos-delay="30"
                className="font-sacramento font-semibold text-3xl text-primary"
              >
                Nurlaela Navisa
              </h1>
              <p
                data-aos="fade-left"
                data-aos-delay="35"
                className="text-end text-[12px] text-black"
              >
                Putri ke-empat dari Bapak Mustofa & <br />
                Ibu Suaebah
              </p>
              <button
                data-aos="fade-left"
                data-aos-delay="40"
                className="text-xs font-semibold p-1 px-2 text-center bg-primary/90 hover:bg-primary/80 text-accent rounded-sm flex items-center gap-1 mt-4"
              >
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bride;
