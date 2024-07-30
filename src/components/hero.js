import { useState, useEffect } from "react";
import Header from "./header";

export default function Hero({ content, locale }) {
  const [segment, setSegment] = useState("default");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedSegment = localStorage.getItem("segment") || "default";
      let found = false;
      for (let x = 0; x < content?.length; x++) {
        if (content[x].segment === savedSegment) found = true;
      }
      if (!found) {
        setSegment("default");
      } else {
        setSegment(savedSegment);
      }
    }
  }, [content]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? content.length - 1 : prevSlide - 1
    );
  };
console.log(content)
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {content?.map((hero, index) => {
          if (1 === 1) {
            return (
              <div
                key={index}
                className="bg-black relative isolate overflow-hidden h-screen flex-shrink-0 w-full"
              >
                <img
                  className="absolute inset-0 -z-10 h-full w-full object-cover opacity-75"
                  src={hero.image?.url}
                  alt={hero.header}
                />
                <Header color="white" locale={locale} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl">
                  <div className="text-center md:w-[42rem]">
                    <h1 className="mt-8 text-center text-white">
                      {hero.header}
                    </h1>
                    <p className="mx-5 mt-8 text-left text-white">
                      {hero.body}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <a
                        href={hero.page.length > 0 ? hero.page[0].url : "#"}
                        className="rounded-md px-8 py-4 text-md tracking-widest uppercase font-bold text-white shadow-sm ring-2 ring-inset ring-orange-600 hover:text-neutral-700 hover:bg-gray-50"
                      >
                        {hero.button_text}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={handlePrevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={handleNextSlide}
      >
        &gt;
      </button>
    </div>
  );
}
