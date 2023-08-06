import { Link } from "react-router-dom";
import '../header/header.css'

function Header() {
    return (
        <header>
            <h2>Sujeito Programador</h2>

            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/contato'}>Contato</Link>
                <Link to={'/sobre'}>Sobre</Link>
            </div>
        </header>
    );
}

export default Header;