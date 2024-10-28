// CharCard.js
import React from "react";

const CharCard = ({ character, onFavoriteClick }) => {
    return (
        <div className="card">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt={character.name} />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                    <strong>Gender:</strong> {character.gender || "n/a"}<br />
                    <strong>Hair Color:</strong> {character.hair_color || "n/a"}<br />
                    <strong>Eye Color:</strong> {character.eye_color || "n/a"}
                </p>
                <button className="btn btn-primary">Learn more!</button>
                <button className="btn btn-outline-warning" onClick={() => onFavoriteClick(character)}>
                    <i className="far fa-heart"></i>
                </button>
            </div>
        </div>
    );
};

export default CharCard;



