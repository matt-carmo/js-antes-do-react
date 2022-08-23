

//Objetos {}

document.body.innerText = user

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

document.body.innerText = user.address? user.address.street: 'Não '

/*https://www.youtube.com/watch?v=37SwqREHRGI*/
/*36:13*/