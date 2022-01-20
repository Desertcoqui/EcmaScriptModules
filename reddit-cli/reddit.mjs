#! /usr/bin/env node
//type reddit to print out statement below. This is directly tied to the package.json #bin
//line one is the shabang or hashbang- its tells the comp where the interpreter is located, which is Node.Js
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

//returns an array which contains the arguments passed to the process when we run it in the
//command line. This is an object to pass in flags
const {argv} = yargs(process.argv)
console.log(process.argv);


//fetch returns status code from browser
const res = await fetch ('https://reddit.com/.json')

//a promise with a return from the reddit json file to get data
const data = await res.json()
console.log(data);


//children is the name of the object array once we print out const data.
const children = data.data.children

//grabs random post from reddit
const randomRedditPost = children [Math.floor(Math.random() * children.length)]

const link = `https://reddit.com${randomRedditPost.data.permalink}`

if (argv.print){
    console.log (`
    title: ${randomRedditPost.data.title}
    link: ${link}
    `)
} else {
    open (link)
}

//command line reddit --print to open random post in the command line or 
//type reddit in command line to open random post in terminal

console.log("wepa, this is my Reddit CLI")

  