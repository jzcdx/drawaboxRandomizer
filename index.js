var exercises = [
    "Superimposed Lines",
    "Ghosted Lines",
    "Ghosted Planes",
    "Table of Ellipses",
    "Ellipses in Planes"
];

var exerciseList = document.getElementById("exercise-list");
var resultDiv = document.getElementById("result");

function populate() {
    for (i in exercises) {
        var newNode = document.createElement("li");
        newNode.innerHTML = exercises[i];
        exerciseList.appendChild(newNode);
    }
}

function randomize(quantity) {
    var temp = exercises.slice();
    const newChildren = [];
    for (var i = 0; i < quantity; i++) {
        var index = getRandomInt(temp.length);
        var exercise = temp[index];
        newChildren.push(createNewExercise(exercise))
        temp.splice(index, 1);
        console.log(exercise + " " + temp.length);
    }

    resultDiv.replaceChildren(newChildren)
}

function createNewExercise(exercise) {
    newNode = document.createElement("label");
    newNode.innerHTML = exercise;
    return newNode;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}