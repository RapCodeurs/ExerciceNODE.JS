const page = {
  blocs: [
    {
      id: "block1",
      blocs: [
        {
          id: "block3",
          blocs: [],
        },
        {
          id: "block4",
          blocs: [
            {
              id: "block7",
              blocs: [],
            },
          ],
        },
      ],
    },
    {
      id: "block2",
      blocs: [
        {
          id: "block5",
          blocs: [
            {
              id: "block6",
              blocs: [],
            },
          ],
        },
      ],
    },
  ],
};

createPage = () => {
  createBlocs = (blocs) => {
    const numberBlocks = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < numberBlocks; i++) {
      blocs.push({ id: compteur, blocs: [] });
      compteur++;
    }
  };

  const page = { blocs: [] };
  let compteur = 1;
  createBlocs(page.blocs);
  page.blocs.forEach((bloc) => {
    createBlocs(bloc.blocs);
    bloc.blocs.forEach((bloc) => {
      createBlocs(bloc.blocs);
      bloc.blocs.forEach((bloc) => {
        createBlocs(bloc.blocs);
      });
    });
  });
  return page;
};

getBlock = (bloc, blocs) => {
  if (bloc.blocs.length > 0) {
    bloc.blocs.forEach((b) => {
      blocs.push(b.id);
      getBlock(b, blocs);
    });
  }
};

let page1 = createPage(); // création d'un objet page aléatoire
console.log(page1);

const idblocs = []; // tableau de stockage des id de chaque bloc
// On boucle sur le tableau de blocs contenu dans page
page1.blocs.forEach((bloc) => {
  idblocs.push(bloc.id); // stock les id des blocs
  getBlock(bloc, idblocs); // appel de la fonction récursives
});

console.log(idblocs);

let car = {
  type: "Toyota",
  color: "Blue",
  doors: 4,
  airConditionner: true,
};

for (let proprety in car) {
  console.log(proprety + ": " + car[proprety]);
}

let myArray = [1, 2, 3, 4, 5, 6];
const [, myNumber] = myArray;
console.log(myNumber); // 2
myArray.splice(0, 4);
console.log(myArray); // [5, 6]
myArray = [myNumber, ...myArray];
console.log(myArray); // [2, 5, 6];

const workers = [
  {
    nameWorkers: "Benjamin",
    age: 25,
    nbHour: 35,
    alert: function () {
      let statut = `Employé :${this.nameWorkers}, heures: ${this.nbHour}`;
    },
  },

  {
    nameWorkers: "Luc",
    age: 45,
    nbHour: 36,
    messages: function () {
      return `${nameWorkers}: ${nbHour}`;
    },
  },

  {
    nameWorkers: "Marie",
    age: 23,
    nbHour: 35,
    messages: function () {
      return `${nameWorkers}: ${nbHour}`;
    },
  },

  {
    nameWorkers: "Jeanne",
    age: 36,
    nbHour: 30,
    messages: function () {
      return `${nameWorkers}: ${nbHour}`;
    },
  },

  {
    nameWorkers: "Jean",
    age: 37,
    nbHour: 35,
    messages: function () {
      let alerte = "";
      for (let i = 0; i < workers.length; i++) {
        if (workers[i].nbHour !== 35) {
          alerte += `${workers[i].alert()} \n`;
        }
      }
    },
  },
];

console.log(workers[4].alert());

function squareNumber(number) {
  return number * number;
}

let numbers = [0, 9, 5, 4, 6, 8, 2];

let squareNumbers = numbers.map(squareNumber);
let otherNumbers = squareNumbers.map(function (element) {
  return element / 2;
});

console.log(numbers);
console.log(squareNumbers);
console.log(otherNumbers);

// 4)
initialize();

function logged() {
  console.trace();
  console.log("Hello");
}

function login() {
  logged();
}

function initialize() {
  login();
}

logged();

const nomberMax = 50;
const numberPlace = 50;

if (nomberMax <= numberPlace) {
  // Write your code here instead of this comment
  console.log(true);
} else {
  // Write your code here instead of this comment
  console.log(false);
}

//2)

const message = "Le nombre d’invités est trop important";
console.assert(nomberMax > numberPlace, { nomberMax, numberPlace, message });
// Write your code here instead of this comment
// Write your code here instead of this comment
// 3) The user name is displayed in the console.
// Write your code here instead of this comment

const date = new Date(2020, 11, 25);
const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.getTime());

console.log(date.getMonth());

date.setHours(date.getHours() + 20);
date.setMinutes(date.getMinutes() + 30);

date.setHours(20, 30);

console.log(date.toLocaleDateString());
console.log(date.toLocaleString("fr-FR", options));

const birthday = new Date(2020, 11, 25, 20, 30);
const birthdayNew = new Date(
  birthday.getFullYear() + 5,
  birthday.getDay(),
  birthday.getMonth() + 6,
  birthday.getHours() + 12
);

console.log(birthdayNew);

/*
const birthday = new Date(2020, 11, 25, 20, 30);

birthday.setFullYear(birthday.getFullYear() + 5);
birthday.setMonth(birthday.getMonth() + 6);
birthday.setHours(birthday.getHours() + 12);

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

console.log(birthday.toLocaleString());

console.log(birthday.toLocaleString("en-EN", options));
*/

// Nous souhaitons écrire un script capable de comparer la date d'une commande
// en ligne avec une période de promotion pour savoir si la commande bénéficie de la remise.
// La commande a été passée le 22 décembre 2019 à 10:45.
// La promotion a débuté le 18 décembre 2019 à 18:00 et dure 10 jours.

const promoteDay = moment("2019-11-18 18:0");
const commandeDay = moment("2019-11-22 10:45");
const newdate = promoteDay.setDate(promoteDay.getDate() + 10);
const dateNew = commandeDay.isBetween(promoteDay, newdate);
console.log(promoteDay.getTime());
console.log(commandeDay.getTime());
console.log(newdate);
console.log(dateNew);

if ((commandeDay < newdate, dateNew)) {
  console.log("Vous bénéficiez de la promotion");
} else {
  console.log("Vous ne bénéficiez plus de la promotion");
}
