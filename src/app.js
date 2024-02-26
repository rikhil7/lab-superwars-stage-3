
const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo",
];


// ! initialize players with image and strength

const initPlayers = (players) => {
    let detailedPlayers = [];
    
    // ^ Instead of forloop use Map method
    // Code here
    
    players.map((curr,i) => {
        var currPlayer = i%2 == 0 ? "hero" : "villain"
        
        var initialize = {
            name: curr,
            strength: getRandomStrength(),
            image: `./images/super-${i+1}.png`,
            type: currPlayer
        };  
        
        detailedPlayers.push(initialize);
    });
    return detailedPlayers;
};

// ! getting random strength

var getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
};

// ! Build player template
    const buildPlayers = (players, type) => {
        let fragment = "";
        
        // ^ Instead of using for loop
        // ^ Use chaining of Array methods - filter, map and join
        // Type your code here
        
        fragment = players.filter((curr) => curr.type === type).map((curr) => `<div class="player">
        <img src="${curr.image}" alt="">
        <div class="name">${curr.name}</div>
        <div class="strength">${curr.strength}</div></div>`
        
        ).join("");
        
        return fragment;
    }
    
    // ! Display players in HTML
    
    const viewPlayers = (players) => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(players,"villain");
};

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
};

