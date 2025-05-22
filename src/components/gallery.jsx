import Stack from "./animation/stackimage";

const images = [
  {
    id: 1,
    img: "/assets/image/gallery-1.webp",
  },
  {
    id: 2,
    img: "/assets/image/gallery-2.webp",
  },

  {
    id: 3,
    img: "/assets/image/gallery-4.webp",
  },
  {
    id: 4,
    img: "/assets/image/gallery-5.webp",
  },
  {
    id: 5,
    img: "/assets/image/gallery-6.webp",
  },

  {
    id: 6,
    img: "/assets/image/gallery-8.webp",
  },
];

function Gallery() {
  return (
    <>
      <div className="p-4 pt-8 pb-12">
        <div
          data-aos="fade-right"
          className=" flex justify-center items-center font-gavolinedemo text-3xl font-semibold py-4 text-primary text-center"
        >
          <span className="font-breathing text-primary/80 text-xl -mr-3 -mt-7">
            Our
          </span>{" "}
          Gallery
        </div>
        <div className="py-12 w-full flex flex-col justify-center items-center text-primary bg-secondary border border-accent rounded-tl-[80px]">
          <p className="text-xs text-accent/80 -mt-3 pb-2">
            Geser, untuk melihat poto lainnya!
          </p>
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 280, height: 280 }}
            cardsData={images}
          />
        </div>
      </div>
    </>
  );
}

export default Gallery;
