//RESUELVE TUS EJERCICIOS AQUI
let raza = "komondor";

//1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro
const getAllBreeds = () => {
  return fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((dogs) => dogs.message);
};

//2.- Obten una imagen random de una raza
const getRandomDog = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((dogs) => dogs.message);
};

//3.- Obten todas las imágenes de la raza komondor
const getAllImagesByBreed = () => {
  return fetch("https://dog.ceo/api/breed/komondor/images")
    .then((res) => res.json())
    .then((dogs) => dogs.message);
};

//4.- Obten las imagenes de una raza pasada como argumento a la función
const getAllImagesByBreed2 = () => {
  return fetch(`https://dog.ceo/api/breed/${raza}/images`)
    .then((res) => res.json())
    .then((dogs) => dogs.message);
};

/*
//5.- La función busca usuarios correctamente en la API de gitHub
const getGitHubUserProfile = () => {
  return fetch(`https://api.github.com/users/alenriquez96`)
    .then((res) => res.json())
    .then((data) => data);
};

//6.- La función pinta la info del usuario
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

//7.- La función devuelve una tarjeta con la info del usuario
*/
/*
const getAndPrintGitHubUserProfile = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then(
      (data) =>
        `<section>
    <img src="${data.avatar_url}" alt="Alberto Enríquez">
    <h1>${data.name}</h1>
    <p>Public repos: ${data.public_repos}</p>
</section>`
    );
};
console.log(getAndPrintGitHubUserProfile());


//8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función getAndPrintGitHubUserProfile(username) que se ejecute cuando se pulse el botón buscar.(Esto no se testea)

document.getElementById("buscar").addEventListener("click", function () {
  getAndPrintGitHubUserProfile(document.getElementById("name").value);
});
*/
//9.- La función devuelve un array con la url y el nombre de cada usuario
/*
const url1 = fetch(`https://api.github.com/users/alenriquez96`)
  .then((res) => res.json())
  .then((data) => {
    const array = { name: data.name, url: data.avatar_url };
    return array;
  });

const url2 = fetch("https://api.github.com/users/alejandroereyesb")
  .then((res) => res.json())
  .then((data) => {
    const array = { name: data.name, url: data.avatar_url };
    return array;
  });

const url3 = fetch("https://api.github.com/users/guille")
  .then((res) => res.json())
  .then((data) => {
    const array = { name: data.name, url: data.avatar_url };
    return array;
  });

//const fetchGithubUsers = (adress1, adress2, adress3) => Promise.all([adress1, adress2, adress3]).then((values) =>  console.log(values));

//fetchGithubUsers(url1, url2, url3);*/
/*let result9 = [];

const fetchGithubUsers = (array) =>{
    let result = Promise.all([url1, url2, url3]);
    result.then((data) => data);
    array.push(result)
    return array[0]
}
console.log(fetchGithubUsers(result9));*/
/*
const fetchGithubUsers = (arrayUsers) => {
  Promise.all([
    fetch("https://api.github.com/users/alenriquez96")
      .then((res) => res.json())
      .then((data) => {
        const array = { name: data.name, url: data.avatar_url };
        return array;
      }),
    fetch("https://api.github.com/users/alejandroereyesb")
      .then((res) => res.json())
      .then((data) => {
        const array = { name: data.name, url: data.avatar_url };
        return array;
      }),
    fetch("https://api.github.com/users/guille")
      .then((res) => res.json())
      .then((data) => {
        const array = { name: data.name, url: data.avatar_url };
        return array;
      }),
  ]).then(([user1, user2, user3]) => {
    //console.log( user1.name, user1.url, user2.name,user2.url, user3.name,user3.url,)
    //console.log(user1, user2 ,user3);
    arrayUsers.push(user1,user2, user3)
/* 
    arrayUsers.push(
      {
        name: user1.name,
        url: user1.url,
      },
      {
        name: user2.name,
        url: user2.url,
      },
      {
        name: user3.name,
        url: user3.url,
      }
    );
    //arrayUsers.push(user1, user2, user3)
    //console.log(result9);
    //console.log(arrayUsers);
    
    return arrayUsers;
  });
};
fetchGithubUsers(result9);*/
