import React from "react";

const Button = ({ title, func }) => {
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200"
    >
      <p>{title}</p>{" "}
    </button>
  );
};

export default Button;
