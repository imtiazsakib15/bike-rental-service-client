import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-semibold">
      {children}
    </h1>
  );
};

export default Title;
