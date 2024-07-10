"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../atoms/Button";
import Image from "next/image";
import Trash from "@/app/shared/assets/images/trash.svg";
import Edit from "@/app/shared/assets/images/Frame.svg";
import { useRouter } from "next/navigation";
import { Product } from "@/app/shared/models/Product";
import {
  setActionType,
  setProductRef,
  setProductsAux,
} from "@/app/core/redux/products/productSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../atoms/Input";
import { DICTIONARY } from "@/app/shared/constants";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, productsAux } = useSelector((state: any) => state.products);
  const router = useRouter();

  const [showResults, setShowResults] = useState(false);

  const handleDelete = (product: Product) => {
    dispatch(setProductRef(product));
    dispatch(setActionType("delete"));
    router.push(`/products/${product.id}`);
  };

  const handleGoToDetail = (product: Product) => {
    dispatch(setProductRef(product));
    dispatch(setActionType("view"));
    router.push(`/products/${product.id}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setShowResults(true);
      const filterProducts = products.filter((product: Product) =>
        product.title.includes(e.target.value)
      );
      dispatch(setProductsAux(filterProducts));
    } else {
      dispatch(setProductsAux(products));
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full h-full">
        <div className="mb-8 cursor-pointer">
          <Input
            onEmit={(e: any) => handleSearch(e)}
            name="search"
            type="search"
            placeholder={DICTIONARY.search}
            width="w-full"
          />
        </div>
        <table className="w-full bg-white rounded-lg p-4 cursor-pointer">
          <thead className="p-4">
            <tr>
              <th scope="col" className="w-auto text-blue text-center py-4">
                Foto
              </th>
              <th scope="col" className="w-auto text-blue text-center py-4">
                Nombre
              </th>
              <th scope="col" className="w-auto text-blue text-center py-4">
                Categoría
              </th>
              <th scope="col" className="w-auto text-blue text-center py-4">
                Descripción
              </th>
              <th scope="col" className="w-auto text-blue text-center py-4">
                Tarifa base
              </th>
              <th scope="col" className="text-blue">
                <span className="sr-only">Ver</span>
              </th>
              <th scope="col" className="text-blue">
                <span className="sr-only">Editar</span>
              </th>
              <th scope="col" className="text-blue">
                <span className="sr-only">Eliminar</span>
              </th>
            </tr>
            <tr>
              <td colSpan={7}>
                <hr className="border-1 border-t border-backgroundBlue mx-8 w-full" />
              </td>
            </tr>
          </thead>
          <tbody>
            {showResults && productsAux.length > 0 ? (
              productsAux.map((product: Product) => (
                <tr key={product.id}>
                  <td scope="row" className="p-8">
                    <Image
                      width={50}
                      height={50}
                      src={product.image}
                      alt="Lizit"
                    />
                  </td>
                  <td scope="row" className="">
                    <p className="text-center truncate w-20">{product.title}</p>
                  </td>
                  <td scope="row" className="">
                    <p className="text-center">{product.category}</p>
                  </td>
                  <td scope="row" className="">
                    <p className="text-center truncate w-20">
                      {product.description}
                    </p>
                  </td>
                  <td scope="row" className="">
                    <p className="text-center">{product.price}</p>
                  </td>
                  <td scope="row" className="px-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <Button
                        onClick={() => handleGoToDetail(product)}
                        variant="secondary"
                        text={"Ver"}
                        isValid
                      />
                    </a>
                  </td>
                  <td className="px-4">
                    <Image className="" src={Edit} alt="edit" />
                  </td>
                  <td className="px-4">
                    <Image
                      className=""
                      src={Trash}
                      alt="trash"
                      onClick={() => handleDelete(product)}
                    />
                  </td>
                </tr>
              ))
            ) : products.length > 0 ? (
              products.map((product: Product) => (
                <tr key={product.id}>
                  <td scope="row" className="p-8">
                    <Image
                      width={50}
                      height={50}
                      src={product.image}
                      alt="Lizit"
                    />
                  </td>
                  <td scope="row" className="">
                    <p className="text-center truncate w-20">{product.title}</p>
                  </td>
                  <td scope="row" className="">
                    <p className="text-center">{product.category}</p>
                  </td>
                  <td scope="row" className="">
                    <p className="text-center truncate w-20">
                      {product.description}
                    </p>
                  </td>
                  <td scope="row" className="">
                    <p className="text-center">{product.price}</p>
                  </td>
                  <td scope="row" className="px-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <Button
                        onClick={() => handleGoToDetail(product)}
                        variant="secondary"
                        text={"Ver"}
                        isValid
                      />
                    </a>
                  </td>
                  <td className="px-4">
                    <Image
                      onClick={() => {
                        dispatch(setActionType("edit"));
                        dispatch(setProductRef(product));
                        router.push(`/products/${product.id}`);
                      }}
                      className=""
                      src={Edit}
                      alt="edit"
                    />
                  </td>
                  <td className="px-4">
                    <Image
                      className=""
                      src={Trash}
                      alt="trash"
                      onClick={() => handleDelete(product)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={7}>
                  <div className="flex w-full justify-center items-center p-4">
                    <p className="text-center">No hay productos disponibles</p>
                  </div>
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
