import React from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  function subTotal() {
    let price = 0;
    cart.forEach(
      (item) =>
        (price += item.quantity * (item.salePrice || item.originalPrice))
    );
    return price;
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              {cart.length > 0 ? (
                <div className="cart__body">
                  {cart.map((book) => {
                    return (
                      <div className="cart__item" key={book.id}>
                        <div className="cart__book">
                          <img
                            src={book.url}
                            alt=""
                            className="cart__book--img"
                          />
                          <div className="cart__book--info">
                            <span className="cart__book--title">
                              {book.title}
                            </span>
                            <span className="cart__book--price">
                              $
                              {(book.salePrice || book.originalPrice).toFixed(
                                2
                              )}
                            </span>
                            <button
                              className="cart__book--remove"
                              onClick={() => removeItem(book)}>
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart__quantity">
                          <input
                            type="number"
                            min={0}
                            max={99}
                            value={book.quantity}
                            onChange={(event) =>
                              changeQuantity(book, event.target.value)
                            }
                            className="cart__input"></input>
                        </div>
                        <div className="cart__total">
                          $
                          {(
                            book.quantity *
                            (book.salePrice || book.originalPrice)
                          ).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any books in your cart!</h2>
                  <Link to="/books">
                    <button className="btn">Browse Books</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {cart.length > 0 && (
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${subTotal().toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Total Tax</span>
                <span>${(subTotal() * (1 / 9)).toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${(subTotal() * (10 / 9)).toFixed(2)}</span>
              </div>
              <button
                className="btn btn__checkout no-cursor click"
                onClick={() =>
                  alert("Unfortunately this feature is not yet implemented.")
                }>
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
