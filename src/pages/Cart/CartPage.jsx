import React from 'react'
import "./Cartpage.css"


const CartPage = () => {
  return (
    <div className="cart container">
      <h2>Your Cart</h2>
      <div className="cart-header_bar">
        <button className="btn btn-success">Contnue Shopping</button>
        <div className="cart-header_middle">
          <a href="#">Shopping Bag(2)</a>
          <a href="#">Your Wishlist(0)</a>
        </div>
        <button className="btn btn-dark">CHECKOUT NOW</button>
      </div>
      <div className="cart__content-container">
        <div className="cart-content__left">
          <div className="cart-content__cartItem-left">
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div className="product_spect">
              <h6>
                <span>Products:</span> Nick shoe
              </h6>
              <h6>
                <span>ID:</span> 93656565
              </h6>
              <h6>
                <span>Size:</span> small
              </h6>
            </div>
            <div className="product-spect-quantity">
              <input type="number" min="0" name="" id="" />
              <p>30$</p>
            </div>
          </div>

          <hr />
          <div className="cart-content__cartItem-left">
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div className="product_spect">
              <h6>
                <span>Products:</span> Nick shoe
              </h6>
              <h6>
                <span>ID:</span> 93656565
              </h6>
              <h6>
                <span>Size:</span> small
              </h6>
            </div>
            <div className="product-spect-quantity">
              <input type="number" min="0" name="" id="" />
              <p>30$</p>
            </div>
          </div>

          <hr />
        </div>
        <div className="cart-content__right">
          <h3>ORDER SUMMARY</h3>
          <div className="content__summary">
            <div className="content__summary-content">
              <p>Subtotal</p>
              <p>$ 80</p>
            </div>
            <div className="content__summary-content">
              <p>Estimated</p>
              <p>$ 5.90</p>
            </div>
            <div className="content__summary-content">
              <p>Subtotal</p>
              <p>$ -5.90</p>
            </div>
            <div className="content__summary-total">
              <h4>Total</h4>
              <h4>$ 80</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage