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
*/
//7.- La función devuelve una tarjeta con la info del usuario

/*
function getAndPrintGitHubUserProfile() {
  const url = `https://api.github.com/users/guille`;
  fetch(url)
    .then((response) => response.json()) // Convertir a objeto
    .then((data) => {
      let seccion = "<section>";
      data.forEach((item) => {
        seccion += `<img src="${item.avatar_url}" alt="Alberto Enríquez">
            <h1>${item.name}</h1>
            <p>Public repos: ${item.public_repos}</p>`;
      });
      seccion += "</section>";
      document.body.innerHTML = seccion;
    });
}
console.log(getAndPrintGitHubUserProfile());

//8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función getAndPrintGitHubUserProfile(username) que se ejecute cuando se pulse el botón buscar.(Esto no se testea)
let userName = document.getElementById("name").value;
document.getElementById("buscar").addEventListener("click", function () {
  getAndPrintGitHubUserProfile();
});
*/
//9.- La función devuelve un array con la url y el nombre de cada usuario

/*
const fetchGithubUsers = (array) =>{
    let result = Promise.all([url1, url2, url3]);
    result.then((data) => data);
    array.push(result)
    return array[0]
}
console.log(fetchGithubUsers(result9));*/
let username1 = "alenriquez96";
let username2 = "alejandroereyesb";
let username3 = "octocat";

const fetchGithubUsers = (name1, name2, name3) => {
  let result9 = [];

  Promise.all([
    fetch(`https://api.github.com/users/${name1}`)
      .then((res) => res.json())
      .then((data) => {
        const array = { realNames: data.name, userNames: data.login };
        return array;
      }),
    fetch(`https://api.github.com/users/${name2}`)
      .then((res) => res.json())
      .then((data) => {
        const array = { realNames: data.name, userNames: data.login };
        return array;
      }),
    fetch(`https://api.github.com/users/${name3}`)
      .then((res) => res.json())
      .then((data) => {
        const array = { realNames: data.name, userNames: data.login };
        return array;
      }),
  ]).then(([user1, user2, user3]) => {
    result9.push(
      [user3.userNames, user1.userNames, user2.userNames],
      [user3.realNames, user1.realNames, user2.realNames]
    );
  });
  return result9;
};

console.log(fetchGithubUsers(username1, username2, username3));
