import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();

    return (
        <div>
            <h1>Produto {id}</h1>
        </div>
    );
}

export default Product;