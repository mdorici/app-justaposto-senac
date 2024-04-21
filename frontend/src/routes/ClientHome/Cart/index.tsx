import "./styles.css";
import { useContext, useState } from "react";
import { OrderDTO } from "../../../models/order";
import * as cartService from "../../../services/cart-service";
import * as orderService from "../../../services/order-service";
import { Link, useNavigate } from "react-router-dom";
import { ContextCartCount } from "../../../utils/context-cart";

export default function Card() {

  const navigate = useNavigate();

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  const {setContextCartCount} = useContext(ContextCartCount);

  function handleClearClick() {
    cartService.clearCart();
    updateCart();
  }

  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handleDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    updateCart();
  }

  function updateCart() {
    const newCart = cartService.getCart();
    setCart(newCart);
    setContextCartCount(newCart.items.length);
  }

  function handlePlaceOrderClick() {
    orderService.placeOrderRequest(cart).then(response => {
      cartService.clearCart();
      setContextCartCount(0);
      navigate(`/confirmation/${response.data.id}`)
    });
  }

  return (
    <main>
      <section id="cart-container-section" className="jp-container">
        {cart.items.length === 0 ? (
          <div>
            <h2 className="jp-section-title jp-mb20">
              Seu carrinho está vazio
            </h2>
          </div>
        ) : (
          <div className="jp-card jp-mb20">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="jp-cart-item-container jp-line-bottom"
              >
                <div className="jp-cart-item-left">
                  <img src={item.imgUrl} alt={item.name} />
                  <div className="jp-cart-item-description">
                    <h3>{item.name}</h3>
                    <div className="jp-cart-item-quantity-container">
                      <div onClick={() => handleDecreaseItem(item.productId)} className="jp-cart-item-quantity-btn">-</div>
                      <p>{item.quantity}</p>
                      <div onClick={() => handleIncreaseItem(item.productId)} className="jp-cart-item-quantity-btn">+</div>
                    </div>
                  </div>
                </div>
                <div className="jp-cart-item-right">
                  R$ {item.subTotal.toFixed(2)}
                </div>
              </div>
            ))}
            <div className="jp-cart-total-container">
              <h3>R$ {cart.total.toFixed(2)}</h3>
            </div>
          </div>
        )}

        <div className="jp-btn-page-container">
          <div onClick={handlePlaceOrderClick} className="jp-btn jp-btn-blue">Finalizar pedido</div>
          <Link to="/catalog">
            <div className="jp-btn jp-btn-white">Continuar comprando</div>
          </Link>
          <div onClick={handleClearClick} className="jp-btn jp-btn-white">Limpar carrinho</div>
        </div>
      </section>
    </main>
  );
}