const provincias = [
    "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz",
    "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real",
    "Córdoba", "Cuenca", "Gerona", "Granada", "Guadalajara", "Gipuzkoa", "Huelva",
    "Huesca", "Islas Baleares", "Jaén", "La Rioja", "Las Palmas", "León", "Lleida",
    "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Ourense", "Palencia", "Pontevedra",
    "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona",
    "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"
];

const filtros = {};

// Función para generar los checkboxes dinámicamente
function generarFiltros() {
    const container = document.getElementById("filters-container");
    provincias.forEach(provincia => {
        // Crear el checkbox para cada provincia
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" id="filter${provincia}" onclick="actualizarFiltros()"> ${provincia}`;

        // Añadir el checkbox al contenedor
        container.appendChild(label);
        container.appendChild(document.createElement("br"));

        // Inicializar el objeto filtros
        filtros[provincia] = false; // Por defecto, no se filtra ninguna provincia
    });
}

// Actualizar los filtros al marcar o desmarcar un checkbox
function actualizarFiltros() {
    provincias.forEach(provincia => {
        const checkbox = document.getElementById(`filter${provincia}`);
        filtros[provincia] = checkbox.checked;
    });
}

// Función para generar el nombre de la provincia
function generarNombre() {
    // Filtrar provincias según los filtros aplicados
    const provinciasFiltradas = provincias.filter(provincia => !filtros[provincia]);

    if (provinciasFiltradas.length > 0) {
        const provinciaAleatoria = provinciasFiltradas[Math.floor(Math.random() * provinciasFiltradas.length)];
        document.getElementById("provincias").textContent = provinciaAleatoria;
    } else {
        document.getElementById("provincias").textContent = "No quedan provincias disponibles.";
    }
}

function mostrarAlerta() {
    alert("Has encontrado un easter-egg");
    alert("Esta web ha sido creada por Juan Carlos");
}

// Llamar a la función para generar los filtros cuando la página cargue
window.onload = generarFiltros;