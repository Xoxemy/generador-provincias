// Lista de provincias
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

    // Crear barra de búsqueda solo si no existe
    if (!document.getElementById("search-filter")) {
        const searchInput = document.createElement('input');
        searchInput.type = "text";
        searchInput.id = "search-filter";
        searchInput.placeholder = "Buscar provincia...";
        searchInput.oninput = filtrarProvincias;

        // Añadir la barra de búsqueda al contenedor
        container.appendChild(searchInput);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }

    // Crear texto de información y descripción solo una vez
    if (!document.getElementById("search-description")) {
        const description = document.createElement('p');
        description.id = "search-description";
                      

        description.innerHTML = '<h3>Filtros</h3>  <small>Selecciona las ciudades que no quieras que aparezcan en el generador</small>';
        container.insertBefore(description, container.firstChild); // Agregar al principio del contenedor
    }

    // Crear los checkboxes de provincias
    provincias.forEach(provincia => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" id="filter${provincia}" onclick="actualizarFiltros()"> ${provincia}`;
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
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

// Filtrar las provincias que coinciden con la búsqueda
function filtrarProvincias() {
    const query = document.getElementById("search-filter").value.toLowerCase();
    const container = document.getElementById("filters-container");

    // Guardar el foco del input de búsqueda
    const searchInput = document.getElementById("search-filter");
    const currentFocus = document.activeElement === searchInput;

    // Limpiar los checkboxes existentes, pero dejar el campo de búsqueda y el texto
    const description = document.getElementById("search-description");
    container.innerHTML = '';
    container.appendChild(description); // Re-agregar el texto informativo
    container.appendChild(searchInput); // Re-agregar el input de búsqueda
    
    // Volver a añadir la barra de búsqueda
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
    
    // Filtrar las provincias según la búsqueda
    provincias.filter(provincia => provincia.toLowerCase().includes(query)).forEach(provincia => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" id="filter${provincia}" onclick="actualizarFiltros()"> ${provincia}`;
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });
    
    // Volver a enfocar el campo de búsqueda si lo tenías seleccionado
    if (currentFocus) {
        searchInput.focus();
    }
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


// Llamar a la función para generar los filtros cuando la página cargue
window.onload = generarFiltros;
