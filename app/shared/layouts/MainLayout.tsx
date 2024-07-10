"use client";

import React, { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";
import Button from "../components/atoms/Button";
import Brand from "../components/atoms/Brand";
import {
  setActionType,
  setProductRef,
} from "@/app/core/redux/products/productSlice";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNewProduct = () => {
    router.push("/products/new");
    dispatch(setProductRef({}));
    dispatch(setActionType("new"));
  };
  return (
    <div className="flex flex-col justify-start items-center h-full w-full bg-background p-24">
      <div className="flex justify-between w-full mb-10">
        <div className="flex">
          <Button
            onClick={handleNewProduct}
            variant="primary"
            text="Nuevo producto"
            icon
            isValid
          />
        </div>
        <Brand />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
