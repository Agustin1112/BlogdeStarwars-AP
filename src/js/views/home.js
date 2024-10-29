import React, { useEffect, useContext } from "react";
import CharCard from "../component/charCard"; // Componente para personajes
import ContactCard from "../component/ContactCard"; // Componente para vehículos y planetas
import { Context } from "../store/appContext";

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchCharacters();
        actions.fetchVehicles();
        actions.fetchPlanets();
    }, []);

    const handleFavoriteClick = (item) => {
        actions.addFavorite(item);
    };

    return (
        <div className="container">
            <h1 className="text-danger">Characters</h1>
            <div className="row">
                {store.characters && store.characters.length > 0 ? (
                    store.characters.map((character) => (
                        <div key={character.uid} className="col-md-4">
                            <CharCard 
                                character={character} 
                                onFavoriteClick={handleFavoriteClick} 
                            />
                            <p>Name: {character.name}</p>
                            <p>URL: <a href={character.url} target="_blank" rel="noopener noreferrer">{character.url}</a></p>
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
                        <div key={vehicle.uid} className="col-md-4">
                            <ContactCard 
                                item={vehicle} 
                                onFavoriteClick={handleFavoriteClick} 
                            />
                            <p>Name: {vehicle.name}</p>
                            <p>URL: <a href={vehicle.url} target="_blank" rel="noopener noreferrer">{vehicle.url}</a></p>
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
                        <div key={planet.uid} className="col-md-4">
                            <ContactCard 
                                item={planet} 
                                onFavoriteClick={handleFavoriteClick} 
                            />
                            <p>Name: {planet.name}</p>
                            <p>URL: <a href={planet.url} target="_blank" rel="noopener noreferrer">{planet.url}</a></p>
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











