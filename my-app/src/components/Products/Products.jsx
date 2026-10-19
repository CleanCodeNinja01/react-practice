import { Link } from "react-router-dom";
import products from "../../data/products";

const Products = () => {
    return (
        <div>
            <h2>🛍️ Products</h2>
            <ul>
                {products.map((product)=>(
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>{product.name}</Link> | {""}
                            <span>{product.category}</span>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default Products;