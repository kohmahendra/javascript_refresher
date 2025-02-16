const actors = [
    {
        "name": "Tom Cruise",
        "age": 56,
        "bornAt": "Syracuse, NY",
        "birthDate": "July 3, 1962",
        "weight": 67.5,
        "hasChildren": true,
        "hasGreyHair": false
    },
    {
        "name": "Robert Downey Jr.",
        "age": 53,
        "bornAt": "New York City, NY",
        "birthDate": "April 4, 1965",
        "weight": 77.1,
        "hasChildren": true,
        "hasGreyHair": false
    }
];



const actorsCopy = actors.map(actor => actor);

//console.log(actors);
//console.log(actorsCopy);

const actorsUpdated1 = actors.map((actor) => actor.weight); //only retrieving weight of actors 
console.log(actorsUpdated1);

//const actorsUpdated2=actors.map((actor)=>actor.weight=0); //modifying every actor weight to 0
//console.log(actorsUpdated2);


const filtedEExample1 = actors.filter((actor) => actor.weight <= 70); //filtering
console.log(filtedEExample1);

console.log("*******************************************************************************");

// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

// What you need [20, 24, 56, 88]

//Without Map
var officersIds = [];
officers.forEach(function (officer) {
    officersIds.push(officer.id);
});


//with Map
var officersIds2 = officers.map(officer => officer.id);
console.log(officersIds2);

//.reduce()

var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];


  var totalYears = pilots.reduce((accumulator, eachPilot)=> {return accumulator + eachPilot.years;}, 0);
  console.log(` totalYears is ${totalYears}`);

  //Now let’s say I want to find which pilot is the most experienced one. For that, I can use reduce as well:

  var mostExpPilot = pilots.reduce( (oldest, pilot) =>{return (oldest.years || 0) > pilot.years ? oldest : pilot;}, {});

  console.log(` mostExpPilot is ${JSON.stringify(mostExpPilot)}`);

  //Filter

  var moreThan20Years = pilots.filter( (pilot)=> pilot.years > 20);
  var lessThan20Years = pilots.filter( (pilot)=> pilot.years <= 20);
  console.log(` moreThan20Years is ${JSON.stringify(moreThan20Years)}`);
  console.log(` lessThan20Years is ${JSON.stringify(lessThan20Years)}`);


  var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

  //Our objective: get the total score of force users only. Let’s do it step by step!

  const totalJediScore = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((accumulator, score) => accumulator + score, 0);


  console.log(` totalJediScore is ${totalJediScore}`);