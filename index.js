//RESUELVE TUS EJERCICIOS AQUI
let raza = "komondor"

//1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro
const getAllBreeds = () => {
    return fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((dogs) => dogs.message)
};

//2.- Obten una imagen random de una raza
const getRandomDog = () => {
    return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((dogs) => dogs.message)
};

//3.- Obten todas las imágenes de la raza komondor
const getAllImagesByBreed = () => {
    return fetch("https://dog.ceo/api/breed/komondor/images")
    .then((res) => res.json())
    .then((dogs) => dogs.message)
};

//4.- Obten las imagenes de una raza pasada como argumento a la función
const getAllImagesByBreed2 = () =>{
    return fetch(`https://dog.ceo/api/breed/${raza}/images`)
    .then((res) => res.json())
    .then((dogs) => dogs.message)
}

//5.- La función busca usuarios correctamente en la API de gitHub
const getGitHubUserProfile = () =>{
    return fetch(`https://api.github.com/users/alenriquez96`)
    .then((res) => res.json())
    .then((data) => data)
} 


//6.- La función pinta la info del usuario
/*const printGithubUserProfile = ()=>{
    return fetch(`https://api.github.com/users/alenriquez96`)
    .then((res) => res.json())
    .then((data) => {
        const arrayUser = {
             name :data.name,
             imagen: data.avatar_url,
           repos: data.public_repos
        }
        let usuario = document.getElementById("usuario")
        let imagen = document.createElement("img")
        let nombre = document.createElement("p")
        imagen.src = usuario.appendChild(arrayUser.imagen)
        nombre.innerHTML = usuario.appendChild(arrayUser.name)
    })
}
console.log(printGithubUserProfile());
*/
//7.- La función devuelve una tarjeta con la info del usuario

const getAndPrintGitHubUserProfile  = () =>{
    return fetch(`https://api.github.com/users/alenriquez96`)
    .then((res) => res.json())
    .then((data) =>
   ` '<section>
    <img src="${data.avatar_url}" alt="Alberto Enríquez">
    <h1>${data.name}</h1>
    <p>Public repos: ${data.public_repos}</p>
</section>`)
}

//8.- La función devuelve un array con la url y el nombre de cada usuario
const url1 = fetch("https://api.github.com/users/alenriquez96")
const url2 = fetch("https://api.github.com/users/alejandroereyesb")
const url3 = fetch("https://api.github.com/users/guille")
const fetchGithubUsers = (adress1, adress2, adress3) => {
    return Promise.all([adress1, adress2, adress3]).then((values) => {
         console.log(values)
      });
}
console.log(fetchGithubUsers(url1, url2, url3));
