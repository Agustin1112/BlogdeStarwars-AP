// store/swapiService.js

const BASE_URL = "https://www.swapi.tech/api/";

export const fetchPlanets = async () => {
    try {
        const response = await fetch(`${BASE_URL}planets/`);
        const data = await response.json();
        return data.result; // Retorna la lista de planetas
    } catch (error) {
        console.error("Error fetching planets:", error);
        throw error;
    }
};

export const fetchPeople = async () => {
    try {
        const response = await fetch(`${BASE_URL}people/`);
        const data = await response.json();
        return data.result; // Retorna la lista de personas
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
};

export const fetchVehicles = async () => {
    try {
        const response = await fetch(`${BASE_URL}vehicles/`);
        const data = await response.json();
        return data.result; // Retorna la lista de vehículos
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        throw error;
    }
};
