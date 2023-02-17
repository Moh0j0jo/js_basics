let favoritePlaces = []

addFavoritePlace("Galápagos Islands")
addFavoritePlace("Great Pyramid of Giza")
addFavoritePlace("Eiffel Tower")
addFavoritePlace("Great Wall of China")
addFavoritePlace("Trans Bhutan Trail")
addFavoritePlace("Colosseum of Rome")
addFavoritePlace("Great Smoky Mountains National Park")


function addFavoritePlace (placeName) {
  let string = placeName.toLowerCase();
  if (!string.includes("great")){
    favoritePlaces.push(placeName);
  }
};

function printFavoritPlaces() {
  favoritePlaces.forEach(element => {
    console.log(`Favorite places: .. ${element}`);
  });
};