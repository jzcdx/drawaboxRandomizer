var exercises = [
    "Superimposed Lines",
    "Ghosted Lines",
    "Ghosted Planes",
    "Table of Ellipses",
    "Ellipses in Planes"
];

var exerciseList = document.getElementById("exercise-list");

function populate() {
    for (i in exercises) {
        var newNode = document.createElement("li");
        newNode.innerHTML = exercises[i];
        exerciseList.appendChild(newNode);
    }
}

function randomize(quantity) {
    console.log("helo")
    var temp = exercises;
    for (var i = 0; i < quantity; i++) {
        var exercise = temp.pop(getRandomInt(temp.length))
        console.log(exercise + " " + temp.length);
    }
}

function test() {
    console.log("hi")
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}