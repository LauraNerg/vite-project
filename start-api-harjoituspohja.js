//TÄMÄ SISÄLTÄÄ YLIMÄÄRÄISTÄ KOODIA, JOITA EI SIVUSTON TOIMIMISEEN TARVITA

import './style.css';
import { fetchData } from './fetch.js';

const bt1 = document.querySelector('.get_entry');
bt1.addEventListener('click', async () => {
  console.log('Klikki toimii');
  const url = 'https://laura.northeurope.cloudapp.azure.com/api/entries/1';

  fetchData(url).then((data) => {
    // käsitellään fetchData funktiosta tullut JSON
    console.log(data);
  });

  // # Get entries by id
  // # GET http://localhost:3000/api/entries/:id
});

// Haetaan kaikki käyttäjät ja luodaan niistä taulukko
// 1. Hae ensin nappula ja kutsu funktiota (keksi nimi)

const allButton = document.querySelector('.get_users');
allButton.addEventListener('click', getUsers);

async function getUsers() {
  console.log('Haetaa kaikki käyttäjät');
  const url = 'https://laura.northeurope.cloudapp.azure.com/api/users';
  let token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer: ' + token,
    },
  };

  fetchData(url, options).then((data) => {
    console.log(data);
  });

  // vaihtoehtoinen tapa
  try {
    const responseData = await fetchData(url, options);
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}

  function createTable(data) {
    console.log(data);

    //loopissa luodaan jokaiselle tietoriville oikeat elementit. Elementtien sisään laitetaan oikeat tiedot

    const tbody = document.querySelector('.tbody');

    data.forEach(element => {
      console.log(element.username,rivi.user_id,rivi.user_level);

      // luodaan jokaiselle riville ensin tr elementti = rivi alkuun

      const tr = document.createElement('tr');

      //luodaan soluja mihin tiedot laitetaan

      const td1 = document.createElement('td');
      td1.innerText = element.username;

      const td2 = document.createElement('td');
      td2.innerText = element.username;

      // td3
     const td3 = document.createElement('td');
     const button1 = document.createElement('button');
     button1.className = 'check';
     button1.setAttribute('data-id', element.user_id);
     button1.innerText = 'Info';
     td3.appendChild(button1);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      tbody.appendChild(tr);

    });
  }

  function getUser() {
    console.lof('Klikkasit riviä');
  }

async function showUserName() {
  console.log('Hei täällä ollaan! Nyt pitäisi hakea käyttäjän tiedot');

  // hae käyttäjän omat tiedot
  // 1. joko lokal storagesta jos on tallessa
  //let name = localStorage.getItem('name');

  // hae elementti johon printtaat tiedot
  //console.log('Nimesi on:', name);
  //document.getElementById('name').innerHTML = name;

  // 2. hae uudestaan /api/auth/me endpointin kautta

  const url = 'https://laura.northeurope.cloudapp.azure.com/api/auth/me';
  let token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer: ' + token,
    },
  };
  fetchData(url, options).then((data) => {
    console.log(data);
    document.getElementById('name').innerHTML = data.user.username;
    // muita hakuja ja tietoja sivulle, kuten email ym. mitä halutaan näyttää
  });
}

showUserName();


async function getAllUsers() {
  console.log('toimii!');

  try {
    const response = await fetch('https://laura.northeurope.cloudapp.azure.com/api/users');
    console.log(response);
    const data = await response.json();
    console.log(data);

    data.forEach((element) => {
      console.log(element.username);
    });

    // tänne tiedot
    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = '';

    data.forEach((element) => {
      console.log(element.username);

      // Create table row element
      const tr = document.createElement('tr');

      // td1 Username
      const td1 = document.createElement('td');
      td1.innerText = element.username;

      // td2
      const td2 = document.createElement('td');
      td2.innerText = element.user_level;

      // td3
      const td3 = document.createElement('td');
      const button1 = document.createElement('button');
      button1.className = 'check';
      button1.setAttribute('data-id', '1');
      button1.innerText = 'Info';
      td3.appendChild(button1);

      // td4
      const td4 = document.createElement('td');
      const button2 = document.createElement('button');
      button2.className = 'del';
      button2.setAttribute('data-id', '1');
      button2.innerText = 'Delete';
      td4.appendChild(button2);

      // td5
      const td5 = document.createElement('td');
      td5.innerText = element.user_id;

      // Append table data elements to the table row element
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      // Append the table row element to the table (assuming you have a table with the id 'myTable')
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}


