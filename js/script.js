//Constantes
const film = document.getElementById("films")
const posterStartURL = "https://image.tmdb.org/t/p/w500/"
//const favID = [550, 330, 752, 503, 800, 830]
//const genres = "data.genres"
const divFilm = document.querySelectorAll('.film')
let id
//Recorremos las id de las películas contenidas en el array de favoritas
function mostrar() {
    for (let i = 0; i < fav.length; i++) {
        id = fav[i]

        function renderFilm(data) {
            //Mostrando generos de cada película
            let amount_genres = data.genres.length
            //console.log(amount_genres)
            let arr_genres = new Array()
            //Bucle para añadir los generos a un array
            for (let i = 0; i = amount_genres.length; i++) {
                let push = arr_genres.push(data.genres[i].name)
                console.log(arr_genres) // no muestra nada en consola, el buble no funciona por algun motivo
            }
            //console.log(arr_genres)
            film.innerHTML += `
            <div class='film'>
                <div class='image'>
                    <img class='poster_img' src='${posterStartURL}${data.poster_path.substr(1)}'></img>  
                </div>
                
                <h3>${data.title.substr(0,38)}</h3>
                <h6>Año: ${data.release_date.substr(0,4)} - Genero: ${data.genres[0].name} - Duración: ${data.runtime} min</h6>
                <div class="desc">${data.overview.substr(0,240)}...</div>
                <div class="del"><a href="#" alt="Eliminar" onclick="hide(divFilm)">X</a></div>
            </div>`
        }
        
    }


    //Variables para armar la url a la que se hara el fetch
    let pre_url = "https://api.themoviedb.org/3/movie/"
    let post_url = "?api_key=0c6797047ca6194a987e36e69e7cc5f4&language=es"
    let fetch_url = pre_url + id + post_url
    fetch(fetch_url)
        .then(response => response.json())
        .then(data => {
            renderFilm(data)
        })

}