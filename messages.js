//set up strings
const subjects = [
    "The rogue AI", "A caffeine-deprived intern", "The neon-clad bounty hunter", 
    "An ancient mechanical owl", "The last surviving disco dancer", "A sentient cloud of glitter", 
    "The legendary street racer", "A mysterious pizza delivery bot", "The lead singer of a virtual band", 
    "A grumpy time-traveler"
];

const verbs = [
    "accidentally hacked into", "is currently daydreaming about", "must immediately sabotage", 
    "decided to overclock", "is trying to explain the internet to", "finally discovered the shortcut to", 
    "wants to aggressively barter for", "is legally required to dance with", "secretly replaced the batteries in", 
    "found a way to teleport"
];

const objects = [
    "the mainframe of a galactic bank", "a mountain of expired energy drinks", "the secret society of garden gnomes", 
    "a floating city made of recycled plastic", "the world's most powerful toaster", "a black hole located in a laundromat", 
    "the underground championships of rock-paper-scissors", "a collection of rare, 21st-century memes", 
    "the blueprints for a cardboard spaceship", "a digital forest where it only rains binary"
];

//pick a random message
const pickRandomString = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

