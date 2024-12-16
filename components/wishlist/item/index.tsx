import { useDispatch } from "react-redux";
import { removeWishList } from "store/reducers/wishlist";
import type { ProductStoreType } from "types";
import React from 'react'

const ShoppingCart = ({
  thumb,
  name,
  id,
  color,
  size,
  count,
  price,
}: ProductStoreType) => {
  const dispatch = useDispatch();



  const removeWishlist = () => {
    dispatch(
      removeWishList({
        thumb,
        name,
        id,
        color,
        size,
        count,
        price,
      }),
    );
  };



  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td className="cart-item-before" data-label="Color">
        {color}
      </td>
      <td className="cart-item-before" data-label="Size">
        {size}
      </td>
      <td>
        <div className="quantity-button">

          <span>{count}</span>

        </div>
      </td>
      <td>${price}</td>
      <td className="cart-item-cancel">
        <i className="icon-cancel" onClick={() => removeWishlist()} />
      </td>
    </tr>
  );
};

export default ShoppingCart;
