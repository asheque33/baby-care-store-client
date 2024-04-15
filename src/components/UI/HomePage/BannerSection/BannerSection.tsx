import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px] ">
        <Image
          width={1250}
          height={300}
          src="https://i.ibb.co/wQXL0FN/Babycare-banner-1-desktop-1600x500.jpg"
          alt="image1"
          className="mx-auto"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full h-[600px] mx-auto"
      >
        <Image
          width={1250}
          height={300}
          src="https://i.ibb.co/9vX0z5H/feeding-main-banner.jpg"
          alt="image2"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full h-[600px] mx-auto"
      >
        <Image
          width={1250}
          height={300}
          src="https://i.ibb.co/BtWdf5R/diaper-main-banner.jpg"
          alt="image3"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full h-[600px] mx-auto"
      >
        <Image
          width={1250}
          height={300}
          src="https://i.ibb.co/WfCHSpz/babycare-brands-desktop-1600x500-1600x500.jpg"
          alt="image4"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide5"
        className="carousel-item relative w-full h-[600px] mx-auto"
      >
        <Image
          width={1250}
          height={300}
          src="https://i.ibb.co/jzWyRpd/Web-Banner-1600-500-1600x500.jpg"
          alt="image5"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
