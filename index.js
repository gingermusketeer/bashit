#!/usr/bin/env node

var workshopper = require('workshopper')
var path = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'bashup',
    title       : 'Intro to bash',
    subtitle    : 'Learn the basics of bash',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})
