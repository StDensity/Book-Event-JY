import React from "react";

const RegisterFooter = () => {
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-between rounded-t-4xl bg-white px-6 pt-4 pb-4 shadow-[0_-20px_20px_-1px_rgba(239,239,239,1)] lg:px-14 xl:px-64">
      <div className="hidden w-sm items-center justify-between md:flex">
        <div className="space-y-1">
          <p className="text-accent-primary font-semibold md:text-lg">Date</p>
          <p className="font-bold md:text-xl">25 Oct 2021</p>
        </div>
        <div className="space-y-1">
          <p className="text-accent-primary font-semibold md:text-lg">Time</p>
          <p className="font-bold md:text-xl">7:30 pm</p>
        </div>
        <div className="space-y-1">
          <p className="text-accent-primary font-semibold md:text-lg">
            Duration
          </p>
          <p className="font-bold md:text-xl">60 min</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between md:w-auto md:justify-normal md:gap-8">
        <div>
          <p className="text-sm font-light">Price</p>
          <p className="text-accent-primary text-2xl font-bold">Rs. 350</p>
        </div>
        <button className="bg-accent-primary hover:bg-accent-primary/95 hover:cursor-pointer rounded-lg px-6 py-4 text-2xl font-bold text-white">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default RegisterFooter;
