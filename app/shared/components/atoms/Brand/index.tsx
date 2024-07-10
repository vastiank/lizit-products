import React from "react";
import Image from "next/image";
import Lizit from "@/app/shared/assets/images/Lizit.svg";

const Brand = () => {
  return <Image width={70} height={70} src={Lizit} alt="Lizit" />;
};

export default Brand;
