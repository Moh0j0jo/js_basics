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
    },

    {
      title: "BookNev3",
      author: "Pelda Iro3",
      year: 2003,
      isNewerThan2000: true
  },

    {
      title: "BookNev4",
      author: "Pelda Iro4",
      year: 2003,
      isNewerThan2000: true
  },

  {
    title: "BookNev5",
    author: "Pelda Iro5",
    year: 2003,
    isNewerThan2000: true
},

{
  title: "BookNev6",
  author: "Pelda Iro6",
  year: 2003,
  isNewerThan2000: true
},

{
  title: "BookNev7",
  author: "Pelda Iro7",
  year: 2003,
  isNewerThan2000: true
},
]

for (let index = 0; index < favoriteBooks.length; index++) {
  const author = favoriteBooks[index].author;
  const title = favoriteBooks[index].title;
  console.log(`Konyv: ${title} Iroja: ${author}`);
}

 