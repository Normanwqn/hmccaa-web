import * as React from "react";

const Card = ({ img, date, title, children, containerCss }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 pb-[0.9375rem] mx-auto rounded-xl border border-solid border-b-Neutral-900 shadow-md overflow-hidden ${containerCss} md:gap-5`}
    >
      {img}
      <div className="flex flex-col gap-1 items-start md:gap-3 px-2 w-full md:px-[1.8125rem]">
        <p className="mb-0 text-[0.625rem] leading-[0.9375rem] text-black font-medium tracking-[0.0375rem] md:text-base md:leading-[1.3125rem] md:tracking-[0.0525rem]">
          {date}
        </p>
        <h3 className="text-lg leading-[1.25rem] font-semibold text-black md:leading-[1.8rem] md:text-2xl">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
