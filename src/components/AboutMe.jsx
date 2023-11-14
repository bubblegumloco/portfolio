import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/laptopAnimation.json";

const AboutMe = () => {
  return (
    <div className="md:p-5 m-auto text-[#d63781] max-w-[768px]:p-0 dark:bg-black">
      <h1 className="flex items-center justify-center leading-20 font-thin text-7xl">
        About
      </h1>
      <div>
        <section className="flex justify-center items-center">
          <div className="flex justify-center items-center m-auto max-[768px]:flex-col bg-transparent">
            <div className="max-w-[50%] max-[768px]:scale-150 max-[768px]:mb-4 max-[768px]:mt-6">
              <Lottie animationData={animationData} />
            </div>
            <div className="leading-20 font-thin md:max-w-[50%] md:text-2xl text-xl pr-8 max-[768px]:px-8">
              <p className="dark:text-transparent dark:bg-gradient-to-bl from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ab, nobis similique iste fugiat, tempora facilis
                deleniti beatae ipsam quas repellat voluptate magni sunt
                reprehenderit? Natus sed eligendi hic accusantium.
              </p>
              <p className="mb-4"></p>
              <p className="dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                culpa hic recusandae sit officia, eius, id illo totam, impedit
                aliquam quaerat est? Officia debitis repellat minima dignissimos
                adipisci, voluptatum aut?
              </p>
              <p className="mb-4"></p>
              <p className="dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                sint ex quam neque modi saepe nobis inventore incidunt aperiam?
                Rerum reprehenderit quisquam illo autem non eaque natus.
                Aliquam, ea sunt.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
