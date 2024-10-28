import React, { useEffect, useContext } from "react";
import CharCard from "../component/charCard"; // Supongo que este es el componente para personajes
import ContactCard from "../component/ContactCard"; // Asegúrate de que la ruta sea correcta
import { Context } from "../store/appContext";

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchCharacters();
        actions.fetchVehicles();
        actions.fetchPlanets();
    }, [actions]);

    const handleFavoriteClick = (item) => {
        actions.addFavorite(item);
    };

    return (
        <div className="container">
            <h1 className="text-danger">Characters</h1>
            <div className="row">
                {store.characters && store.characters.length > 0 ? (
                    store.characters.map((character) => (
                        <div key={character.id} className="col-md-4">
                            <CharCard 
                                character={character} 
                                onFavoriteClick={handleFavoriteClick} 
                            />
                        </div>
                    ))
                ) : (
                    <p>No hay personajes disponibles.</p>
                )}
            </div>

            <h1 className="text-danger">Vehicles</h1>
            <div className="row">
                {store.vehicles && store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle) => (
                        <div key={vehicle.id} className="col-md-4">
                            <ContactCard 
                                item={vehicle} 
                                onFavoriteClick={handleFavoriteClick} 
                            />
                        </div>
                    ))
                ) : (
                    <p>No hay vehículos disponibles.</p>
                )}
            </div>

            <h1 className="text-danger">Planets</h1>
            <div className="row">
                {store.planets && store.planets.length > 0 ? (
                    store.planets.map((planet) => (
                        <div key={planet.id} className="col-md-4">
                            <ContactCard 
                                item={planet} 
                                onFavoriteClick={handleFavoriteClick} 
                            />
                        </div>
                    ))
                ) : (
                    <p>No hay planetas disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default Home;









