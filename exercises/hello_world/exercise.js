var Exercise = require('workshopper-exercise')
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')
var exercise = new Exercise()

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise, {exec: "bash"})

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise
