import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import bgIntro from "../assets/image/bg-footer.webp";
import Credit from "./credit";

function Footer() {
  return (
    <>
      <div className="py-12 px-4">
        <div className="w-full text-accent/70 flex flex-col items-center justify-start ">
          {/* Bagian Atas - Gambar Mempelai */}
          <div
            data-aos="zoom-out"
            className="relative w-full h-[350px] bg-contain flex items-end justify-center rounded-tr-[80px]"
            style={{
              backgroundImage: `url(${bgIntro})`,
              backgroundPosition: "center 45%",
            }}
          >
            {/* Konten teks */}
          </div>
          <div className="relative z-10 text-center py-6 px-4 bg-primary">
            <h5 data-aos="fade-up" className="text-[11px] font-raleway mt-2">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu
              kepada kedua mempelai
            </h5>
            <h4 data-aos="fade-up" className="font-sacramento text-xl mt-3">
              Wassalamualaikum Wr. Wb.
            </h4>
          </div>
        </div>
      </div>
      <Credit />
    </>
  );
}

export default Footer;
