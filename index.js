const ourCohort = [
    "Erica Rojo",
    "Natalie Barba",
    "Joe Orekhov",
    "Tina Guliuzza",
    "Gabriel Rodriguez",
    "Shawna Akiona",
    "Charles Oneymem",
    "Melissa Funk",
    "Gabriel Miranda",
]
const coursePhases = [
    {phaseNumber: 1, name: "Vanilla JavaScript", language: "JavaScript", framework: "None"},
    {phaseNumber: 2, name: "JS, React, & Redux", language: "JavaScript", framework: "React"},
    {phaseNumber: 3, name: "Vanilla Ruby", language: "Ruby", framework: "None"},
    {phaseNumber: 4, name: "Rails as an API", language: "Ruby", framework: "Rails"},
    {phaseNumber: 5, name: "Capstone Project", language: "Ruby & JavaScript", framework: "Rails & React"}
]
// Write your functions here!
function sortCohortDesc(){
    let sortedArray = [...ourCohort];
    sortedArray = sortedArray.sort();
    sortedArray = sortedArray.reverse();
    return sortedArray;
}
function shortNames() {
    let shortNamesOnly = [...ourCohort];
    shortNamesOnly = ourCohort.filter(ourCohort => ourCohort.length <= 15)
    return shortNamesOnly;
}
function cohortSize() {
     return ourCohort.length
}
function locateStudent(name) {
    let locator = [...ourCohort];
    locator  = ourCohort.find(x => x === name)
    return locator;
}
function phaseNames (){
    return coursePhases.map(
    function (x){
        x= x.name
        return x;
    })
 }
 function cohortPhases(){
    let javascriptPhase = coursePhases.filter(object => object.language.includes("JavaScript") === true)
    return javascriptPhase;
}
function allTheGabes(){
    let gabesOnly = ourCohort.filter(element => element.includes("Gabriel") === true)
    return gabesOnly;
}
function studentAndPhase(){
    let newArray = ourCohort.map(element => element + ' is currently in Phase 1!')
    return newArray;
}
function sortPhasesByName(){
    let newArray = coursePhases.map(element => element + ' is currently in Phase 1!')
    return newArray;
}
function sortPhasesByName(){
    let coursePhasesCopy = [...coursePhases]
  // sort by name
    return coursePhasesCopy.sort(function(a, b) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
}

// You don't have to change anything below this line
// These console logs are for you to check your work in the browser console.


console.log(sortCohortDesc())
console.log(shortNames())
console.log(cohortSize())
console.log(locateStudent("Joe Orekhov"))
console.log(phaseNames())
console.log(cohortPhases())
console.log(allTheGabes())
console.log(studentAndPhase())
console.log(sortPhasesByName())
