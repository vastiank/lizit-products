import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Image from "next/image";
import Lizit from "@/app/shared/assets/images/Lizit.svg";

interface LoaderProps {
  label: string;
}

export default function Loader(props: LoaderProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black backdrop-blur-md">
      <div className="flex flex-col justify-center items-center bg-white p-10 rounded-lg">
        <Image width={50} height={50} src={Lizit} alt="animated_logo" />
        <div className="mt-8">
          <BeatLoader color="#5954D2" />
        </div>
        <p className="mt-2 text-primary text-lg text-center font-bold">
          {props.label}
        </p>
      </div>
    </div>
  );
}
