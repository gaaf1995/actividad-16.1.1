const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=8";

const gridContainer = document.getElementById("data-grid");

// FUNCIÓN GET PARA TRAER DATOS DE LA API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// FUNCIÓN PARA MOSTRAR LOS DATOS
function displayData(items) {
  gridContainer.innerHTML = items
    .map(
      (item) => `
      <div class="card">
        <img src="${item.thumbnailUrl}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>ID: ${item.id}</p>
      </div>
    `
    )
    .join("");
}

//LLAMADO DE FUNCION
fetchData();
