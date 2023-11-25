import { Route } from "react-router-dom";
import Form from "./Form";
import List from "./List";


const Products = () => {

    return (
        <Route>
            <Route path="/admin/products">
                <List />
            </Route>
            <Route path="/admin/products/:productId">
                <Form />
            </Route>
        </Route>
    )
}

export default Products;