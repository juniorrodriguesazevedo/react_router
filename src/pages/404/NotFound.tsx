import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>Nada Encontrado</h1>
            <br />
            <Link to={'/'}>Volta para página inicial</Link>
        </div>
    );
}

export default NotFound;