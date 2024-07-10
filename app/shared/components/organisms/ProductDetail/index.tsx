"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductForm from "../../molecules/Form";
import Brand from "../../atoms/Brand";
import Image from "next/image";
import Shape from "@/app/shared/assets/images/Shape.svg";
import { useRouter } from "next/navigation";
import ModalComponent from "../../molecules/Modal";
import { DeleteModal } from "../../molecules/Modal/constants";
import { RemoveMessage } from "@/app/shared/utils/Notifications";
import {
  deleteProduct,
  setActionType,
} from "@/app/core/redux/products/productSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../atoms/Loader";

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { productRef, actionType, flow } = useSelector(
    (state: any) => state.products
  );

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(productRef.id));
    RemoveMessage("Producto eliminado");
    setLoading(true);
    setTimeout(() => {
      router.push("/products");
    }, 3000);
  };

  const handleOnCancel = () => {
    if (flow === "detail") {
      dispatch(setActionType("edit"));
      router.push(`/products/${productRef.id}`);
    } else {
      router.push("/products");
    }
  };

  const router = useRouter();
  return (
    <>
      <ToastContainer />
      {actionType === "delete" && !loading ? (
        <ModalComponent
          onCancel={() => handleOnCancel()}
          onConfirm={handleDeleteProduct}
          config={DeleteModal}
        />
      ) : loading ? (
        <Loader label="Cargando..." />
      ) : (
        <div className="flex flex-col justify-start items-center h-screen w-full bg-background p-24">
          <div className="flex justify-between w-full mb-10">
            <div className="flex items-center justify-center">
              <Image
                src={Shape}
                width={25}
                height={25}
                alt="Shape"
                className="cursor-pointer"
                onClick={() => router.push("/products")}
              />
              <p className="ml-8 text-3xl text-deepBlue">{productRef.title}</p>
            </div>
            <Brand />
          </div>
          <ProductForm onlyRead />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
