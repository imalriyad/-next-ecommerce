
import { useSelector } from "react-redux";
import type { RootState } from "store";
import Layout from "../layouts/Main"
import Item from "../components/wishlist/item/index";

const ShoppingCart = () => {
    const { wishListItems } = useSelector((state: RootState) => state.wishlist);


    return (
        <Layout>
            <section className="cart">
                <div className="container">
                    <div className="cart__intro">
                        <h3 className="cart__title">Wishlist</h3>

                    </div>

                    <div className="cart-list">
                        {wishListItems.length > 0 && (
                            <table>
                                <tbody>
                                    <tr>
                                        <th style={{ textAlign: "left" }}>Product</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Ammount</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th />
                                    </tr>

                                    {wishListItems.map((item) => (
                                        <Item
                                            key={item.id}
                                            id={item.id}
                                            thumb={item.thumb}
                                            name={item.name}
                                            color={item.color}
                                            price={item.price}
                                            size={item.size}
                                            count={item.count}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {wishListItems.length === 0 && <p>Your wishlist is empty</p>}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ShoppingCart;
