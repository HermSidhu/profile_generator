const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userInfo = {
  name: "",
  activity: "",
  music: "",
  meal: "",
  food: "",
  sport: "",
  superpower: ""
};

const populate = function (ans, key) {
  userInfo[key] = ans;
}

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  populate (answer, "name")
  rl.question("What's an activity you like doing?", (answer) => {
    populate (answer, "activity")
    rl.question("What do you listen to while doing that?", (answer) => {
      populate (answer, "music")
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        populate (answer, "meal")
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          populate (answer, "food")
          rl.question("Which sport is your absolute favourite?", (answer) => {
            populate (answer, "sport")
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              populate (answer, "superpower")
  console.log(`Thank you for your valuable feedback: ${userInfo.name}`);
  rl.close();
  console.log(`${userInfo.name} loves listening to ${userInfo.music} while ${userInfo.activity}, devouring ${userInfo.food} for ${userInfo.meal}, prefers ${userInfo.sport} over any other sport, and is amazing at ${userInfo.superpower} at inopportune times.`);
});
});
});
});
});
});
});