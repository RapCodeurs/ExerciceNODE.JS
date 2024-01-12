/*Dans cet exercice, nous voulons gérer les dates des Jeux Olympiques d'été de 2028 
à Los Angeles, qui commenceront le 21 juillet 2028 et qui dureront 16 jours. 
Nous voulons donc afficher toutes les informations utiles concernant cet événement, 
comme la date de la cérémonie d'ouverture (date de début ), 
la date de la cérémonie de clôture (date de fin), 
ainsi que le nombre de jours restants entre la date actuelle 
et la date de début de l'événement.

Il nous faut donc :

Créer la date initiale (dateStart).

Calculer et créer la date de fin (dateEnd).

Afficher dateStart et dateEnd au format long (ex : samedi 29 février 2020) dans la console.

Créer la date courante currentDate et calculer la différence (result) avec la date de début, puis convertir cette différence en nombre de jours.

Afficher la date courante au format long (ex : samedi 29 février 2020) dans la console et afficher le nombre de jours de différence dans la console.


const dateStart = new Date(2028, 6, 21);
const currentDate = new Date();
const result = dateStart.getTime() - currentDate.getTime();
const day = result / 1000 / 60 / 60 / 24;


const options = { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
   }

console.log(dateStart.toLocaleString('fr-FR', options))

console.log("--------")
const dateEnd = new Date(
    dateStart.getFullYear(),
    dateStart.getMonth(),
    dateStart.getDate() + 16,
    dateStart.getDay()
)


console.log(dateEnd.toLocaleDateString('fr-FR', options))
console.log("--------")

console.log(result)
console.log(day)
console.log("--------")

console.log(currentDate.toLocaleDateString('fr-FR', options))

let numbers = [98, 100, 102, 500, 10, '97', 'bonjour']

console.log(numbers.filter((element) => element <= 100));



const listTemperature = {
    month: 'January',
    tempPerDay : [
      {day: 1, temp: 15},
      {day: 2, temp: 10},
      {day: 3, temp: 14},
      {day: 4, temp: 20},
      {day: 5, temp: 18},
      {day: 6, temp: 17},
      {day: 7, temp: 15},
      {day: 8, temp: 16},
      {day: 9, temp: 15},
      {day: 10, temp: 9},
      {day: 11, temp: 10},
      {day: 12, temp: 13},
      {day: 13, temp: 14},
      {day: 14, temp: 11},
      {day: 15, temp: 12},
      {day: 16, temp: 16},
      {day: 17, temp: 17},
      {day: 18, temp: 14},
      {day: 19, temp: 15},
      {day: 20, temp: 11},
      {day: 21, temp: 11},
      {day: 22, temp: 10},
      {day: 23, temp: 19},
      {day: 24, temp: 22},
      {day: 25, temp: 18},
      {day: 26, temp: 17},
      {day: 27, temp: 16},
      {day: 28, temp: 13},
      {day: 29, temp: 15},
      {day: 30, temp: 20},
      {day: 31, temp: 22}
    ]
  }

let tableTemp = [];

for (let counter = 0; counter < listTemperature.tempPerDay.length; counter++) {
  if (listTemperature.tempPerDay[counter].temp > 20) {
    tableTemp.push(listTemperature.tempPerDay[counter].temp);
  }
}

console.log(tableTemp)*/

/*
let userTemplate = { name: '', isAdmin: false }

function createUser(name, isAdmin) {
    let newUser = {}
    Object.assign(newUser, userTemplate)
    newUser.name = name
    newUser.isAdmin = isAdmin

    return newUser
}

let user = createUser('John', false)
let adminUser = createUser('Jane', true)

console.log(user)
console.log(adminUser)*/

/*
let summerMenu = [{
    name: 'Margarita', 
    prices: {
      medium: 6.00,
      large: 8.00
    }
  }, { 
    name: 'Jambon Fromage',
    prices: {
      medium: 7.00,
      large: 9.00
    }
  }, {
    name: 'Mozzarella',
    prices: {
      medium: 6.00,
      large: 8.00
    }
  }]
  
  function createNewMenu(originalMenu, priceModifier) {
    let newMenu = JSON.parse(JSON.stringify(originalMenu))
  
    for (pizza of newMenu) {
      pizza.prices.medium *= priceModifier
      pizza.prices.large *= priceModifier
    }
  
    return newMenu
  }
  
  let winterMenu = createNewMenu(summerMenu, 1.1)
  
  console.log(summerMenu)
  console.log(winterMenu)*/

 /* const numbers = [
    { id: 1, letter: 'un' }, 
    { id: 2, letter: 'deux' }, 
    { id: 3, letter: 'trois' }, 
    { id: 4, letter: 'quatre' }, 
    { id: 5, letter: 'cinq' }, 
    { id: 6, letter: 'six' }, 
    { id: 7, letter: 'sept' }, 
    { id: 8, letter: 'huit' }, 
    { id: 9, letter: 'neuf' }, 
    { id: 10, letter: 'dix' }
  ]
  const children = ['Julie', 'Benjamin', 'Thomas', 'Manon', 'Anaïs']
  
  let childObject = { name: '' }
  let scores = []
  
  for (let i = 0; i < children.length; i++) {
    let newChild = {}
    Object.assign(newChild, childObject)
    newChild.name = children[i]
    console.log(`${newChild.name} dit :`)
    
    let count
    for (count = 0; count < numbers.length; count++) {
      let newNumbers = [...numbers]
      console.log(`- ${newNumbers.splice(count, 1)[0].letter}`)
    }
  
    scores.push({ child: newChild, count: count })
  }
  
  console.log('Résultat :')
  for (let score of scores) {
    console.log(`- ${score.child.name} sait compter jusqu'à ${score.count}.`)
  }*/

const getDayOfDate = (day, month, year) => {
    const d = new Date(year, month, day);
    switch (d.getDay()) {
        case 0:
            return 'Dimanche'
            case 1:
            return 'Lundi'
            case 2:
            return 'Mardi'
            case 3:
            return 'Mercredi'
            case 4:
            return 'Jeudi'
            case 5:
            return 'Vendredi'
            case 6:
            return 'Samedi'
    }
}

let test = () => {
    if (getDayOfDate(15, 4, 2020) === 'Vendredi') {
        return true
    } 
    return false
    
}

console.log(test())