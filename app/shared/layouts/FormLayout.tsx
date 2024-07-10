import React, { PropsWithChildren } from "react";

const FormLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black backdrop-blur-md">
      <div className="w-70 flex flex-col justify-center items-center bg-white p-10 rounded-large">
        {children}
      </div>
    </div>
  );
};

export default FormLayout;
