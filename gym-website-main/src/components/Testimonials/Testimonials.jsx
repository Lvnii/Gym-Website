import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "დავითი",
    text: "სავარჯიშოდ ამაზე კომფორტულ ადგილს ვერ ნახავთ!!!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "კახაბერი",
    text: "არასდროსაა რიგები ტრენაჟორზე, ერთი ტრენაჟორი 7 ცალი დგას. უდაოდ საუკეთესო.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "სოფო",
    text: "არიან ბევრი პირადი ტრენერები. ყოველთვის არის ვიღაც ვინც მუდამ შენთან იქნება და დაგეხმარება.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "ქემალი",
    text: `Translated: "არიან ინგლისური, თურქული, რუსული და ქართული ენის მცოდნე ტრენერები `,
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div className="container">
        
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            გამოხმაურებები
          </h1>
        </div>

        
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-primary">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
