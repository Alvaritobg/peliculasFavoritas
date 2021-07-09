const divSearchResult = document.getElementById("searchResult")
//const inputId = document.getElementById("inputSearch")
let toSearch
let fetchData
let datos
let fav = []
//Funcion para buscar pelicula a traves del formulario formateando el input para la api
function search() {
    const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=0c6797047ca6194a987e36e69e7cc5f4&query="
    let inputSearch = document.getElementById("inputSearch").value
    let inputSearch2 = inputSearch.replace(/ /g, "+")
    let langSearch = "&language=es"
    toSearch = searchUrl + inputSearch2 + langSearch
    //console.log(toSearch)
    doFetch(toSearch)
}

//fetch
function doFetch(a) {
    fetch(a)
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(data => {
            saveDataResult(data)
        })
    divSearchResult.innerHTML = ``
}
//Guarda el json en una variable
function saveDataResult(a) {
    datos = a

    if (datos.total_results > 0) {
        console.log(datos)
        for (let i = 0; i < datos.total_results; i++) {
            divSearchResult.innerHTML += `<li>${datos.results[i].title} <a class="add" onclick="add(${datos.results[i].id})" href="#">Añadir</a></li>`
        }

    } else {
        //divSearchResult.innerHTML += `<li>Película no encontrada</li>`
        divSearchResult.innerHTML = `<img id="loading" src="img/cargando.png" alt="buscando..."></img>`
    }

}
//Mostramos las sugerencias de resultado de busqueda al hacer foco en buscar
function show(a) {
    a.style.display = "block"
}
// La ocultamos al dejar de hacer foco en ella
function hide(a) {
    console.log(a)
    a.style.display = "none"
    
}

function add(a) {

    if (fav.includes(a)) {
        console.log("ya existe en favoritos")
    } else {
        fav.push(a)
        console.log(fav)
        mostrar()
    }

}