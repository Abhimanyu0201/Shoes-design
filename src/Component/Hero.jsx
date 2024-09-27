import React from "react";

export const Hero = () => {
  return (
    <div className="Hero w-full h-[88vh] flex  justify-center ">
      <div className="hero-heading px-20 py-10  w-[50%] flex  flex-col gap-5  ">
        <h1 className=" text-8xl font-extrabold tracking-normal leading-1 ">
          YOUR FEET <br />
          DESERVE <br />
          THE BEST
        </h1>

        <p className=" text-zinc-600 font-semibold leading-1 trackin w-[60%]">
          {" "}
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="button flex gap-9">
          <button className=" text-xl font-semibold  px-3 bg-red-500 text-white">
            Shop Now
          </button>
          <button className=" text-xl font-semibold border-zinc-500 border-2  px-3 text-zinc-600">
            Category
          </button>
        </div>
        <div className=" flex flex-col gap-4">
          <h6 className="text-zinc-500">Also Available on</h6>
          <div className="flex items-center gap-5">
            <a href="https://www.flipkart.com/">
              <img src="\Image\flipkart.png" alt=" Flipkart" />
            </a>
            <a href="https://www.amazon.in/">
              <img src="\Image\amazon.png" alt="Amazon" />
            </a>
          </div>
          <p className="text-zinc-500">
            Created By
            <a href="https://www.instagram.com/deepak_bairwa_6023/?igsh=MzNlNGNkZWQ4Mg%3D%3D">
              <span className="text-red-400">@Deepak_Bairwa</span>
            </a>
          </p>
        </div>
      </div>

      <div className="pt-16">
        {" "}
        <img src="\Image\hero-image.png" alt="" />
      </div>
    </div>
  );
};
