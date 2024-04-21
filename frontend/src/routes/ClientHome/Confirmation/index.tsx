import "./styles.css";
import { useEffect, useState } from "react";
import { OrderDTO, OrderItemDTO } from "../../../models/order";
import { useParams } from "react-router-dom";
import * as orderService from "../../../services/order-service";
import { Link } from "react-router-dom";

export default function Confirmation() {
  const params = useParams();
  const [order, setOrder] = useState<OrderDTO>();

  useEffect(() => {
    orderService.findByIdRequest(Number(params.orderId)).then((response) => {
      const newOrder = new OrderDTO();
      newOrder.id = response.data.id;
      newOrder.items = response.data.items.map(
        (p : OrderDTO) =>
        new OrderItemDTO(p.productId, p.quantity, p.name, p.price, p.imgUrl)
      );
      setOrder(newOrder);
    });
  }, []);

  return (
    <main>
      <section id="confirmation-section" className="jp-container">
        <div className="jp-card jp-mb20">
          {order?.items.map((item) => (
            <div
              key={item.productId}
              className="jp-cart-item-container jp-line-bottom"
            >
              <div className="jp-cart-item-left">
                <img src={item.imgUrl} alt={item.name} />
                <div className="jp-cart-item-description">
                  <h3>{item.name}</h3>
                  <div className="jp-cart-item-quantity-container">
                    <p>{item.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="jp-cart-item-right">
                R$ {item.subTotal.toFixed(2)}
              </div>
            </div>
          ))}
          <div className="jp-cart-total-container">
            <h3>R$ {order?.total.toFixed(2)}</h3>
          </div>
        </div>
        <div className="jp-confirmation-message jp-mb20">
          Pedido realizado com sucesso! 
        </div>
        <div className="jp-btn-page-container">
          <Link to="/">
            <div className="jp-btn jp-btn-white">Início</div>
          </Link>
        </div>
      </section>
    </main>
  );
}