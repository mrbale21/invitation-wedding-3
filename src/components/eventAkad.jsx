import { FaMapLocation } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import bgAkad from "../assets/image/bg-akad.webp";

const EventAkad = () => {
  return (
    <div className="p-4 pt-12 bg-neutral">
      <div
        data-aos="fade-right"
        className=" text-primary flex items-center justify-center gap-1 font-gavolinedemo text-3xl -mt-2 mb-6 "
      >
        Wedding{" "}
        <span className="font-breathing text-lg font-semibold -ml-2 -mb-6 text-primary/80">
          Event
        </span>
      </div>
      <div className="bg-primary max-w-md overflow-hidden border-none rounded-tr-[80px]">
        <div
          data-aos="zoom-out"
          style={{
            backgroundImage: `url(${bgAkad})`,
            backgroundPosition: "center 23%",
            backgroundSize: "cover",
          }}
          className="relative h-[230px] flex justify-center items-end"
        ></div>
      </div>

      <div className="bg-accent h-[260px] w-full flex justify-start items-start text-primary gap-2">
        <div className="h-full w-20 bg-primary flex items-center justify-center">
          <p
            data-aos="fade-right"
            className="text-accent text-xl font-bold -rotate-90 whitespace-nowrap"
          >
            AKAD NIKAH
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="50" className="flex flex-col">
          <div className="px-4 flex items-center gap-2 -mt-2">
            <h1 className="text-[65px] font-gavolinedemo">24</h1>
            <div className="flex flex-col text-sm font-gavolinedemo font-semibold leading-4">
              <h4 className="">Minggu</h4>
              <h5 className="">November</h5>
              <h4 className="">2025</h4>
            </div>
          </div>
          <div className="text-center w-8/9 h-0.5 bg-gray-400 -mt-3 ml-4" />
          <div className="pt-2 px-4 font-cal-sans">
            <div className="flex items-center gap-1">
              {" "}
              <IoMdTime />
              <h2 className="text-sm">Pukul : 09.00 WIB - Selesai</h2>
            </div>
            <h1 className="py-1 font-semibold text-lg">Lokasi Acara</h1>
            <h5 className="text-xs">
              Kp. Hambalang Rt 08/03, Desa Hambalang, <br /> Kec. Citeureup,
              Bogor
            </h5>
            <button className="flex items-center mt-6 bg-primary text-accent p-1 px-3 gap-1 rounded-tr-2xl text-sm">
              {" "}
              <FaMapLocation /> Lihat Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAkad;
