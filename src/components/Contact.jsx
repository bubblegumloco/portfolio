import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="lg:px-60 px-5 pt-2 pb-16 text-center dark:bg-black"
    >
      <h1 className="text-center mb-3 text-6xl leading-20 font-thin dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text">
        Get In Touch
      </h1>
      <p className="mb-2 text-2xl leading-20 font-thin dark:text-transparent dark:bg-gradient-to-tr from-fuchsia-100 via-pink-400 to-rose-50 dark:bg-clip-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor itaque
        hic reiciendis placeat quasi nostrum praesentium aliquid totam tempora
        in suscipit, quod laudantium laborum a soluta distinctio inventore velit
        pariatur.
      </p>
      <form action="" method="POST" encType="multipart/form-data">
        <div className="flex flex-col py-2 text-lg leading-20 font-thin">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            className="px-3 py-2 bg-purple-50 dark:bg-purple-200 dark:text-black dark:placeholder:text-slate-600"
          ></input>
        </div>
        <div className="flex flex-col py-2 text-lg leading-20 font-thin">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-Mail"
            className="px-3 py-2 bg-purple-50 dark:bg-purple-200 dark:text-black dark:placeholder:text-slate-600"
          ></input>
        </div>
        <div className="flex flex-col py-2 text-lg leading-20 font-thin">
          <textarea
            placeholder="Your Message"
            rows="8"
            id="message"
            name="message"
            className="px-3 py-2 bg-purple-50 dark:bg-purple-200 dark:text-black dark:placeholder:text-slate-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-50 p-4 mt-2 text-xl leading-20 font-thin dark:bg-purple-200  dark:text-black hover:bg-rose-50 dark:hover:bg-purple-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
