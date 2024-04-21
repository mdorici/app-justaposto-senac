import "./styles.css";
import ProductCategory from "../ProductCategory";
import { ProductDTO } from "../../models/product";

type Props = {
  product: ProductDTO;
};

export default function ProductDetailsCard({ product }: Props) {
  return (
    <div className="jp-card jp-mb20">
      <div className="jp-product-details-top jp-line-bottom">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="jp-product-details-bottom">
        <h3>R$ {product.price.toFixed(2)}</h3>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div className="jp-category-container">
          {
            product.categories.map(item => (
              <ProductCategory key={item.id} name={item.name} />
            ))
          }
        </div>
      </div>
    </div>
  );
}