import React from "react";

const RegisterFooter = () => {
  return (
    <div className="white fixed bottom-0 flex w-full justify-between rounded-t-4xl bg-white px-6 pt-4 pb-4 shadow-[0_-20px_20px_-1px_rgba(239,239,239,1)]">
      <div>
        <p className="text-sm font-light">Price</p>
        <p className="text-accent-primary text-2xl font-bold">Rs. 350</p>
      </div>
      <button className="bg-accent-primary rounded-lg px-6 py-4 text-2xl font-bold text-white">
        Register Now
      </button>
    </div>
  );
};

export default RegisterFooter;
