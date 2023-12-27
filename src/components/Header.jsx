import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Pokedex</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;




