import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeWishList } from "store/reducers/wishlist";
import Link from "next/link";
import type { RootState } from "store";
import type { ProductTypeList } from "types";
import type { ProductStoreType } from "types";

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
}: ProductTypeList) => {
  const dispatch = useDispatch();


  const { wishListItems } = useSelector((state: RootState) => state.wishlist);


  const isInWishList = (productId: string) => {
    return wishListItems.some((item) => item.id === productId);
  };


  const createProductStore = (): ProductStoreType => ({
    id,
    name,
    thumb: images ? images[0] : "",
    price: currentPrice ?? 0,
    count: 1,
    color: "default",
    size: "default",
  });


  const toggleWishlist = () => {
    const productToSave = createProductStore();

    if (isInWishList(id)) {
      dispatch(removeWishList(productToSave));
    } else {
      dispatch(addToWishList({ count: 1, product: productToSave }));
    }
  };

  return (
    <div className="product-item">
      <div className="product__image">
        <button
          type="button"
          onClick={toggleWishlist}
          className={`btn-heart ${isInWishList(id) ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart" />
        </button>

        <Link href={`/product/${id}`}>
          <img src={images ? images[0] : ""} alt="product" />
          {discount && <span className="product__discount">{discount}%</span>}
        </Link>
      </div>
      <div className="product__description">
        <h3>{name}</h3>
        <div
          className={`product__price ${discount ? "product__price--discount" : ""}`}
        >
          <h4>${currentPrice}</h4>

          {discount && <span>${price}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
