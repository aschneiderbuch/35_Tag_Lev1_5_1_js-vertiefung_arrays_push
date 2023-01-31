console.log("test");
/* 
Frage


Array songs     
    am Ende einfügen mit push ()
        */


const songs = [];
songs.push("Bohemian Rhapsody");
songs.push("Stairway to Heaven");
songs.push("Hotel California");

songs.push("Sweet");
songs.push("Child");
songs.push("O`Mine");

const totalSongs = songs
console.log(totalSongs);
console.log(songs);


const besteFussbballerAllerZeiten = [];
besteFussbballerAllerZeiten.unshift("BesteSpieler1");

besteFussbballerAllerZeiten.push("BesteSpieler2");
besteFussbballerAllerZeiten.push("BesteSpieler3");
besteFussbballerAllerZeiten.push("BesteSpieler4");
besteFussbballerAllerZeiten.push("BesteSpieler5");

besteFussbballerAllerZeiten.push("Torwart2");

besteFussbballerAllerZeiten.unshift("Torwart1");

besteFussbballerAllerZeiten.push("Torwart3");



songs.push("gefällt mir nicht 1", "gefällt mir nicht 2", "gefällt mir nicht 3");

besteFussbballerAllerZeiten.push("besteTrainer 1", "besteTrainer 2", "besteTrainer 3",);

console.log(songs);
console.table(songs);
console.table(totalSongs);
console.table(besteFussbballerAllerZeiten);