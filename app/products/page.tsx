"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../shared/layouts/MainLayout";
import ProductList from "../shared/components/organisms/ProductList";
import Loader from "../shared/components/atoms/Loader";
import { getProducts } from "@/app/shared/services";
import {
  setProductsAux,
  setProductsToStore,
} from "../core/redux/products/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.products);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data } = await getProducts();
      dispatch(setProductsToStore(data));
      dispatch(setProductsAux(data));
      setLoading(false);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      fetchProduct();
    }
  });

  return (
    <div>
      {loading ? (
        <Loader label="Cargando..." />
      ) : (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )}
    </div>
  );
};

export default Products;
