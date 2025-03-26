//RESUELVE TUS EJERCICIOS AQUI

/*let raza = "komondor";

//1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro
const getAllBreeds = () => {
  return fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((dogs) => dogs.message)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
};
getAllBreeds().then((data) => console.log(data));
//2.- Obten una imagen random de una raza
const getRandomDog = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((dogs) => dogs.message)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
};
getRandomDog().then((data) => console.log(data));
//3.- Obten todas las imágenes de la raza komondor
const getAllImagesByBreed = () => {
  return fetch("https://dog.ceo/api/breed/komondor/images")
    .then((res) => res.json())
    .then((dogs) => dogs.message)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
};
getAllImagesByBreed().then((data) => console.log(data));
//4.- Obten las imagenes de una raza pasada como argumento a la función
const getAllImagesByBreed2 = () => {
  return fetch(`https://dog.ceo/api/breed/${raza}/images`)
    .then((res) => res.json())
    .then((dogs) => dogs.message)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
};
getAllImagesByBreed2().then((data) => console.log(data));

//5.- La función busca usuarios correctamente en la API de gitHub
/*const getGitHubUserProfile = (usuario) => {
  return fetch(`https://api.github.com/users/${usuario}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
};
getGitHubUserProfile('alenriquez96')*/

//6.- La función pinta la info del usuario
/*
const printGithubUserProfile = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => {
      const arrayUser = {
        img: data.avatar_url,
        name: data.name,
        let repos = data.public_repos
      };
      const imgElement = document.createElement("img");
      const nameElement = document.createElement("p");
      imgElement.src = arrayUser.img;
      nameElement.textContent = arrayUser.name;
      document.body.appendChild(imgElement);
      document.body.appendChild(nameElement);
      return arrayUser;
    });
};
console.log(printGithubUserProfile("alenriquez96"));

//7.- La función devuelve una tarjeta con la info del usuario
function getAndPrintGitHubUserProfile(userName) {
  return fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json()) // Convertir a objeto
    .then((data) => {
      let section = `<section>
    <img src="${data.avatar_url}" alt="${data.name}">
    <h1>${data.name}</h1>
    <p>Public repos: ${data.public_repos}</p>
</section>`;
      return section;
    });
}
getAndPrintGitHubUserProfile();

//8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función getAndPrintGitHubUserProfile(username) que se ejecute cuando se pulse el botón buscar.(Esto no se testea)

document.getElementById("buscar").addEventListener("click", function () {
  let userName = document.getElementById("name").value;
  getAndPrintGitHubUserProfile(userName);
});
*/
//9.- La función devuelve un array con la url y el nombre de cada usuario

function getUserData(username) {
  return fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        const userData = { realNames: data.name, userNames: data.login, url:data.url };
        return userData;
      })
}


const fetchGithubUsers = (nameList) => { // nameList = ["alenriquez96", "alejandroereyesb", "octocat"]

  // mapear de array de nombres a array de promesas
  return Promise.all(nameList.map(name => getUserData(name))) // ["alenriquez96", "alejandroereyesb", "octocat"] -> [Promise, Promise, Promise]-> [getUserData("alenriquez96"), getUserData("alejandroereyesb"), getUserData("octocat")]
          .then((data) => {
            data.forEach((user) => {
              console.log(user.url);
            });
            return data;
  });
};
fetchGithubUsers(["alenriquez96", "alejandroereyesb", "octocat"])
.then((data) => console.log(data));