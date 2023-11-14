import React from "react";

const Hero = () => {
  return (
    <div className="md:p-5 m-auto text-[#d63781] max-w-[768px]:p-0 dark:bg-black">
      <div>
        <section className="flex justify-center items-center">
          <div className="flex justify-center items-center m-auto max-[768px]:flex-col bg-transparent">
            {/*left div w/ info*/}
            <div className="z-1 min-[769px]:mr-[-160px] bg-transparent heroContainer">
              <div className="mb-10 bg-transparent"></div>
              <h1 className="text-6xl md:leading-20 font-thin bg-transparent max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center min-[1800px]:text-[100px] dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-300 to-rose-50 dark:bg-clip-text">
                Hello! I'm
              </h1>
              <div className="flex font-titleFont text-[5em] md:text-[12em] bg-transparent max-[768px]:justify-center max-[768px]:items-center min-[1800px]:text-[16em]">
                <h1 className="bg-transparent z-10 dark:text-transparent dark:bg-gradient-to-tl from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text">
                  Lorem
                </h1>
              </div>
              <div className="flex max-[768px]:justify-center max-[768px]:items-center text-xl bg-transparent">
                <h2 className="z-10 text-3xl leading-20 font-thin bg-transparent md:max-w-[400px] pb-2 min-[1800px]:text-6xl min-[1800px]:max-w-[600px] dark:text-transparent dark:bg-gradient-to-tl from-fuchsia-100 via-pink-300 to-rose-50 dark:bg-clip-text text-center">
                  Lorem, ipsum dolor sit consectetur adipisicing
                </h2>
              </div>
              <div className="flex max-[768px]:justify-center max-[768px]:items-center text-xl bg-transparent max-[768px]:text-center">
                <h2 className="z-10 text-3xl leading-20 font-thin bg-transparent pb-2 md:max-w-[400px] min-[1800px]:text-6xl min-[1800px]:max-w-[600px] dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-300 to-rose-50 dark:bg-clip-text text-center">
                  Lorem, ipsum dolor sit consectetur adipisicing.
                </h2>
              </div>
              <div className="flex max-[768px]:justify-center items-center text-xl text-center min-[769px]:ml-[23%] min-[1800px]:ml-[28%]">
                <a href="#contact">
                  <button className="z-10 leading-20 font-thin px-3 py-2 bg-[#d63781] text-white mb-2">
                    Contact Me!
                  </button>
                </a>
              </div>
            </div>

            <div className="mx-3">
              <div>
                <a href="https://mohani.netlify.app">
                  <img
                    className="w-full h-full object-cover rounded-tl-[1000px] rounded-tr-[1000px] z-0 flex justify-center items-center  min-[1240px]:max-w-3xl min-[1800px]:max-w-7xl"
                    src="/images/sunset.jpeg"
                    alt="sunset"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
