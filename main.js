

//Objetos {}

// document.body.innerText = user

// document.body.innerText = ('name' in user)

// document.body.innerText = Object.keys(user)
// document.body.innerText = Object.values(user)
// document.body.innerText = JSON.stringify(Object.values(user))
// document.body.innerText = JSON.stringify(Object.entries(user))

//Desestruturação

// const address = user.address
// function mostraIdade({idade}){
//   return idade
// }
//*Utilizando idade:age posso renomear a váriavel idade para age*/
// const { address, idade:age, nickname = 'Fernandes'} = user ;

// document.body.innerText = mostraIdade(user)
//Rest Operator
// const { name, ...rest} = user;
// document.body.innerHTML = JSON.stringify(rest)

// const array = [1,2,3,4,5,6,7,8,9,10];
// const [first, second, ...rest] = array


// document.body.innerText = JSON.stringify({first, second, rest})


// shortSintax

// const nome = 'Matheus'
// const age = 22
// const user = {
//   nome,
//   age ,
// }
//   document.body.innerText = JSON.stringify(user)

// optional Chaining

// document.body.innerText = user.address? user.address.street: 'Não '



const array = [1,2,3,4,5,6,] /*Every return true case not contains number  */

/*Map*/
const newMap = array.map(item => {
  return item * 2
})

/*Filter*/
const newFilter = array
.filter(item => item % 2 === 0 )


/*Filter with map*/
const newFilterWithMap = array
.filter(item => item % 2 === 0 )
.map(item => item * 10)
/**/

/*Every*/
const allItensAreNumbers = array.every(item => typeof item === 'number')
/*Some*/
const peloMenosUmItemNaoEhNumero = array.some(item => {
  return typeof item !== 'number'
})

/*find (encontra somente o primeiro número da condição*/
const par = array.find(item => item % 2 === 0 );

/*reduce*/
const soma = array.reduce((accumulator, item) => {
  return accumulator + item
}, 0)


document.body.innerHTML = JSON.stringify(soma) 
/*https://www.youtube.com/watch?v=37SwqREHRGI*/

/*Template Literals */

const name = 'Diego';
const message = `Bem-Vindo ${name ? name: 'Renato'}`


document.body.innerHTML = JSON.stringify(message)
/*36:13*/

/*Promises "Nem tudo na programação é sincrono 1:02:00*/
// fetch('https://api.github.com/users/matt-carmo').then(response => {
//  return response.json()
// }).then(body => {
//   console.log(body)
// })
// .finally(() => {
//   console.log('deu')
// })

/*Async*/
const buscaDadosGitHub = async () => {
  try{
    const response = await fetch('https://api.github.com/users/matt-carmo');
    const body = await response.json()
    return body.name 
  }
  catch(e){
    console.log(err)
  }
  finally{
    console.log('Deu')
  }
}
/* */
buscaDadosGitHub().then(name => {
  console.log(name)
})


/*Imports (lembre-se do export sempre)*/

import {sumSoma} from './lib/math'

console.log(sumSoma(1, 2))