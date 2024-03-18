'use strict';
console.log('the script starts');

function synchronousFunction() {
  let number = 1;
  for(let i = 1; i < 100000; i++){
    number += i;
    console.log('synchronousFunction running');
  }
  console.log('regular function complete', number);
}

function synchronousFunction2() {
    console.log('je täällä!');

}    



async function asynchronousFunction() {
  console.log('async haku alkaa');

fetch('https://reqres.in/api/users?page=2')
.then((response) => {

  //tee jotain vastaukselle
  console.log('vastaus:');
  //console.log('response');

  //response.ok

  if (!response.ok) {
    throw new Error('Verkkovastaus ei ollut kunnossa');
  }
  return response.json();
})
.then((data) => {
  //tee jotain vastauksen ja tiedon kanssa
  console.log(data);
})
.catch((error) => {
  console.error('Fetch-operaatiossa ilmeni ongelma:', error);
});
} 

async function asynchronousFunction2() {
  try {
    const vastausdata = await fetch('https://reqres.in/api/users?page=2');

    //parse muuttaa vastauksen json muotoon. Kestää -> async
    const data = await response.json();
    console.log(vastausdata);
    console.log(vastausdata.total_pages);
  } catch (error) {
    console.error('Virhe:', error);
  }
}

async function getFromOwnApi() {
  try {
    const vastausdata = await fetch('https://reqres.in/api/users?page=2');

    //parse muuttaa vastauksen json muotoon. Kestää -> async
    const data = await response.json();
    console.log(vastausdata);
  } catch (error) {
    console.error('Virhe:', error);
  }
}

synchronousFunction();
asynchronousFunction2();
asynchronousFunction();
getFromOwnApi();