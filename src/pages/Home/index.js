import "swiper/css";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { images, productImages } from "../../assets/images";

import Image from "../../components/Image/Image";
import React from "react";

function Home() {
  const bannerImages = [images.banner1, images.banner2, images.banner3];
  const products = [
    {
      image: productImages.product1,
      title: "Womenswear",
      description:
        "With summer on the way, we’ve created jumpsuits, dresses, and shorts, ready for warm weather.",
    },
    {
      image: productImages.product2,
      title: "Menswear",
      description:
        "Dress down but don’t compromise on style. Our summer looks for men let you keep your cool in the heat.",
    },
    {
      image: productImages.product3,
      title: "Womenswear",
      description:
        "With summer on the way, we’ve created jumpsuits, dresses, and shorts, ready for warm weather.",
    },
    {
      image: productImages.product4,
      title: "Womenswear",
      description:
        "With summer on the way, we’ve created jumpsuits, dresses, and shorts, ready for warm weather.",
    },
    {
      image: productImages.product5,
      title: "Womenswear",
      description:
        "With summer on the way, we’ve created jumpsuits, dresses, and shorts, ready for warm weather.",
    },
  ];

  return (
    <>
      <Swiper
        loop
        autoplay={{
          delay: 2000,
        }}
        pagination
        modules={[Pagination, Autoplay]}
        className="d-home-banner"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide className="w-screen" key={index}>
            <div className="relative h-[550px] w-full">
              <Image
                src={image}
                alt="Banner"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="d-home-banner-item__text">
              <div className="container">
                <div>{c.title}</div>
                <p>{c.description}</p>
                <Link href="/">
                  <a className="hide-pc">Chi tiết</a>
                </Link>
              </div>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center h-[448px] bg-slate-50 flex flex-wrap justify-center text-xl ">
        <h1 className="max-w-[50%] m-auto relative top-[15%] font-medium">
          {" "}
          About
        </h1>
        <span className="block max-w-[50%] mx-[25%] ">
          As an AI language model, I cannot provide my personal opinion on "One
          piece", as it is an anime/manga series that I do not have the
          capability to watch or read. However, I can provide information about
          the series and answer questions related to it.
        </span>
      </div>

      <div className="container xl text-center m-auto text-xl">
        {products.map((product, index) =>
          index % 2 === 0 ? (
            <div key={index} className="flex justify-around  h-[980px]">
              <Image
                src={product.image}
                alt="banner"
                className="block m-8 w-[40%]"
              />
              <div className="  text-center flex-auto align-middle  ">
                <h1 className="text-center  pt-[49%] font-bold">
                  {product.title}
                </h1>
                <p className="text-center">{product.description}</p>
              </div>
            </div>
          ) : (
            <div key={index} className="flex justify-around h-[1124px]">
              <div className=" text-center flex-auto align-middle  ">
                <h1 className="text-center pt-[49%] font-bold">
                  {product.title}
                </h1>
                <p className="text-center">{product.description}</p>
              </div>
              <Image src={product.image} alt="banner" className="w-[40%]" />
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Home;
