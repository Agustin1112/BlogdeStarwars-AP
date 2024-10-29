import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFavorites } from "../store/FavoritesContext"; // Asegúrate de que la ruta es correcta

const Navbar = () => {
    const { favorites } = useFavorites(); // Accede a los favoritos desde el contexto

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                        alt="Star Wars"
                        width="100"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/characters">
                                Characters
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">
                                Planets
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/starships">
                                Starships
                            </Link>
                        </li>
                    </ul>
                    <div className="ml-auto">
                        <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            id="favoritesDropdown"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Favorites <span className="badge badge-light">{favorites.length}</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="favoritesDropdown">
                            <Link className="dropdown-item" to="/favorites">
                                View Favorites
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




