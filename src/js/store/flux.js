const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },
        actions: {
            fetchCharacters: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people/");
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    console.log(data); // Verificar la estructura de datos
                    setStore(prevStore => ({ ...prevStore, characters: data.results })); // Corregido para acceder a results
                } catch (error) {
                    console.error('Error al obtener personajes:', error);
                }
            },
            fetchVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles/");
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    console.log(data); // Verificar la estructura de datos
                    setStore(prevStore => ({ ...prevStore, vehicles: data.results })); // Corregido para acceder a results
                } catch (error) {
                    console.error('Error al obtener vehículos:', error);
                }
            },
            fetchPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets/");
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    console.log(data); // Verificar la estructura de datos
                    setStore(prevStore => ({ ...prevStore, planets: data.results })); // Corregido para acceder a results
                } catch (error) {
                    console.error('Error al obtener planetas:', error);
                }
            },
            fetchAllPlanets: async () => {
                try {
                    const allPlanets = []; // Array para almacenar todos los planetas
                    let nextPage = "https://www.swapi.tech/api/planets/";

                    // Iterar a través de todas las páginas
                    do {
                        const response = await fetch(nextPage);
                        if (!response.ok) throw new Error('Network response was not ok');
                        const data = await response.json();
                        allPlanets.push(...data.results); // Agregar los resultados de esta página

                        nextPage = data.next; // Obtener la URL de la siguiente página
                    } while (nextPage); // Continuar hasta que no haya más páginas

                    // Almacenar todos los planetas en el store
                    setStore(prevStore => ({ ...prevStore, planets: allPlanets }));

                } catch (error) {
                    console.error('Error al obtener todos los planetas:', error);
                }
            },
            addFavorite: (character) => {
                const store = getStore();
                if (!store.favorites.includes(character)) {
                    setStore(prevStore => ({ ...prevStore, favorites: [...store.favorites, character] }));
                }
            },
        },
    };
};

export default getState; // Asegúrate de tener esta línea para exportar










