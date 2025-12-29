//set up strings
const str1 = ['You should', 'You could', 'You have to'];
const str2 = ['buy', 'get', 'listen to'];
const str3 = ['flowers', 'yourself', 'me'];

//pick a random message
const pickRandomString = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}
//console.log(pickRandomString(str2));

