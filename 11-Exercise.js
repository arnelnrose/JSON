// Array of JSONs with different keys and values.
let Hero = [
    {
        name: "Gusion",
        type: "Assassin",
        role: "Core",
        items: ["Genius Wand","Dive Glaive", "Holy Crystal"]
    },
    {
        name: "Layla",
        type: "Marksman",
        role: "Gold Laner",
        items: ["Demon Hunter Sword","Haas Claw", "Berserker Fury"]
    },
    {
        name: "Tigreal",
        type: "Tank",
        role: "Roam",
        items: ["Athena's Shield","Dominance Ice", "Antique Cuirass"]
    },
];

// Iterating Arrays and display all its values.
for(let i = 0; i < Hero.length; i++){
    console.log(`Name  : ${Hero[i].name}`);
    console.log(`Type  : ${Hero[i].type}`);
    console.log(`Role  : ${Hero[i].role}`);
    console.log(`Items : ${Hero[i].items}`);
    console.log("");
}
