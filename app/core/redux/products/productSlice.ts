import { ProductState } from "@/app/shared/models/Product";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = {
  products: [],
  productsAux: [],
  productRef: {},
  actionType: "",
  flow: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsToStore: (state, action) => {
      state.products = action.payload;
    },
    setProductsAux: (state, action) => {
      state.productsAux = action.payload;
    },
    setProductRef: (state, action) => {
      state.productRef = action.payload;
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    setActionType: (state, action) => {
      state.actionType = action.payload;
    },
    setFlow: (state, action) => {
      state.flow = action.payload;
    },
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    updateProduct: (state, action) => {
      const id = action.payload.id;
      const index = state.products.findIndex(
        (product: any) => product.id === id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const {
  setProductsToStore,
  setProductsAux,
  deleteProduct,
  setProductRef,
  setActionType,
  setFlow,
  addProduct,
  updateProduct,
} = productSlice.actions;
export default productSlice.reducer;
