"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import X from "@/app/shared/assets/images/X.svg";

import FormLayout from "@/app/shared/layouts/FormLayout";
import ProductForm from "../../molecules/Form";

const NewProductForm = () => {
  const router = useRouter();
  return (
    <FormLayout>
      <div className="flex w-full justify-end py-4">
        <Image
          onClick={() => router.push("/products")}
          src={X}
          alt="close"
          className="cursor-pointer"
        />
      </div>
      <div className="flex w-full">
        <ProductForm isNew />
      </div>
    </FormLayout>
  );
};

export default NewProductForm;
