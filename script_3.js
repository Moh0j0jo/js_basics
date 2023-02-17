// const person1 = 'Cyclops';
// const person2 = 'Princess Diana';
// const numOfEyesOfFirst = 1;
// const numOfEyesOfSecond = 2;

const person1 = 'Frodo Baggins';
const person2 = 'Shelob the spider';
const numOfEyesOfFirst = 2;
const numOfEyesOfSecond = 8;


const mostLovedOnes = ['Princess Diana', 'David Attenborough', 'Rowan Atkinson', 'David Beckham'];
let n = Math.abs(numOfEyesOfFirst - numOfEyesOfSecond)
const joinedNames =  (person1 + person2).split(" ").join("");
const lengthOfJoinedNames = joinedNames.length;

const joinedNamesHasEvenCharacters = ()=>{
  return (lengthOfJoinedNames % 2 == 0);
};

const person1IsPerfectToAnyone =  () => {
  return mostLovedOnes.includes(person1)
};

const person2IsPerfectToAnyone =  () => {
  return mostLovedOnes.includes(person2)
};


const diffOfNumOfEyesIsLow = ()=>{
    return (n <= 5)
};

console.log(lengthOfJoinedNames,joinedNamesHasEvenCharacters())
console.log(person1, person1IsPerfectToAnyone())
console.log(person2, person2IsPerfectToAnyone())
console.log(n, diffOfNumOfEyesIsLow())

if (((joinedNamesHasEvenCharacters(lengthOfJoinedNames) && diffOfNumOfEyesIsLow(numOfEyesOfFirst, numOfEyesOfSecond)) || person1IsPerfectToAnyone(person1) || person2IsPerfectToAnyone(person2))) { 
  console.log('❤️');
} else {
  console.log("😢");
};