function mostrarAlerta() {
    alert("Has encontrado un easter-egg");
    alert("Esta web ha sido creada por Juan Carlos");
}

function generarNombre() {
    const provincias = [
        "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz",
        "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real",
        "Córdoba", "Cuenca", "Gerona", "Granada", "Guadalajara", "Gipuzkoa", "Huelva",
        "Huesca", "Islas Baleares", "Jaén", "La Rioja", "Las Palmas", "León", "Lleida",
        "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Ourense", "Palencia", "Pontevedra",
        "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona",
        "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"
    ];
    const provinciasAleatorio = provincias[Math.floor(Math.random() * provincias.length)];
    document.getElementById("provincias").textContent = provinciasAleatorio;
}