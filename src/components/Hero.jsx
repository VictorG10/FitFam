import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET FIT</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Fit<span className="text-blue-400">Fam</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light ">
        I hereby acknowledge that I may become unbelievably{" "}
        <span className="text-blue-400 font-medium">fit </span>
        and accept all risks of becoming the local mass{" "}
        <span className="text-blue-400 font-medium">montrosity</span>, afflicted
        with severe dismorphia, unable to fit through the doors.
      </p>

      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        title={"Accept & Begin"}
      />
    </div>
  );
};

export default Hero;
