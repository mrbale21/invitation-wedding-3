import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Credit() {
  return (
    <>
      {/* Bagian Bawah - Kontak & Credit */}
      <div className="w-full max-w-md h-[300px] bg-primary flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center gap-2">
          <h5 data-aos="fade-up" className="font-akaya-kanadaka text-[10px]">
            Design by Iqbaal_bel
          </h5>
          <div data-aos="fade-up" className="flex gap-3 text-lg">
            <a
              href="https://wa.me/6285719894601"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/iqbaal_bel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral transition-all"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Credit;
