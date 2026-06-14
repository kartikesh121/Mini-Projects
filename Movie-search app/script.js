const apiKey = "ff34cd54";

const movieInput =
document.getElementById("movieInput");

const searchBtn =
document.getElementById("searchBtn");

const movieContainer =
document.getElementById("movieContainer");

searchBtn.addEventListener(
    "click",
    searchMovie
);

async function searchMovie(){

    const movieName =
    movieInput.value;

    const url =
`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;

    try{

        const response =
        await fetch(url);

        const data =
        await response.json();

        movieContainer.innerHTML = "";

        data.Search.forEach(movie => {

            movieContainer.innerHTML += `
                <div class="card">
                    <img src="${movie.Poster}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                    <p>${movie.Type}</p>
                </div>
            `;
        });

    }catch(error){

        movieContainer.innerHTML =
        "<h2>Movie Not Found</h2>";

    }
}

//I: http://www.omdbapi.com/?i=tt3896198&apikey=ff34cd54
