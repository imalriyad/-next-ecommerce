import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStoreType } from 'types';

interface WishListTypes {
  wishListItems: ProductStoreType[];
}

const initialState: WishListTypes = {
  wishListItems: [],
};

const indexSameProduct = (state: WishListTypes, action: ProductStoreType) => {
  const sameProduct = (product: ProductStoreType) =>
    product.id === action.id &&
    product.color === action.color &&
    product.size === action.size;

  return state.wishListItems.findIndex(sameProduct);
};

type AddToWishList = {
  product: ProductStoreType;
  count: number;
};

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<AddToWishList>) => {
      const wishListItems = state.wishListItems;

      const index = indexSameProduct(state, action.payload.product);

      if (index !== -1) {
        wishListItems[index].count += action.payload.count;
        return;
      }

      return {
        ...state,
        wishListItems: [...state.wishListItems, action.payload.product],
      };
    },
    removeWishList: (state, action: PayloadAction<ProductStoreType>) => {
      state.wishListItems.splice(
        indexSameProduct(state, action.payload),
        1
      );
    },
    setCount: (state, action: PayloadAction<AddToWishList>) => {
      const index = indexSameProduct(state, action.payload.product);
      state.wishListItems[index].count = action.payload.count;
    },
  },
});

export const { addToWishList, removeWishList, setCount } = wishListSlice.actions;
export default wishListSlice.reducer;
