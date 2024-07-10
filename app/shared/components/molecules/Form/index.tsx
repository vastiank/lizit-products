"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "@/app/shared/components/atoms/Input";
import Button from "../../atoms/Button";
import { useRouter } from "next/navigation";
import {
  addProduct,
  setActionType,
  updateProduct,
} from "@/app/core/redux/products/productSlice";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuccessMessage } from "@/app/shared/utils/Notifications";

type Props = {
  onlyRead?: boolean;
  isEditable?: boolean;
  isNew?: boolean;
};

const ProductForm = (props: Props) => {
  const initialState = {
    title: "",
    category: "",
    description: "",
    price: "",
    image: "",
  };

  const [loading, setLoading] = useState(false);

  const [isValidForm, setIsValidForm] = useState(false);

  const dispatch = useDispatch();
  const { productRef, actionType } = useSelector(
    (state: any) => state.products
  );
  const [productForm, setProductForm] = useState(
    actionType === "edit" || actionType === "view" ? productRef : initialState
  );
  const router = useRouter();

  const handleDelete = () => {
    dispatch(setActionType("delete"));
  };

  const [image, setImage] = useState<string | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setImage(result);
      }
    };

    reader.readAsDataURL(file);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg", ".png"],
    },
  });

  const handleChange = (e: any) => {
    setProductForm({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = () => {
    const product = {
      ...productForm,
      image: image,
    };
    setLoading(true);

    dispatch(addProduct(product));
    SuccessMessage("Producto creado con éxito");
    setTimeout(() => {
      router.push("/products");
    }, 3000);
  };

  const handleUpdateProduct = () => {
    setLoading(true);
    dispatch(
      updateProduct({
        id: productRef.id,
        title: productForm.title,
        category: productForm.category,
        description: productForm.description,
        price: productForm.price,
        image: image !== null ? image : productRef.image,
      })
    );
    SuccessMessage("Producto actualizado con éxito");
    setTimeout(() => {
      router.push("/products");
    }, 3000);
  };

  useEffect(() => {
    if (
      productForm.title !== "" &&
      productForm.category !== "" &&
      productForm.description !== "" &&
      productForm.price !== "" &&
      image !== null
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [productForm, image, isValidForm]);

  return (
    <>
      <ToastContainer />

      <div className="w-full flex flex-col">
        <div className="flex">
          <div className={`flex mr-4 flex-col w-full`}>
            <div className="m-4">
              <Input
                onEmit={(e: any) => handleChange(e)}
                name="title"
                disabled={actionType === "view"}
                label="Nombre"
                type="text"
                value={productForm.title}
                required={actionType === "new"}
              />
            </div>
            <div className="m-4">
              <Input
                onEmit={(e: any) => handleChange(e)}
                name="category"
                disabled={actionType === "view"}
                label="Categoría"
                type="text"
                value={productForm.category}
                required={actionType === "new"}
              />
            </div>
            <div className="m-4">
              <Input
                onEmit={(e: any) => handleChange(e)}
                name="description"
                disabled={actionType === "view"}
                label="Descripción"
                type="textarea"
                value={productForm.description}
                required={actionType === "new"}
              />
            </div>
            <div className="m-4">
              <Input
                onEmit={(e: any) => handleChange(e)}
                name="price"
                disabled={actionType === "view"}
                label="Tarifa base"
                type="text"
                value={productForm.price}
                required={actionType === "new"}
              />
            </div>
          </div>
          {/* Right Side */}
          {actionType === "new" && (
            <div className="flex flex-col bg-backgroundBlue w-full rounded-lg p-8">
              <div className="w-full h-1/2">
                <p className="text-blue mb-8">Imágen</p>
                <p className="text-base fontLight">
                  Añade una imagen al producto.
                </p>
                <div className="flex justify-center items-center">
                  <div
                    {...getRootProps()}
                    className="w-full mt-2 flex justify-center p-2 border-1 border-blue shadow-md rounded-lg cursor-pointer"
                  >
                    <input {...getInputProps()} />

                    <div className="flex justify-center items-center">
                      <p className="text-sm text-center text-blue">
                        Arrastra una imagen o sube un archivo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full h-full items-center justify-center">
                {image && (
                  <Image
                    src={image}
                    alt="image"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                )}
              </div>
            </div>
          )}
          {actionType === "view" && (
            <div className="flex flex-col justify-center items-center bg-white w-full h-full rounded-lg">
              <Image
                width={250}
                height={250}
                src={productRef.image}
                alt="Lizit"
              />
            </div>
          )}

          {actionType === "edit" && (
            <>
              <div className="flex flex-col justify-center items-center bg-white w-full h-full rounded-lg">
                {image && (
                  <Image
                    src={image}
                    alt="image"
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                )}
                <div className="flex justify-center items-center">
                  <div
                    {...getRootProps()}
                    className="w-full mt-2 flex justify-center p-2 border-1 border-blue shadow-md rounded-lg cursor-pointer"
                  >
                    <input {...getInputProps()} />

                    <div className="flex justify-center items-center">
                      <p className="text-sm text-center text-blue">
                        Arrastra una imagen o sube un archivo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-row justify-center md:justify-end mt-20">
          {actionType === "view" ? (
            <div className="flex w-1/2">
              <Button
                onClick={() => router.push("/products")}
                variant="terciary"
                text="Volver"
                width="w-1/3"
                isValid
              />

              <Button
                onClick={handleDelete}
                variant="danger"
                text="Eliminar"
                width="w-1/3"
                isValid
              />

              <Button
                onClick={() => dispatch(setActionType("edit"))}
                variant="primary"
                text="Editar"
                width="w-1/3"
                isValid
              />
            </div>
          ) : actionType === "edit" ? (
            <div className="flex w-1/2">
              {!loading && (
                <>
                  <Button
                    onClick={() => router.push("/products")}
                    variant="terciary"
                    text="Cancelar"
                    isValid
                  />
                  <Button
                    onClick={handleUpdateProduct}
                    variant="primary"
                    text="Guardar"
                    isValid
                  />
                </>
              )}
            </div>
          ) : actionType === "new" ? (
            <div className="flex w-1/3 justify-end">
              {!loading && (
                <Button
                  onClick={saveProduct}
                  variant="primary"
                  text="Guardar"
                  isValid={isValidForm}
                />
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductForm;
