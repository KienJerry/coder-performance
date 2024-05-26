import React from "react";

type TProps = {
  children?: React.ReactNode | any;
};

export const Main: React.FC<TProps> = ({ children }) => {
  return (
    <main>
      <article>{children}</article>
    </main>
  );
};
