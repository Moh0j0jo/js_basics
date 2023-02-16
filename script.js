let favoriteBooks = [
    {
        title: "Öreg néne őzikéje",
        author: "Fazekas Anna",
        year: 1952,
        isNewerThan2000: false,
    },
    {
        title: "Szamárfül",
        author: "Romhányi József",
        year: 2003,
        isNewerThan2000: true
    }
]

for (let index = 0; index < favoriteBooks.length; index++) {
  const author = favoriteBooks[index].author;
  let title = favoriteBooks[index].title;
  const ischeck = favoriteBooks[index].isNewerThan2000;
  const year = favoriteBooks[index].year;
  let age = ""
  
  // if (ischeck){
  //   age = "newer"
  //  } else {
  //   age = "older"
  // }
  // console.log(`Book: ${title} This book is ${age} than 2000`);

  if (year > 2000){
    age = "newer"
   } else {
    age = "older"
  }
  console.log(`Book: ${title} This book is ${age} than 2000`);
};
  
